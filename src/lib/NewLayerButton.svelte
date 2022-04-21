<script>
	import { addNewLayer } from '../data/state';
	import { newColorLayer, newDepthLayer, newDisplaceLayer, newFresnelLayer, newGradientLayer, newNoiseLayer } from '../data/layers';
	import Menu from './Menu.svelte';
	import MenuItem from './MenuItem.svelte';

	let open = false;
	const layerOptions = [
		{
			name: 'Depth',
			action: () => addNewLayer(newDepthLayer())
		},
		{
			name: 'Fresnel',
			action: () => addNewLayer(newFresnelLayer())
		},
		{
			name: 'Noise',
			action: () => addNewLayer(newNoiseLayer())
		},
		{
			name: 'Displacement',
			action: () => addNewLayer(newDisplaceLayer())
		},
		{
			name: 'Gradient',
			action: () => addNewLayer(newGradientLayer())
		},
		{
			name: 'Color',
			action: () => addNewLayer(newColorLayer())
		}
	];
</script>

<button class="new-layer-btn" on:click={() => (open = !open)}>
	<!-- <Layers /> -->
	<span class="btn-label">New Layer</span>
	<Menu bind:open position="LEFT">
		{#each layerOptions as layer (layer.name)}
			<MenuItem
				on:click={() => {
					layer.action();
					open = false;
				}}>{layer.name}</MenuItem
			>
		{/each}
	</Menu>
</button>

<!-- <button on:click={() => addNewLayer(newDepthLayer())}>New Depth</button>
	<button on:click={() => addNewLayer(newFresnelLayer())}>New Fresnel</button>
	<button on:click={() => addNewLayer(newNoiseLayer())}>New Noise</button> -->
<style>
	.new-layer-btn {
		position: relative;
		/* top: 1rem;
		right: 20rem; */
		border: none;
		background-color: darkcyan;
		color: #fafbfc;
		pointer-events: all;
    border: 3px solid transparent;
    border-radius: 4px;
    transition: all 0.2s ease;
    padding: 0.5rem;
    cursor: pointer;
	}

  /* .new-layer-btn:hover {
    border: 3px solid var(--svelte-orange);
		background-color: var(--canvas-overlay-hover);
  } */
</style>
