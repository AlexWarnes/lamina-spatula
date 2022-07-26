import { derived, writable } from 'svelte/store';
import type { LayerMaterialProps } from 'lamina/types';
import { Color, Depth, Displace, Fresnel, Gradient, Noise } from 'lamina/vanilla';
import {
	extractColorProps,
	extractDepthProps,
	extractDisplaceProps,
	extractFresnelProps,
	extractGradientProps,
	extractNoiseProps,
	mutateCommonProps
} from './layers';
// import { rxWritable } from 'svelte-fuse-rx';

const defaultSceneSettings = {
	background: '#36363f',
	autoRotate: false,
	directionalLight: true,
	ambientLight: true,
	showGrid: false,
	ACESFilmicToneMapping: false,
	// TODO optional:
	// renderer.outputEncoding = THREE.sRGBEncoding;
}
const defaultBaseLayer: LayerMaterialProps = {
	color: '#d9d9d9',
	lighting: 'standard'
};

// TODO: throttle changes to base and scene color inputs
export const sceneSettings = writable(defaultSceneSettings);
export const baseLayer = writable<LayerMaterialProps>(defaultBaseLayer);
export const layers = writable<any[]>([]);
export const laminaData = derived([baseLayer, layers], ([$baseLayer, $layers]) => {
	return { baseLayer: $baseLayer, layers: $layers };
});
export const addNewLayer = (layer) => layers.update((current) => [...current, layer]);
export const removeLayer = (layerID) =>
	layers.update((current) => current.filter((l) => l.uuid !== layerID));
export const moveLayer = (layerID: string, dir: 'UP' | 'DOWN') =>
	layers.update((current) => {
		const layer = current.find((l) => l.uuid === layerID);
		const currentIndex = current.findIndex((l) => l.uuid === layerID);
		let targetIndex = dir === 'UP' ? currentIndex - 1 : currentIndex + 1;
		if (targetIndex < 0 || targetIndex >= current.length) targetIndex = currentIndex;
		const cleanLayers = current.filter((l) => l.uuid !== layerID);
		if (targetIndex === 0) {
			return [layer, ...cleanLayers];
		} else if (targetIndex === current.length - 1) {
			return [...cleanLayers, layer];
		} else {
			const before = cleanLayers.filter((_, idx) => idx < targetIndex);
			const after = cleanLayers.filter((_, idx) => idx >= targetIndex);
			return [...before, layer, ...after];
		}
	});
export const reinstantiateLayer = (layer) => {
	let newLayer;
	switch (layer.name.toLowerCase()) {
		case 'depth':
			const depthProps = extractDepthProps(layer);
			newLayer = new Depth({
				...depthProps
			});
			mutateCommonProps(newLayer, depthProps);
			break;
		case 'fresnel':
			const fresnelProps = extractFresnelProps(layer);
			newLayer = new Fresnel({
				...fresnelProps
			});
			mutateCommonProps(newLayer, fresnelProps);
			break;
		case 'noise':
			const noiseProps = extractNoiseProps(layer);
			newLayer = new Noise({
				...noiseProps
			});
			mutateCommonProps(newLayer, noiseProps);
			break;
		case 'displace':
			const displaceProps = extractDisplaceProps(layer);
			newLayer = new Displace({
				...displaceProps
			});
			mutateCommonProps(newLayer, displaceProps);
			break;
		case 'gradient':
			const gradientProps = extractGradientProps(layer);
			newLayer = new Gradient({
				...gradientProps
			});
			mutateCommonProps(newLayer, gradientProps);
			break;
		case 'color':
			const colorProps = extractColorProps(layer);
			newLayer = new Color({
				...colorProps
			});
			mutateCommonProps(newLayer, colorProps);
			break;
		default:
			console.error('Unrecognized layer name:', layer.name);
			return;
	}

	// return newLayer;
	layers.update((current) => {
		return current.map((l) => {
			if (l.uuid === layer.uuid) {
				return newLayer;
			} else {
				return l;
			}
		});
	});
};


export const cookRecipe = (recipe) => {
	sceneSettings.set({...defaultSceneSettings, ...recipe.scene});
	baseLayer.set({...defaultBaseLayer, ...recipe.baseLayer});
	
	recipe.layers.forEach((l, idx) => {
		mutateCommonProps(l, recipe.layerProps[idx])
	})
	layers.set(recipe.layers);
}