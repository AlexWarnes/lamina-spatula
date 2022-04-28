<script>
	import { cookRecipe } from '../data/state';
	import { recipes } from '../data/recipes';
	import { Dialog } from 'svelte-aria-dialog';

	export let open = false;

	function handleRecipeClick(recipe) {
		cookRecipe(recipe);
		open = false;
	}
</script>

<button class="recipes-btn" on:click={() => (open = true)}>Recipes</button>

<Dialog bind:open>
	<div class="dialog-box">
    <h2 class="title">Recipes</h2>
    <p class="description">A collection of shaders to get you started.</p>
		{#each recipes as recipe}
			<div class="recipe-box" style:border="1px solid {recipe.accentColor}">
				<img src={recipe.src} width="100" height="100" alt={recipe.alt} />
				<div class="details">
					<h3>{recipe.name}</h3>
          {#each recipe.layers as layer}
            <p class="chip">{layer.name}</p>
          {/each}
					<button class="cook-recipe-btn" on:click={() => handleRecipeClick(recipe)}
						>Apply</button
					>
				</div>
			</div>
		{/each}
	</div>
</Dialog>

<style>
	.dialog-box {
		width: 100%;
		max-height: 50vh;
		height: 100%;
    padding: 0 0.875rem;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
	}

	.recipe-box {
		background-color: var(--canvas-overlay);
		/* background-color: #676778; */
		color: #fafbfc;
		margin: 1rem 0;
		width: 100%;
		padding: 0.875rem;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    border-radius: 1rem;
    position: relative;
	}

  h3 {
    margin: 0 0 .25rem;
  }

  .recipes-btn {
    background-color: transparent;
    color: #fafbfc;
    pointer-events: all;
    border: 1px solid #fafbfc;
    border-radius: 4px;
    transition: all 0.2s ease;
    padding: 0.5rem;
    cursor: pointer;
  }

  .cook-recipe-btn {
    background-color: darkcyan;
    color: #fafbfc;
    pointer-events: all;
    border: 3px solid transparent;
    border-radius: 4px;
    transition: all 0.2s ease;
    padding: 0.5rem;
    cursor: pointer;
    position: absolute;
    bottom: 1rem;
    right: 1rem;
  }

  img {
    margin: 0 1rem 0 0;
    border-radius: 1rem;
  }

  .chip {
    font-size: .75rem;
    background: #67677888;
    margin: 0.25rem;
    padding: 0.5rem 0.875rem 0.25rem;
    border-radius: 1rem;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-weight: 200;
    font-style: italic;
  }
</style>
