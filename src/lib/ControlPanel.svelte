<script>
	import { layers } from '../data/state';
	import BaseLayerForm from './forms/BaseLayerForm.svelte';
	import DepthForm from './forms/DepthForm.svelte';
	import FresnelForm from './forms/FresnelForm.svelte';
	import NoiseForm from './forms/NoiseForm.svelte';
	import DisplaceForm from './forms/DisplaceForm.svelte';
	import NewLayerButton from './NewLayerButton.svelte';
	import GradientForm from './forms/GradientForm.svelte';
	import ColorForm from './forms/ColorForm.svelte';
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
			{#if layer.name.toLowerCase() === 'depth'}
				<DepthForm {layer} />
			{:else if layer.name.toLowerCase() === 'fresnel'}
				<FresnelForm {layer} />
			{:else if layer.name.toLowerCase() === 'noise'}
				<NoiseForm {layer} />
			{:else if layer.name.toLowerCase() === 'displace'}
				<DisplaceForm {layer} />
			{:else if layer.name.toLowerCase() === 'gradient'}
				<GradientForm {layer} />
			{:else if layer.name.toLowerCase() === 'color'}
				<ColorForm {layer} />
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
