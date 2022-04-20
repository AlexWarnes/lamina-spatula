<script>
	import ColorInput from '$lib/inputs/ColorInput.svelte';
	import FloatSlider from '$lib/inputs/FloatSlider.svelte';
	import Select from '$lib/inputs/Select.svelte';
	import { baseLayer } from '../../data/state';
	import Accordion from '$lib/Accordion.svelte';
	let open = true;
	const lightingOptions = ['phong', 'physical', 'toon', 'basic', 'lambert', 'standard'];
</script>

<Accordion {open} on:click={() => (open = !open)} title="Base Layer">
	<section class="control-group">
		<ColorInput layerInput={false} label="Color" bind:value={$baseLayer.color} />
		<FloatSlider label="Alpha" bind:value={$baseLayer.alpha} />
		<Select
			layerInput={false}
			options={lightingOptions}
			bind:value={$baseLayer.lighting}
			label="Lighting"
		/>
	</section>
</Accordion>
