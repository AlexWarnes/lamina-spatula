<script lang="ts">
	import { laminaData } from '../data/state';
	import { slide } from 'svelte/transition';
	import {
		extractDepthProps,
		extractFresnelProps,
		extractNoiseProps,
		extractDisplaceProps,
		extractGradientProps,
		extractColorProps
	} from '../data/layers';
	import { onMount } from 'svelte';
	import ChevronRight from './icons/ChevronRight.svelte';
	import Copy from './icons/Copy.svelte';
	let displayCode = false;
	const handleKeydown = (evt) => {
		if (evt && evt.code && evt.code === 'Enter') {
			displayCode = !displayCode;
		}
	};

	const colorString = (c) => {
		// @ts-ignore
		return `new THREE.Color("#${c.getHexString()}")`;
	};

	function stringifyImports({ layers }) {
		let layerImports = layers.map((l) => l.name[0].toUpperCase() + l.name.substring(1));
		return `
import * as THREE from "three";
import { 
LayerMaterial, 
${layerImports.join(',\n')}
} from "lamina/vanilla";`;
	}

	function stringifyMaterial({ baseLayer, layers }) {
		return `
const laminaMaterial = new LayerMaterial({
  color: "${baseLayer.color}",
  lighting: "${baseLayer.lighting}",
  layers: [
    ${layers.map((l) => stringifyLayer(l)).join('')}
  ]
});
    `;
	}

	function stringifyLayer(layer) {
		switch (layer.name.toLowerCase()) {
			case 'depth':
				const depthProps = extractDepthProps(layer);
				// colorA, colorB, alpha, near, far, origin, mapping, mode, visible
				return `new Depth({
      colorA: ${colorString(depthProps.colorA)},
      colorB: ${colorString(depthProps.colorB)},
      alpha: ${depthProps.alpha},
      near: ${depthProps.near},
      far: ${depthProps.far},
      origin: [${Object.values(depthProps.origin)}],
      mapping: "${depthProps.mapping}",
      mode: "${depthProps.mode}",
      visible: ${depthProps.visible},
    }),
    `;
			case 'fresnel':
				const fresnelProps = extractFresnelProps(layer);
				// color, alpha, power, intensity, bias, mode, visible
				return `new Fresnel({
      color: ${colorString(fresnelProps.color)},
      alpha: ${fresnelProps.alpha},
      power: ${fresnelProps.power},
      intensity: ${fresnelProps.intensity},
      bias: ${fresnelProps.bias},
      mode: "${fresnelProps.mode}",
      visible: ${fresnelProps.visible},
    }),
    `;
			case 'noise':
				const noiseProps = extractNoiseProps(layer);
				// colorA, colorB, colorC, colorD, alpha, scale, type, mapping, mode, visible
				return `new Noise({
      colorA: ${colorString(noiseProps.colorA)},
      colorB: ${colorString(noiseProps.colorB)},
      colorC: ${colorString(noiseProps.colorC)},
      colorD: ${colorString(noiseProps.colorD)},
      alpha: ${noiseProps.alpha},
      scale: ${noiseProps.scale},
      type: "${noiseProps.type}",
      offset: [${Object.values(noiseProps.offset)}],
      mapping: "${noiseProps.mapping}",
      mode: "${noiseProps.mode}",
      visible: ${noiseProps.visible},
    }),
    `;
			case 'displace':
				const displaceProps = extractDisplaceProps(layer);
				// strength, scale, type, mapping, mode, visible
				return `new Displace({
      strength: ${displaceProps.strength},
      scale: ${displaceProps.scale},
      type: "${displaceProps.type}",
      offset: [${Object.values(displaceProps.offset)}],
      mode: "${displaceProps.mode}",
      visible: ${displaceProps.visible},
    }),
    `;
			case 'gradient':
				const gradientProps = extractGradientProps(layer);
				// colorA, colorB, alpha, contrast, start, end, axes, mapping, visible
				return `new Gradient({
      colorA: ${colorString(gradientProps.colorA)},
      colorB: ${colorString(gradientProps.colorB)},
      alpha: ${gradientProps.alpha},
      contrast: ${gradientProps.contrast},
      start: ${gradientProps.start},
      end: "${gradientProps.end}",
      axes: "${gradientProps.axes}",
      mapping: "${gradientProps.mapping}",
      visible: ${gradientProps.visible},
    }),
    `;
			case 'color':
				const colorProps = extractColorProps(layer);
				// color, alpha, mode, visible
				return `new Color({
      color: ${colorString(colorProps.color)},
      alpha: ${colorProps.alpha},
      mode: "${colorProps.mode}",
      visible: ${colorProps.visible},
    }),
    `;
			default:
				console.error('Unrecognized layer name:', layer.name);
				return '';
		}
	}
	let clickToCopy = () => null;
	let copyStatus = 'IDLE';
	onMount(() => {
		if (window.navigator) {
			clickToCopy = () => {
				window.navigator.clipboard
					.writeText(document.getElementById('code-wrapper').innerText)
					.then(() => {
						console.log('Copied!');
						copyStatus = 'SUCCESS';
						setTimeout(() => (copyStatus = 'IDLE'), 4000);
					})
					.catch((err) => console.log('Error copying code', err));
			};
		}
	});
</script>

<div class="code-container">
	<div
		role="button"
		aria-haspopup="menu"
		class="control-bar"
		on:click={() => (displayCode = !displayCode)}
		tabindex="0"
		on:keydown={handleKeydown}
	>
		<p>Code Viewer</p>
		<span class="icon-wrapper" class:open={displayCode}>
			<ChevronRight height="16" />
		</span>
	</div>
	{#if displayCode}
		<div class="code-display" transition:slide>
			<div class="header">
				<div class="title-row">
					<span>&#127856</span>
					<h3>Your Lamina Code</h3>
				</div>

				<p class="description">
					Lamina shader material code generated for your current set of layers. You can use this as
					a material on any three.js object.
				</p>
				<div class="repl-row">
					<p class="description">
						Try it in the <a
							href="https://svelte.dev/repl/d1116e7de31c479facf07a6210406143?version=3.47.0"
							target="_blank"
							rel="noopener noreferrer">Svelte REPL</a
						>
					</p>

					<button on:click={clickToCopy} class:success={copyStatus === 'SUCCESS'} class="copy-btn">
						<Copy height="16" />
						{copyStatus === 'SUCCESS' ? 'Copied!' : 'Copy'}
					</button>
				</div>
			</div>

			<pre id="code-wrapper">
        {stringifyImports($laminaData)}
        {stringifyMaterial($laminaData)}
    </pre>
		</div>
	{/if}
</div>

<style>
	.code-container {
		position: fixed;
		left: 0;
		max-width: 600px;
		width: 33%;
		max-height: 50%;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		color: #fafbfc;
	}

	.control-bar {
		min-width: 12rem;
		width: 45%;
		padding: 0.5rem 1rem;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: var(--canvas-overlay);
		border-bottom: 2px solid darkcyan;
		cursor: pointer;
	}
	.control-bar > p {
		text-align: center;
		flex-grow: 1;
		margin: 0;
	}

	.header {
		background-color: #676778;
		padding: 1rem;
	}
	.title-row {
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}
	.header h3 {
		margin: 0 0 0 1rem;
	}

	.repl-row {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
	}
	a {
		color: #c5eeff;
	}
	a:visited {
		color: #fcdfff;
	}

	.code-display {
		width: 100%;
		height: 50vh;
		background-color: var(--canvas-overlay);
		font-size: 14px;
		font-family: 'Fira Mono', monospace;
		padding: 1rem;
	}

	#code-wrapper {
		width: 100%;
		background-color: #16161c;
		height: 50%;
		overflow: auto;
		padding: 0.25rem;
	}

	.copy-btn {
		border: 2px solid transparent;
		border: 2px solid transparent;
		padding: 0.5rem 0.75rem;
		width: 5.6rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		cursor: pointer;
	}
	.copy-btn.success {
		border: 2px solid darkcyan;
	}

	.icon-wrapper {
		transition: all 0.2s ease;
	}
	.icon-wrapper.open {
		transform: rotate(90deg);
	}
</style>
