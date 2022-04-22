<script>
	import FormHeader from '$lib/FormHeader.svelte';
	import ColorInput from '$lib/inputs/ColorInput.svelte';
	import FloatSlider from '$lib/inputs/FloatSlider.svelte';
	import NumberInput from '$lib/inputs/NumberInput.svelte';
	import ModeSelect from '$lib/inputs/ModeSelect.svelte';
	import Accordion from '$lib/Accordion.svelte';
	import { reinstantiateLayer } from '../../data/state';

	export let layer;
	let open = true;

	function createNewInstance() {
		reinstantiateLayer(layer);
	}
</script>

<Accordion {layer} {open} on:click={() => (open = !open)} title="Fresnel">
	<div class="control-group">
		<FormHeader layerID={layer.uuid} />
		<ColorInput label="Color" value={layer.color} />
		<NumberInput label="Power" bind:value={layer.power} />
		<NumberInput label="Intensity" bind:value={layer.intensity} />
		<NumberInput label="Bias" bind:value={layer.bias} />
		<FloatSlider label="Alpha" bind:value={layer.alpha} />
		<ModeSelect bind:value={layer.mode} on:change={createNewInstance} />
	</div>
</Accordion>
