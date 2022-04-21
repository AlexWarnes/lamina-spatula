<script>
	import Scene from '$lib/Scene.svelte';
	import ControlPanel from '$lib/ControlPanel.svelte';
	import CodeViewer from '$lib/CodeViewer.svelte';
</script>

<!-- <div class="view-wrapper"> -->
<div class="canvas-wrapper">
	<Scene />
	<div class="controls-wrapper">
		<ControlPanel />
	</div>
	<CodeViewer />
</div>

<!-- </div> -->
<style>
	/* .view-wrapper {
		width: 100%;
		height: 100%;
		overflow: hidden;
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
		background: #000000;
	} */
	.canvas-wrapper {
		position: relative;
		flex-grow: 1;
		overflow: hidden;
		width: 100%;
		height: 100%;
	}

	.controls-wrapper {
		position: fixed;
		top: 0;
		right: 0;
		padding: 1rem;
		height: 100%;
		width: 25%;
		max-width: 25rem;
		/* overflow-y: auto; */
		/* overflow-x: visible; */
		background: var(--canvas-overlay);
		color: #fafbfc;
	}
</style>
