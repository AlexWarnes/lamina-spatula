<script>
	import Visibility from '$lib/icons/visibility.svelte';
	import VisibilityOff from '$lib/icons/visibility_off.svelte';
	import { layers } from '../../data/state';

	export let layer;
</script>

<label
	style:background={layer.visible ? 'transparent' : '#cd5c5c'}
	title="Toggle Visibility"
	aria-label="Toggle Visibility"
	><input type="checkbox" bind:checked={layer.visible} on:change={() => ($layers = $layers)} />

	{#if layer.visible}
		<Visibility />
	{:else}
		<VisibilityOff />
	{/if}
</label>

<style>
	input[type='checkbox'] {
		display: none;
	}
	label {
		display: inline-block;
		width: 1.5rem;
		height: 1.5rem;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		padding: 3px;
		border-radius: 50%;
		fill: #ffffff;
	}
</style>
