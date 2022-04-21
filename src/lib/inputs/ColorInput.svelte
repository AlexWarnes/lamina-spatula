<script>
	import { layers } from '../../data/state';
	import { rxThrottle } from 'svelte-fuse-rx';
	export let layerInput = true;
	export let value;
	export let label;

	function handleColorChange(event, key) {
		value.set(event.target.value);
		$layers = $layers;
	}
</script>

{#if layerInput}
	<label
		>{label}
		<input
			type="color"
			value={`#${value.getHexString()}`}
			use:rxThrottle={{ on: 'input', duration: 150 }}
			on:rxEmit={(e) => handleColorChange(e.detail)}
		/>
	</label>
{:else}
	<label
		>{label}
		<input type="color" bind:value />
	</label>
{/if}
