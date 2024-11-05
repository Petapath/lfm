<script setup>
  import {bitmasks,types} from './bitmasks.js'

	const doSomething = () => {
		console.log('I am ModuleDrawerLo')
	}

	const props = defineProps(['ctrlPanelOutletId','componentId'])
  const emit  = defineEmits(['moveLeft','moveRight','remove'])

  const info  = () => {
		return { L: bitmasks.forbidden, R: bitmasks.terminator, isa: types.separator }
	}

  const defaults = () => {
		return { L: bitmasks.forbidden, R: bitmasks.terminator }
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
		<svg width="6" height="220" version="1.1"  xmlns="http://www.w3.org/2000/svg">

			<!-- blat terminator --> 
			<path stroke="#000000" stroke-width="3px" stroke-linecap="round" stroke-linejoin="round" fill="transparent" d="M5,8 h-2, v10, h2"></path>

		</svg>
    </span>

  </article>

</template>
