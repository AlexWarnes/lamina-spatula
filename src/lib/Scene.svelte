<script>
	import * as THREE from 'three';
	import * as SC from 'svelte-cubed';
	import { laminaData } from '../data/state';
	import { LayerMaterial } from 'lamina/vanilla';

	let laminaMaterial;

	function updateMaterial({ baseLayer, layers }) {
		laminaMaterial = new LayerMaterial({
			...baseLayer,
			layers
		});
	}

	$: updateMaterial($laminaData);
	$: console.log($laminaData);
</script>

<SC.Canvas background={new THREE.Color("#36363f")} antialias>
	<SC.PerspectiveCamera position={[0, 5, 8]} near={0.1} far={400} fov={55} />

	<SC.OrbitControls
		enabled={true}
		enableZoom={true}
		autoRotate={false}
		autoRotateSpeed={2}
		enableDamping={true}
		dampingFactor={0.1}
	/>

	<SC.DirectionalLight
		color={new THREE.Color(0xffffff)}
		position={[0, 10, 10]}
		intensity={0.5}
		shadow={false}
	/>
	<SC.AmbientLight color={new THREE.Color('0xffffff')} intensity={0.5} />

	{#if laminaMaterial}
		<SC.Mesh
			geometry={new THREE.SphereBufferGeometry()}
			material={laminaMaterial}
			rotation={[0, 0, 0]}
			scale={[1, 1, 1]}
			position={[0, 0, 0]}
			castShadow={false}
			receiveShadow={false}
		/>
	{/if}
</SC.Canvas>
