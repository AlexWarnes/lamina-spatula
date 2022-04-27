<script>
	import { layers, cookRecipe } from '../data/state';
	import BaseLayerForm from './forms/BaseLayerForm.svelte';
	import DepthForm from './forms/DepthForm.svelte';
	import FresnelForm from './forms/FresnelForm.svelte';
	import NoiseForm from './forms/NoiseForm.svelte';
	import DisplaceForm from './forms/DisplaceForm.svelte';
	import NewLayerButton from './NewLayerButton.svelte';
	import GradientForm from './forms/GradientForm.svelte';
	import ColorForm from './forms/ColorForm.svelte';
	import SceneForm from './forms/SceneForm.svelte';
	// import { eclipse, laminaPink, partlyCloudy, laminaBubble, laminaMarble, whiteNoise, laminaSparkles} from '../data/recipes';
</script>

<div class="ctrl-wrapper">
	<NewLayerButton />
	<!-- <button on:click={() => cookRecipe(laminaSparkles)}>Recipes</button> -->
</div>
<div class="layers-wrapper">
	<div class="ctrl-wrapper">
		<SceneForm />
	</div>
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

<style>
	.ctrl-wrapper {
		margin: 1rem 0 0;
	}

	.layers-wrapper {
		max-height: calc(100% - 4rem);
		overflow: auto;
		padding: 0 0.25rem 0 0;
	}
</style>
