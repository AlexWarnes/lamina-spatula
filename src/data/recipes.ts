import * as THREE from 'three';
import { Depth, Noise, Fresnel, Color, Displace } from 'lamina/vanilla';
import type { Recipe } from './models';

export const eclipse = {
	name: 'Eclipse',
	src: '/recipes/eclipse.jpg',
	alt: "Dark 3D sphere that looks like a total solar eclipse",
	accentColor: "#dbdeff",
	credit: 'Spatula',
	layerProps: [],
	scene: {
		background: '#161616'
	},
	baseLayer: {
		color: '#ffffff',
		lighting: 'standard'
	},
	layers: [
		new Fresnel({
			color: new THREE.Color('#dbdeff'),
			alpha: 1,
			power: 2.5,
			intensity: 1.5,
			bias: 0
		})
	]
} as Recipe

export const partlyCloudy = {
	name: 'Partly Cloudy',
	src: '/recipes/partlyCloudy.jpg',
	alt: "Blue-ish 3D sphere with white cloud-like swirls over a green background.",
	accentColor: "#709978",
	credit: 'Spatula',
	layerProps: [
		{
			type: 'curl'
		}
	],
	scene: {
		background: '#709978'
	},
	baseLayer: {
		color: '#ffffff',
		lighting: 'basic'
	},
	layers: [
		new Noise({
			colorA: '#e3e3e3',
			colorB: '#fcfcfc',
			colorC: '#66c5ea',
			colorD: '#4ac3f2',
			alpha: 1,
			scale: 0.25,
			type: 'curl',
			offset: new THREE.Vector3(0, 0.5, 0),
			mapping: 'local',
			mode: 'normal',
			visible: true
		})
	]
} as Recipe;

export const whiteNoise = {
	name: 'White Noise',
	src: '/recipes/whiteNoise.jpg',
	alt: "A 3D sphere with tiny contrasting squares like tv static.",
	accentColor: "#d4f8ff",
	credit: 'Lamina',
	layerProps: [null, { mode: 'multiply' }, { mode: 'softlight' }, { type: 'white' }],
	scene: {
		background: '#ebebeb',
		autoRotate: true
	},
	baseLayer: {
		color: '#ffffff',
		lighting: 'physical'
	},
	layers: [
		new Color({
			color: new THREE.Color('#ffffff').convertSRGBToLinear(),
			alpha: 1
		}),
		new Depth({
			near: 0,
			far: 2,
			colorA: new THREE.Color('#005182').convertSRGBToLinear(),
			colorB: new THREE.Color('#d4f8ff').convertSRGBToLinear(),
			alpha: 0.5,
			mode: 'multiply'
		}),
		new Fresnel({
			color: new THREE.Color('#bffbff').convertSRGBToLinear(),
			intensity: 1,
			scale: 1,
			bias: 0.1,
			mode: 'softlight'
		}),
		new Noise({
			colorA: new THREE.Color('#a3a3a3').convertSRGBToLinear(),
			colorB: new THREE.Color('#a3a3a3').convertSRGBToLinear(),
			alpha: 0.5,
			scale: 1,
			type: 'white'
		})
	]
} as Recipe;
export const laminaMarble = {
	name: 'Marble',
	src: '/recipes/marble.jpg',
	alt: "A blue and purple 3D sphere.",
	accentColor: "#d8c7ff",
	credit: 'Lamina',
	layerProps: [
		{
			mode: 'multiply'
		},
		{
			mode: 'screen'
		}
	],
	scene: {
		background: '#d8c7ff'
	},
	baseLayer: {
		color: '#ffffff',
		lighting: 'physical'
	},
	layers: [
		new Depth({
			near: 0.4854,
			far: 0.7661999999999932,
			origin: new THREE.Vector3(-0.4920000000000004, 0.4250000000000003, 0),
			colorA: new THREE.Color('#8baafe').convertSRGBToLinear(),
			colorB: new THREE.Color('#0079f9').convertSRGBToLinear(),
			alpha: 0.5,
			mode: 'multiply'
		}),
		new Fresnel({
			color: new THREE.Color('#fe0000'),
			mode: 'screen',
			visible: true
		})
	]
} as Recipe;
export const laminaBubble = {
	name: 'Bubble',
	src: '/recipes/bubble.jpg',
	alt: "A saturated blue 3D sphere over a blue background.",
	accentColor: "#2114db",
	credit: 'Lamina',
	layerProps: [
		{
			mode: 'multiply'
		},
		null,
		{
			mode: 'screen'
		}
	],
	scene: {
		background: '#2114db'
	},
	baseLayer: {
		color: '#ffffff',
		lighting: 'physical',
		transmission: 1,
		roughness: 0.1,
		thickness: 2
	},
	layers: [
		new Depth({
			near: 0.4854,
			far: 0.7661999999999932,
			origin: new THREE.Vector3(-0.4920000000000004, 0.4250000000000003, 0),
			colorA: new THREE.Color('#fec5da').convertSRGBToLinear(),
			colorB: new THREE.Color('#00b8fe').convertSRGBToLinear(),
			alpha: 0.5,
			mode: 'multiply'
		}),
		new Displace({
			strength: 0,
			scale: 5,
			offset: new THREE.Vector3(0.09189000000357626, 0, 0)
		}),
		new Fresnel({
			color: new THREE.Color('#fefefe'),
			alpha: 1,
			power: 3.3699999999999903,
			intensity: 3.8999999999999946,
			bias: -0.3430000000000002,
			mode: 'screen',
			visible: true
		})
	]
} as Recipe;
export const laminaPink = {
	name: 'Pink Glow',
	src: '/recipes/pinkGlow.jpg',
	alt: "A pink and purple 3D sphere.",
	accentColor: "#f0aed2",
	credit: 'Lamina',
	layerProps: [
		{
			mode: 'multiply',
			mapping: 'vector'
		},
		{
			mode: 'lighten',
			mapping: 'vector'
		},
		{
			mode: 'softlight'
		}
	],
	scene: {
		background: '#f0aed2',
		ACESFilmicToneMapping: true
	},
	baseLayer: {
		color: '#ff4eb8'
		// lighting: 'basic'
	},
	layers: [
		new Depth({
			far: 3,
			origin: new THREE.Vector3(1, 1, 1),
			colorA: new THREE.Color('#ff00e3').convertSRGBToLinear(),
			colorB: new THREE.Color('#00ffff').convertSRGBToLinear(),
			alpha: 0.5,
			mode: 'multiply',
			mapping: 'vector'
		}),
		new Depth({
			near: 0.25,
			far: 2,
			origin: new THREE.Vector3(-0.9760456268614979, 0.48266696923176067, 0),
			colorA: new THREE.Color('#ffe100').convertSRGBToLinear(),
			alpha: 0.5,
			mode: 'lighten',
			mapping: 'vector'
		}),
		new Fresnel({
			mode: 'softlight'
		})
	]
} as Recipe;

export const laminaSparkles = {
	name: 'Sparkles',
	src: '/recipes/sparkles.jpg',
	alt: "A pink and purple 3D sphere with cyan sparkles.",
	accentColor: "#68eefb",
	credit: 'Lamina',
	layerProps: [null, { mode: 'screen' }, { mode: 'softlight' }, { mode: 'lighten' }],
	scene: {
		background: '#cccce6',
		autoRotate: true
	},
	baseLayer: {
		color: '#fefefe',
		lighting: 'standard'
	},
	layers: [
		new Depth({
			near: -0.06800000000000028,
			far: 5,
			origin: new THREE.Vector3(0, 0, 3),
			colorA: new THREE.Color('#fe96dc'),
			colorB: new THREE.Color('#68eefb')
		}),
		new Depth({
			near: 1,
			far: 3,
			origin: new THREE.Vector3(0, 0, -1.3670000000000089),
			colorA: new THREE.Color('#feb600'),
			colorB: new THREE.Color('#000000'),
			mode: 'screen'
		}),
		new Fresnel({
			color: new THREE.Color('#fefefe'),
			power: 1.9099999999999757,
			mode: 'softlight'
		}),
		new Noise({
			colorA: new THREE.Color('#84fee9'),
			colorB: new THREE.Color('#969696'),
			colorC: new THREE.Color('#000000'),
			colorD: new THREE.Color('#000000'),
			scale: 50,
			offset: new THREE.Vector3(0, 0, 0),
			mode: 'lighten'
		})
	]
};

export const recipes = [
	eclipse,
	laminaPink,
	partlyCloudy,
	laminaBubble,
	laminaMarble,
	whiteNoise,
	laminaSparkles
];
