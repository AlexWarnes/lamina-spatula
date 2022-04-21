import { derived, writable } from 'svelte/store';
import type { LayerMaterialProps } from 'lamina/types';
import { Depth, Fresnel, Noise } from 'lamina/vanilla';
import {
	extractDepthProps,
	extractFresnelProps,
	extractNoiseProps,
	mutateCommonProps
} from './layers';

const defaultBaseLayer: LayerMaterialProps = {
	color: '#d9d9d9',
	lighting: 'standard'
};
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
	switch (layer.constructor.name) {
		case 'Depth':
			const depthProps = extractDepthProps(layer);
			newLayer = new Depth({
				...depthProps
			});
			mutateCommonProps(newLayer, depthProps);
      break;
		case 'Fresnel':
			const fresnelProps = extractFresnelProps(layer);
			newLayer = new Fresnel({
				...fresnelProps
			});
			mutateCommonProps(newLayer, fresnelProps);
      break;
		case 'Noise':
			const noiseProps = extractNoiseProps(layer);
			newLayer = new Noise({
				...noiseProps
			});
			mutateCommonProps(newLayer, noiseProps);
			break;
		default:
			console.error('Unrecognized layer type:', layer.constructor.name);
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

export const layerAction = writable<{ uuid: string; key: string; value: any }>(null);
