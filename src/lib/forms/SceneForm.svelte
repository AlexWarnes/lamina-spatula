<script>
	import ColorInput from '$lib/inputs/ColorInput.svelte';
	import { sceneSettings } from '../../data/state';
	import Accordion from '$lib/Accordion.svelte';
	let open = true;
</script>

<Accordion {open} on:click={() => (open = !open)} title="Scene">
	<section class="control-group">
		<ColorInput layerInput={false} label="Background" bind:value={$sceneSettings.background} />
		<label>
			Auto Rotate
			<input type="checkbox" bind:checked={$sceneSettings.autoRotate} />
		</label>
		<label>
			Directional Light
			<input type="checkbox" bind:checked={$sceneSettings.directionalLight} />
		</label>
		<label>
			Ambient Light
			<input type="checkbox" bind:checked={$sceneSettings.ambientLight} />
		</label>
		<label>
			Grid
			<input type="checkbox" bind:checked={$sceneSettings.showGrid} />
		</label>
	</section>
</Accordion>
