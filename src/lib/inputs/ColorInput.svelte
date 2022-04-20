<script>
	import { layers } from '../../data/state';
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
		<input type="color" value={`#${value.getHexString()}`} on:input={handleColorChange} />
	</label>
{:else}
	<label
		>{label}
		<input type="color" bind:value />
	</label>
{/if}
