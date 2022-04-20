<script>
	import { newDepthLayer, newFresnelLayer, newNoiseLayer } from '../data/layers';

	import { layers, addNewLayer } from '../data/state';
	import BaseLayerForm from './forms/BaseLayerForm.svelte';
	import DepthForm from './forms/DepthForm.svelte';
	import FresnelForm from './forms/FresnelForm.svelte';
	import NoiseForm from './forms/NoiseForm.svelte';
	import NewLayerButton from './NewLayerButton.svelte';

	let open = false;
	const layerOptions = [
		{
			name: 'Depth',
			action: () => newDepthLayer()
		},
		{
			name: 'Fresnel',
			action: () => newFresnelLayer()
		},
		{
			name: 'Noise',
			action: () => newNoiseLayer()
		}
	];
</script>

<div class="ctrl-wrapper">
	<NewLayerButton />
</div>
<div class="layers-wrapper">
	<div class="ctrl-wrapper">
		<BaseLayerForm />
	</div>
	{#each $layers as layer (layer.uuid)}
		<div class="ctrl-wrapper">
			{#if layer.constructor.name === 'Depth'}
				<DepthForm {layer} />
			{:else if layer.constructor.name === 'Fresnel'}
				<FresnelForm {layer} />
			{:else if layer.constructor.name === 'Noise'}
				<NoiseForm {layer} />
			{/if}
		</div>
	{/each}
</div>

<!-- <button on:click={() => addNewLayer(newDepthLayer())}>New Depth</button>
	<button on:click={() => addNewLayer(newFresnelLayer())}>New Fresnel</button>
	<button on:click={() => addNewLayer(newNoiseLayer())}>New Noise</button> -->
<style>
	.ctrl-wrapper {
		margin: 1rem 0;
	}

	.layers-wrapper {
		max-height: 100%;
		overflow: auto;
	}
</style>
