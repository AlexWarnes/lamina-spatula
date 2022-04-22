<script>
	import FormHeader from '$lib/FormHeader.svelte';
	import NumberInput from '$lib/inputs/NumberInput.svelte';
	import Select from '$lib/inputs/Select.svelte';
	import Accordion from '$lib/Accordion.svelte';
	import { reinstantiateLayer } from '../../data/state';

	export let layer;
	let open = true;
	const displaceOptions = ['perlin', 'simplex', 'cell', 'curl'];
	const mappingOptions = ['local', 'world', 'uv'];

	function createNewInstance() {
		reinstantiateLayer(layer);
	}
</script>

<Accordion {layer} {open} on:click={() => (open = !open)} title="Displace">
	<div class="control-group">
		<FormHeader layerID={layer.uuid} />
		<NumberInput label="Strength" bind:value={layer.strength} />
		<NumberInput label="Scale" bind:value={layer.scale} />
		<Select
			label="Type"
			options={displaceOptions}
			bind:value={layer.type}
			on:change={createNewInstance}
		/>
		<Select
			label="Mapping"
			options={mappingOptions}
			bind:value={layer.mapping}
			on:change={createNewInstance}
		/>
		<!-- OFFSET -->
	</div>
</Accordion>
