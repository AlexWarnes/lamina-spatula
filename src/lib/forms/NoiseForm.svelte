<script>
	import FormHeader from '$lib/FormHeader.svelte';
	import ColorInput from '$lib/inputs/ColorInput.svelte';
	import FloatSlider from '$lib/inputs/FloatSlider.svelte';
	import ModeSelect from '$lib/inputs/ModeSelect.svelte';
	import NumberInput from '$lib/inputs/NumberInput.svelte';
	import Select from '$lib/inputs/Select.svelte';
	import Accordion from '$lib/Accordion.svelte';
	import { reinstantiateLayer } from '../../data/state';
	import Vec3Input from '$lib/inputs/Vec3Input.svelte';

	export let layer;
	let open = true;
	const noiseOptions = ['perlin', 'simplex', 'cell', 'curl', 'white'];
	const mappingOptions = ['local', 'world', 'uv'];

	function createNewInstance() {
		reinstantiateLayer(layer);
	}
</script>

<Accordion {layer} {open} on:click={() => (open = !open)} title="Noise">
	<div class="control-group">
		<FormHeader layerID={layer.uuid} />
		<ColorInput label="ColorA" value={layer.colorA} />
		<ColorInput label="ColorB" value={layer.colorB} />
		<ColorInput label="ColorC" value={layer.colorC} />
		<ColorInput label="ColorD" value={layer.colorD} />
		<NumberInput label="Scale" bind:value={layer.scale} />
		<Vec3Input groupLabel="Offset" bind:value={layer.offset} />
		<Select
			label="Type"
			options={noiseOptions}
			bind:value={layer.type}
			on:change={createNewInstance}
		/>
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
