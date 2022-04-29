<script>
	import GitHub from './icons/GitHub.svelte';
</script>

<nav>
	<ul>
		<li>
			<a class="home" href="/" title="Home" aria-label="Home">
				<img src="./SpatulaLayers.svg" alt="Spatula over layers" height="48" width="48" />
				<span>SPATULA</span>
			</a>
		</li>
		<span class="spacer" aria-hidden="true" />
		<li>
			<a href="/canvas" aria-label="Canvas">CANVAS</a>
		</li>
		<li class="last">
			<a href="https://github.com/AlexWarnes/lamina-spatula" title="GitHub" aria-label="GitHub">
				<GitHub />
			</a>
		</li>
	</ul>
</nav>

<style>
	ul {
		list-style: none;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		background-color: #fafbfc;
		width: 100%;
		margin: 0;
		padding: 0 2rem;
		height: var(--top-nav-height);
	}

	.spacer {
		flex-grow: 1;
	}

  li, a {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  li.last {
    margin: 0 0 0 3rem;
  }

	.home {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.home span {
		margin: 0 0 0 0.875rem;
	}

	a {
		color: var(--threejs-black);
		text-decoration: none;
    padding: 0 1rem;
    transition: background-color .2s ease;
	}
  a:hover {
    background-color: #00000008;
  }
	a:visited {
		color: var(--threejs-black);
	}
</style>
