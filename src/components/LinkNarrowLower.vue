<script setup>
  import {bitmasks,types} from './bitmasks.js'

	const doSomething = () => {
		console.log('I am ModuleDrawerLo')
	}

	const props = defineProps(['ctrlPanelOutletId','componentId'])
  const emit  = defineEmits(['moveLeft','moveRight','remove'])

  const info  = () => {
		return { L: bitmasks.halfHeight, R: bitmasks.halfHeight, isa: types.separator }
	}

  const defaults = () => {
		return { L: bitmasks.halfHeight, R: bitmasks.halfHeight }
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
		<svg width="9" height="220" version="1.1"  xmlns="http://www.w3.org/2000/svg">

			<!-- horizontal bars -->
			<rect class="svg-rect" x="0" y="8"  width="9" height="15" stroke="#000000" stroke-width="0px" stroke-linecap="round" stroke-linejoin="round" fill="transparent"/>
			<path stroke="#000000" stroke-width="3px" stroke-linecap="round" stroke-linejoin="round" fill="transparent" d="M0,8 h9"></path>
			<path stroke="#000000" stroke-width="3px" stroke-linecap="round" stroke-linejoin="round" fill="transparent" d="M0,18 h9"></path>

			<rect class="svg-rect" x="0" y="70"  width="9" height="15" stroke="#000000" stroke-width="0px" stroke-linecap="round" stroke-linejoin="round" fill="transparent"/>
			<path stroke="#000000" stroke-width="3px" stroke-linecap="round" stroke-linejoin="round" fill="transparent" d="M0,70 h9"></path>
			<path stroke="#000000" stroke-width="3px" stroke-linecap="round" stroke-linejoin="round" fill="transparent" d="M0,85 h9"></path>

			<rect class="svg-rect" x="0" y="200" width="9" height="15" stroke="#000000" stroke-width="0px" stroke-linecap="round" stroke-linejoin="round" fill="transparent"/>
			<path stroke="#000000" stroke-width="3px" stroke-linecap="round" stroke-linejoin="round" fill="transparent" d="M0,200 h9"></path>
			<path stroke="#000000" stroke-width="3px" stroke-linecap="round" stroke-linejoin="round" fill="transparent" d="M0,215 h9"></path>

			<!-- inner lower legs -->
			<rect class="svg-rect" x="2"   y="85" width="5" height="115" stroke="#000000" stroke-width="3px" stroke-linecap="round" stroke-linejoin="round" fill="transparent"/>

		</svg>
    </span>

  </article>

</template>
