<script>
	import FormHeader from '$lib/FormHeader.svelte';
	import Select from '$lib/inputs/Select.svelte';
	import ColorInput from '$lib/inputs/ColorInput.svelte';
	import FloatSlider from '$lib/inputs/FloatSlider.svelte';
	import ModeSelect from '$lib/inputs/ModeSelect.svelte';
	import NumberInput from '$lib/inputs/NumberInput.svelte';
	import { reinstantiateLayer } from '../../data/state';
	import Accordion from '$lib/Accordion.svelte';
	
	export let layer;
	let open = true;
	const mappingOptions = ['vector', 'camera', 'world'];

	function createNewInstance() {
		reinstantiateLayer(layer);
	}
</script>

<Accordion {open} on:click={() => (open = !open)} title="Depth">
	<div class="control-group">
		<FormHeader layerID={layer.uuid} />
		<ColorInput label="ColorA" value={layer.colorA} />
		<ColorInput label="ColorB" value={layer.colorB} />
		<FloatSlider label="Alpha" bind:value={layer.alpha} />
		<NumberInput label="Near" bind:value={layer.near} />
		<NumberInput label="Far" bind:value={layer.far} />
		<Select
			label="Mapping"
			options={mappingOptions}
			bind:value={layer.mapping}
			on:change={createNewInstance}
		/>
		<ModeSelect bind:value={layer.mode} on:change={createNewInstance} />
		<!-- ORIGIN -->
	</div>
</Accordion>
