<script setup>
	import {ref} from 'vue'
  import {panelStatus} from './state.js'
  import {bitmasks,types} from './bitmasks.js'
  import ModuleControlMenu from './ModuleControlMenu.vue'

	const props = defineProps(['ctrlPanelOutletId','componentId'])
  const emit  = defineEmits(['moveLeft','moveRight','remove'])

	const doSomething = () => {
		console.log('I am ModuleDrawerLo')
	}

  const info  = () => {
		return { L: bitmasks.fullHeight | bitmasks.halfHeight, R: bitmasks.fullHeight | bitmasks.halfHeight, isa: types.module }
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
  <!-- drawer section with free space at top -->
  <article class="no-elevate no-round no-padding">
    <span @click="panelStatus.setActive(componentId)" style="cursor: pointer;">
    <svg width="129" height="220" version="1.1"  xmlns="http://www.w3.org/2000/svg">

      <!-- blat -->
      <rect x="0"   y="8" width="129" height="10" stroke="#000000" stroke-width="0px" stroke-linecap="round" stroke-linejoin="round" fill="transparent"/>
      <path stroke="#000000" stroke-width="3px" stroke-linecap="round" stroke-linejoin="round" fill="transparent" d="M0,8 h128"></path>
      <path stroke="#000000" stroke-width="3px" stroke-linecap="round" stroke-linejoin="round" fill="transparent" d="M0,18 h128"></path>

      <!-- szuflady lewe -->
      <path stroke="#000000" stroke-width="3px" stroke-linecap="round" stroke-linejoin="round" fill="transparent" d="M7,91 h40 a5,5,0,0,0,5,5 h25 a5,5,0,0,0,5,-5 h40 v30 h-115 z"></path>
      <path stroke="#000000" stroke-width="3px" stroke-linecap="round" stroke-linejoin="round" fill="transparent" d="M7,127 h40 a5,5,0,0,0,5,5 h25 a5,5,0,0,0,5,-5 h40 v30 h-115 z"></path>
      <path stroke="#000000" stroke-width="3px" stroke-linecap="round" stroke-linejoin="round" fill="transparent" d="M7,163 h40 a5,5,0,0,0,5,5 h25 a5,5,0,0,0,5,-5 h40 v30 h-115 z"></path>
        
      <!-- horizontal bars -->
      <rect class="svg-rect" id="svg_1" x="0" y="70"  width="129" height="15" stroke="#000000" stroke-width="0px" stroke-linecap="round" stroke-linejoin="round" fill="transparent"/>
      <path stroke="#000000" stroke-width="3px" stroke-linecap="round" stroke-linejoin="round" fill="transparent" d="M0,70 h128"></path>
      <path stroke="#000000" stroke-width="3px" stroke-linecap="round" stroke-linejoin="round" fill="transparent" d="M0,85 h128"></path>
      <rect class="svg-rect" id="svg_1" x="0" y="200" width="129" height="15" stroke="#000000" stroke-width="0px" stroke-linecap="round" stroke-linejoin="round" fill="transparent"/>
      <path stroke="#000000" stroke-width="3px" stroke-linecap="round" stroke-linejoin="round" fill="transparent" d="M0,200 h128"></path>
      <path stroke="#000000" stroke-width="3px" stroke-linecap="round" stroke-linejoin="round" fill="transparent" d="M0,215 h128"></path>
    </svg>
    </span>

    <ModuleControlMenu @moveLeft="emit('moveLeft')" @remove="emit('remove')" @moveRight="emit('moveRight')"/>
  </article>

	<Teleport defer :to="'#' + ctrlPanelOutletId"> 
      <div v-if="panelStatus.checkActive(componentId)">
				<h5>Teleported: drawer section with free space at top</h5>
				<label class="slider medium ">
				<input type="range" value="5" min="4" max="8">
				<span></span>
				</label>
			</div>
	</Teleport>
</template>
