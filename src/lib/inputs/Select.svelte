<script>
	export let layerInput = true;
	export let value;
	export let label;
	export let options;
</script>

{#if layerInput}
	<label
		>{label}
		<select bind:value on:change>
			{#each options as o}
				<option value={o}>{o}</option>
			{/each}
		</select>
	</label>
{:else}
	<label
		>{label}
		<select bind:value>
			{#each options as o}
				<option value={o}>{o}</option>
			{/each}
		</select>
	</label>
{/if}
