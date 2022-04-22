<script>
	import TopNav from '$lib/TopNav.svelte';
</script>

<TopNav />
<slot />

<style>
	@import '../global.css';
	/* :global(#svelte-body) {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
	} */
	/* .content {
		flex-grow: 1;
	} */
</style>
