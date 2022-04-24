<script>
	import { layers } from '../../data/state';
	export let groupLabel;
	export let value;
	export let min = 0;
	export let max = 100;
	export let step = 0.05;
	const syncLayers = () => ($layers = $layers);
</script>

<p class="group-label">{groupLabel}</p>
<div class="vec-row">
	<label class="vec3"
		><span>x</span>
		<input
			class="vec3"
			type="number"
			{min}
			{max}
			{step}
			bind:value={value['x']}
			on:input={syncLayers}
		/>
	</label>
	<label class="vec3"
		><span>y</span>
		<input
			class="vec3"
			type="number"
			{min}
			{max}
			{step}
			bind:value={value['y']}
			on:input={syncLayers}
		/>
	</label>
	<label class="vec3"
		><span>z</span>
		<input
			class="vec3"
			type="number"
			{min}
			{max}
			{step}
			bind:value={value['z']}
			on:input={syncLayers}
		/>
	</label>
</div>

<style>
	.group-label {
		margin: 1rem 0 0.25rem;
	}
	.vec-row {
		width: 100%;
		padding: 0 0.25rem 1rem;
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
	}
</style>
