<script>
	import FormHeader from '$lib/FormHeader.svelte';
	import Select from '$lib/inputs/Select.svelte';
	import ColorInput from '$lib/inputs/ColorInput.svelte';
	import FloatSlider from '$lib/inputs/FloatSlider.svelte';
	import NumberInput from '$lib/inputs/NumberInput.svelte';
	import Accordion from '$lib/Accordion.svelte';
	import { reinstantiateLayer } from '../../data/state';

	export let layer;
	let open = true;
	const mappingOptions = ['local', 'world', 'uv'];

	function createNewInstance() {
		reinstantiateLayer(layer);
	}
</script>

<!-- colorA, colorB, alpha, contrast, start, end, axes, mapping -->
<Accordion {open} on:click={() => (open = !open)} title="Gradient">
	<div class="control-group">
		<FormHeader layerID={layer.uuid} />
		<ColorInput label="ColorA" value={layer.colorA} />
		<ColorInput label="ColorB" value={layer.colorB} />
		<NumberInput label="Contrast" min={-100} step={1} bind:value={layer.contrast} />
		<NumberInput label="Start" min={-100} step={1} bind:value={layer.start} />
		<NumberInput label="End" min={-100} step={1} bind:value={layer.end} />
		<Select
			label="Axes"
			options={["x", "y", "z"]}
			bind:value={layer.axes}
			on:change={createNewInstance}
		/>
		<Select
			label="Mapping"
			options={mappingOptions}
			bind:value={layer.mapping}
			on:change={createNewInstance}
		/>
		<FloatSlider label="Alpha" bind:value={layer.alpha} />
	</div>
</Accordion>
