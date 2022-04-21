<script>
	import FormHeader from '$lib/FormHeader.svelte';
	import ColorInput from '$lib/inputs/ColorInput.svelte';
	import FloatSlider from '$lib/inputs/FloatSlider.svelte';
	import ModeSelect from '$lib/inputs/ModeSelect.svelte';
	import Accordion from '$lib/Accordion.svelte';
	import { reinstantiateLayer } from '../../data/state';

	export let layer;
	let open = true;

	function createNewInstance() {
		reinstantiateLayer(layer);
	}
</script>

<Accordion {open} on:click={() => (open = !open)} title="Color">
	<div class="control-group">
		<FormHeader layerID={layer.uuid} />
		<ColorInput label="Color" value={layer.color} />
		<FloatSlider label="Alpha" bind:value={layer.alpha} />
		<ModeSelect bind:value={layer.mode} on:change={createNewInstance} />
	</div>
</Accordion>
