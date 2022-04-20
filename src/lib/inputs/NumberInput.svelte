<script>
	import { layers } from '../../data/state';
	export let value;
	export let label;
	export let min = 0;
	export let max = 100;
	export let step = 0.05;
	const syncLayers = () => ($layers = $layers);
</script>

<label
	>{label}
	<input type="number" {min} {max} {step} bind:value on:input={syncLayers} />
</label>
