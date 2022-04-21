<script lang="ts">
	import { slide } from 'svelte/transition';
	import ChevronRight from '$lib/icons/ChevronRight.svelte';
	export let title: string = '';
	export let open: boolean = false;
	export let style: string = '';
	const handleKeydown = (evt) => {
		if (evt && evt.code && evt.code === 'Enter') {
			open = !open;
		}
	};
</script>

<div class="accordion-container" {style}>
	<div
		class="header"
		role="button"
		aria-haspopup="menu"
		on:click
		tabindex="0"
		on:keydown={handleKeydown}
	>
		<p>{title}</p>
		<span class="icon-wrapper" class:open>
			<ChevronRight height="16" />
		</span>
	</div>
	{#if open}
		<div class="content" transition:slide>
			<slot />
		</div>
	{/if}
</div>

<style>
	p {
		margin: 0;
	}
	.accordion-container {
		width: 100%;
		font-size: inherit;
	}
	.header {
		width: 100%;
		padding: 0.5rem 1rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		cursor: pointer;
		font-size: inherit;
		background-color: #676778;
	}
	.content {
		width: 100%;
		transform-origin: top;
		padding: 0.1rem;
		border-left: 2px solid #676778;
	}
	.icon-wrapper {
		transition: all 0.2s ease;
	}
	.icon-wrapper.open {
		transform: rotate(90deg);
	}
</style>
