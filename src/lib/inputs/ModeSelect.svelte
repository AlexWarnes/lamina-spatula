<script>
	import Select from '$lib/inputs/Select.svelte';
	export let value;
	const modes = [
    'normal',
		'add',
		'subtract',
		'multiply',
		'lighten',
		'darken',
    'divide',
		'overlay',
		'screen',
		'softlight',
		'reflect',
		'negation',
	];
</script>

<Select layerInput options={modes} bind:value label="Blend Mode" on:change />
