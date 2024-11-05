<script setup>
  import {bitmasks,types} from './bitmasks.js'

	const doSomething = () => {
		console.log('I am ModuleDrawerLo')
	}

	const props = defineProps(['ctrlPanelOutletId','componentId'])
  const emit  = defineEmits(['moveLeft','moveRight','remove'])

  const info  = () => {
		return { L: bitmasks.terminator, R: bitmasks.forbidden, isa: types.separator }
	}

  const defaults = () => {
		return { L: bitmasks.terminator, R: bitmasks.forbidden }
	}

	defineExpose({
		doSomething,
    info,
    defaults
	})
 
</script>

<template>

	<article class="no-elevate no-round no-padding">
    <span>
		<svg width="5" height="220" version="1.1"  xmlns="http://www.w3.org/2000/svg">

			<!-- blat terminator --> 
			<path stroke="#000000" stroke-width="3px" stroke-linecap="round" stroke-linejoin="round" fill="transparent" d="M0,8 h2, v10, h-2"></path>

		</svg>
    </span>

  </article>

</template>
