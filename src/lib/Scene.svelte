<script lang="ts">
	import { GridHelper, SphereBufferGeometry, MeshBasicMaterial, BackSide, Color, } from 'three';
	import {
		Canvas,
		PerspectiveCamera,
		OrbitControls,
		DirectionalLight,
		AmbientLight,
		Object3DInstance,
		Mesh
	} from '@threlte/core';
	import { laminaData, sceneSettings } from '../data/state';
	import { LayerMaterial } from 'lamina/vanilla';
	import Renderer from "./Renderer.svelte";

	let laminaMaterial;

	function updateMaterial({ baseLayer, layers }) {
		laminaMaterial = new LayerMaterial({
			...baseLayer,
			layers
		});
	}

	$: updateMaterial($laminaData);
</script>

<Canvas shadows>
	<PerspectiveCamera position={{ x: 0, y: 2, z: 5 }} near={0.1} far={400} fov={55}>
		<OrbitControls
			enabled={true}
			enableZoom={true}
			autoRotate={$sceneSettings.autoRotate}
			autoRotateSpeed={2}
			enableDamping={true}
			dampingFactor={0.1}
		/>
	</PerspectiveCamera>
	<Renderer />
	{#if $sceneSettings.directionalLight}
		<DirectionalLight color="#ffffff" position={{ x: 0, y: 10, z: 10 }} intensity={0.75} />
	{/if}
	{#if $sceneSettings.ambientLight}
		<AmbientLight color="#ffffff" intensity={0.5} />
	{/if}
	{#if $sceneSettings.showGrid}
		<Object3DInstance object={new GridHelper(50, 50)} position={{ y: 0.001 }} />
	{/if}

	{#if laminaMaterial}
		<Mesh geometry={new SphereBufferGeometry(1, 64, 32)} material={laminaMaterial} />
	{/if}

	<Mesh
		geometry={new SphereBufferGeometry()}
		material={new MeshBasicMaterial({ color: new Color($sceneSettings.background).convertSRGBToLinear(), side: BackSide })}
		scale={100}
	/>
</Canvas>
