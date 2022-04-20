<script>
  import { layers } from '../../data/state';
  
	export let value;
	export let label;

const syncLayers = () => ($layers = $layers);

</script>

<label
	>{label}
	<input type="range" min="0" max="1" step=".05" bind:value on:input={syncLayers} />
</label>
