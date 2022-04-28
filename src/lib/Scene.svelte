<script>
	import * as THREE from 'three';
	import * as SC from 'svelte-cubed';
	import { laminaData, sceneSettings } from '../data/state';
	import { LayerMaterial } from 'lamina/vanilla';

	let laminaMaterial;

	function updateMaterial({ baseLayer, layers }) {
		laminaMaterial = new LayerMaterial({
			...baseLayer,
			layers
		});
	}

	$: updateMaterial($laminaData);
</script>

<SC.Canvas
	toneMapping={$sceneSettings.ACESFilmicToneMapping ? THREE.ACESFilmicToneMapping : THREE.NoToneMapping}
	background={new THREE.Color($sceneSettings.background)}
	antialias
>
	<SC.PerspectiveCamera position={[0, 2, 5]} near={0.1} far={400} fov={55} />

	<SC.OrbitControls
		enabled={true}
		enableZoom={true}
		autoRotate={$sceneSettings.autoRotate}
		autoRotateSpeed={2}
		enableDamping={true}
		dampingFactor={0.1}
	/>

	{#if $sceneSettings.directionalLight}
		<SC.DirectionalLight
			color={new THREE.Color('#ffffff')}
			position={[0, 10, 10]}
			intensity={0.75}
		/>
	{/if}
	{#if $sceneSettings.ambientLight}
		<SC.AmbientLight color={new THREE.Color('#ffffff')} intensity={0.5} />
	{/if}
	{#if $sceneSettings.showGrid}
		<SC.Primitive object={new THREE.GridHelper(50, 50)} position={[0, 0.001, 0]} />
	{/if}

	{#if laminaMaterial}
		<SC.Mesh
			geometry={new THREE.SphereBufferGeometry(1, 64, 32)}
			material={laminaMaterial}
			rotation={[0, 0, 0]}
			scale={[1, 1, 1]}
			position={[0, 0, 0]}
			castShadow={false}
			receiveShadow={false}
		/>
	{/if}
</SC.Canvas>
