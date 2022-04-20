<script>
	import { moveLayer, removeLayer } from '../data/state';
import ChevronRight from './icons/ChevronRight.svelte';
	import Trash from './icons/Trash.svelte';
	export let layerID;

	const handleDelete = () => {
		console.log('handleDelete', layerID);
		removeLayer(layerID);
	};
</script>

<div class="action-row">
	<button class="icon-btn" title="Move Up" on:click={() => moveLayer(layerID, 'UP')}>
		<span class="icon-wrapper up">
			<ChevronRight height="16" />
		</span>
	</button>
	<button class="icon-btn" title="Move Down" on:click={() => moveLayer(layerID, 'DOWN')}>
		<span class="icon-wrapper down">
			<ChevronRight height="16" />
		</span>
	</button>
	<span class="spacer" />
	<button class="icon-btn delete" title="Delete" on:click={handleDelete}><Trash height="1rem" /></button>
</div>

<style>
	.action-row {
		width: 100%;
		display: flex;
		justify-content: flex-start;
		align-items: center;
    margin: .25rem 0;
	}
	.spacer {
		flex-grow: 1;
	}
	.icon-btn {
		width: 2rem;
		height: 2rem;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
    border: 1px solid #676778;
    background: transparent;
    transition: all .2s ease;
    color: #fafbfc;
    margin: 0 .25rem;
	}

  .icon-btn:hover {
    border: 1px solid #018b8b;
    cursor: pointer;
  }

  .icon-btn.delete {
    border: 1px solid transparent;
    color: red;
  }
  .icon-btn.delete:hover {
    border: 1px solid red;
  }

  .icon-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .icon-wrapper.up {
		transform: rotate(-90deg);
	}
  .icon-wrapper.down {
		transform: rotate(90deg);
	}
</style>
