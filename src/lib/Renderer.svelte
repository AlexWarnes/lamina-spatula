<script lang="ts">
	import { useThrelte } from '@threlte/core';
	import { ACESFilmicToneMapping, NoToneMapping, PCFShadowMap, sRGBEncoding } from 'three';
	import { sceneSettings } from '../data/state';

	const { renderer } = useThrelte();

  $: if($sceneSettings.ACESFilmicToneMapping) {
    renderer.toneMapping = ACESFilmicToneMapping;
  } else {
    renderer.toneMapping = NoToneMapping;
  }
</script>
