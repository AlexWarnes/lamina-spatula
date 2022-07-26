<script>
	import ChevronRight from '$lib/icons/ChevronRight.svelte';
</script>

<!-- this is dumb. TODO: fix canvas view so page can overflow on its own -->
<div class="about-wrapper">
	<header>
		<div class="title">
			<img src="./SpatulaLayers.svg" alt="Spatula over layers" width="100" height="100" />
			<h1>SPATULA</h1>
		</div>
		<p class="description">
			Create beautiful shader materials in the browser and generate your JavaScript. Powered by
			lamina.
		</p>
		<a class="canvas-link" href="/canvas">
			<span>Start Creating</span>
			<ChevronRight height="16" />
		</a>
	</header>

	<section>
		<h2>What is spatula?</h2>
		<p>
			Spatula is a side project I made to learn more about shaders using lamina. It's a tool for
			building shader materials without the need to stand up a new project. Inspired by the official
			lamina debugger, it allows for layer editing and generates the JavaScript for your material.
			You can use that code as a material in any project that uses lamina and threejs.
		</p>
		<p>Made with SvelteKit, lamina, threejs, threlte, and RxJS</p>
		<a href="https://github.com/AlexWarnes/lamina-spatula">
			<span>GitHub Repo</span>
			<ChevronRight height="16" />
		</a>
	</section>
	<section>
		<h2>What is lamina? <span>&#127856</span></h2>
		<p>
			From the docs: "Lamina let's you create materials with a declarative system of layers. Layers
			make it incredibly easy to stack and blend effects."
		</p>
		<a href="https://github.com/pmndrs/lamina">
			<span>Learn more</span>
			<ChevronRight height="16" />
		</a>
	</section>
	<section>
		<h2>Where can I use the generated code?</h2>
		<p>Anywhere you're using lamina and threejs!</p>
		<p>vanilla js:</p>
		<code>{`const mesh = new THREE.Mesh(geometry, laminaMaterial)`}</code>
		<p>threlte:</p>
		<code>{`<Mesh {geometry} material={laminaMaterial} />`}</code>
		<a href="https://svelte.dev/tutorial/basics">
			<span>Learn Svelte</span>
			<ChevronRight height="16" />
		</a>
		<a href="https://threlte.xyz/">
			<span>Learn threlte</span>
			<ChevronRight height="16" />
		</a>
		<a href="https://discoverthreejs.com/book/introduction/">
			<span>Learn threejs</span>
			<ChevronRight height="16" />
		</a>


	</section>
	<section>
		<h2>What if I'm using React?</h2>
		<p>
			If you have a react-three-fiber project, you'll be better off using lamina's r3f imports
			instead of the vanilla js code. The official debugger allows more fine tuning and JSX code
			copying. There's a whole suite of amazing tools available for r3f from the Poimandres
			collective.
		</p>

		<a href="https://codesandbox.io/embed/github/pmndrs/lamina/tree/main/examples/layer-materials">
			<span>Official lamina Debugger</span>
			<ChevronRight height="16" />
		</a>
		<a href="https://github.com/pmndrs">
			<span>Poimandres GitHub</span>
			<ChevronRight height="16" />
		</a>
	</section>
</div>

<style>
	.about-wrapper {
		overflow: auto;
		height: 100%;
		padding: 0 0 3rem 0;
	}
	header {
		background: #fff1ef;
		padding: 10%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-image: url('/CornerShapes.svg');
		height: 80vh;
		background-repeat: no-repeat;
		background-size: cover;
		color: #444444;
		margin: 0 0 2rem 0;
	}

	.title {
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 2rem;
		flex-wrap: wrap;
	}
	h1 {
		margin: 0;
	}
	.description {
		max-width: 25rem;
		line-height: 1.65rem;
		text-align: center;
	}
	a {
		margin: .875rem auto;
		padding: 0.5rem 0.75rem;
		border: none;
		border-radius: 4px;
		background: var(--threejs-black);
		color: white;
		display: inline-flex;
		justify-content: space-between;
		align-items: center;
		cursor: pointer;
		font-size: 0.8rem;
		text-decoration: none;
	}
	a:hover {
		text-decoration: underline;
	}

	a span {
		margin: 0 1rem 0 0;
	}

	a.canvas-link {
		background-color: var(--accent);
		font-size: 1rem;
		padding: 1rem 1.5rem;
	}

	section {
		width: 100%;
		max-width: 600px;
		margin: 0 auto;
		padding: 0 1rem 2rem;
	}

	code {
		width: 100%;
		background-color: #F1F3F4;
		overflow: auto;
		border-radius: 2px;
		padding: 0.875rem;
		font-size: 14px;
		font-family: 'Fira Mono', monospace;
		/* color: #fafbfc; */
		display: block;
    margin: 1rem auto;
	}
</style>
