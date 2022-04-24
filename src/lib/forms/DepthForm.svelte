<script>
	import FormHeader from '$lib/FormHeader.svelte';
	import Select from '$lib/inputs/Select.svelte';
	import ColorInput from '$lib/inputs/ColorInput.svelte';
	import FloatSlider from '$lib/inputs/FloatSlider.svelte';
	import ModeSelect from '$lib/inputs/ModeSelect.svelte';
	import NumberInput from '$lib/inputs/NumberInput.svelte';
	import Accordion from '$lib/Accordion.svelte';
	import { reinstantiateLayer } from '../../data/state';
import Vec3Input from '$lib/inputs/Vec3Input.svelte';
	
	export let layer;
	let open = true;
	const mappingOptions = ['vector', 'camera', 'world'];

	function createNewInstance() {
		reinstantiateLayer(layer);
	}
</script>

<Accordion {layer} {open} on:click={() => (open = !open)} title="Depth">
	<div class="control-group">
		<FormHeader layerID={layer.uuid} />
		<ColorInput label="ColorA" value={layer.colorA} />
		<ColorInput label="ColorB" value={layer.colorB} />
		<NumberInput label="Near" bind:value={layer.near} />
		<NumberInput label="Far" bind:value={layer.far} />
		<Vec3Input groupLabel="Origin" bind:value={layer.origin} />
		<Select
		label="Mapping"
		options={mappingOptions}
		bind:value={layer.mapping}
		on:change={createNewInstance}
		/>
		<FloatSlider label="Alpha" bind:value={layer.alpha} />
		<ModeSelect bind:value={layer.mode} on:change={createNewInstance} />
	</div>
</Accordion>
