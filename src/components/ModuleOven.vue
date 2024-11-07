<script setup>
	import {ref} from 'vue'
  import {panelStatus} from './state.js'
  import {bitmasks,types} from './bitmasks.js'
  import ModuleControlMenu from './ModuleControlMenu.vue'

	const props = defineProps(['ctrlPanelOutletId','componentId'])
  const emit  = defineEmits(['moveLeft','moveRight','remove'])

  const isDrawer = ref("true")

	const doSomething = () => {
		console.log('I am ModuleOven')
	}

  const info  = () => {
		return { L: bitmasks.fullHeight, R: bitmasks.fullHeight, isa: types.module }
	}

  const defaults = () => {
		return { L: bitmasks.fullHeight, R: bitmasks.fullHeight }
	}

	defineExpose({
		doSomething,
		info,
		defaults
	})
 
</script>

<template>

  <!-- zlew with a single drawer / store -->
	<article class="no-elevate no-round no-padding">
    <span @click="panelStatus.setActive(componentId)" style="cursor: pointer;">
		<svg width="151" height="220" version="1.1"  xmlns="http://www.w3.org/2000/svg">

			<!-- blat -->
      <rect x="0"   y="8" width="150" height="10" stroke="#000000" stroke-width="0px" stroke-linecap="round" stroke-linejoin="round" fill="transparent"/>
      <path stroke="#000000" stroke-width="3px" stroke-linecap="round" stroke-linejoin="round" fill="transparent" d="M0,8 h150"></path>
      <path stroke="#000000" stroke-width="3px" stroke-linecap="round" stroke-linejoin="round" fill="transparent" d="M0,18 h150"></path>

			<!-- oven  -->
			<path stroke="#000000" stroke-width="3px" stroke-linecap="round" stroke-linejoin="round" fill="transparent" d="M8,25 h135 v119 h-135 z"></path>
			<path stroke="#000000" stroke-width="3px" stroke-linecap="round" stroke-linejoin="round" fill="transparent" d="M25,37 h100"></path>
			<path stroke="#000000" stroke-width="3px" stroke-linecap="round" stroke-linejoin="round" fill="transparent" d="M18,55 a4,4,0,0,1,4,-4 h106 a4,4,0,0,1,4,4 v60 a4,4,0,0,1,-4,4 h-106 a4,4,0,0,1,-4,-4 z"></path>

			<!-- szuflada -->
      <path stroke="#000000" stroke-width="3px" stroke-linecap="round" stroke-linejoin="round" fill="transparent" d="M7,163 h50 a5,5,0,0,0,5,5 h25 a5,5,0,0,0,5,-5 h50 v30 h-135 z"></path>

			<!-- horizontal bars -->
			<rect class="svg-rect" id="svg_1" x="0" y="190" width="150" height="15" stroke="#000000" stroke-width="0px" stroke-linecap="round" stroke-linejoin="round" fill="transparent"/>
			<path stroke="#000000" stroke-width="3px" stroke-linecap="round" stroke-linejoin="round" fill="transparent" d="M0,150 h150"></path>
			<path stroke="#000000" stroke-width="3px" stroke-linecap="round" stroke-linejoin="round" fill="transparent" d="M0,156 h150"></path>
			<rect class="svg-rect" id="svg_1" x="0" y="200" width="150" height="15" stroke="#000000" stroke-width="0px" stroke-linecap="round" stroke-linejoin="round" fill="transparent"/>
			<path stroke="#000000" stroke-width="3px" stroke-linecap="round" stroke-linejoin="round" fill="transparent" d="M0,200 h150"></path>
			<path stroke="#000000" stroke-width="3px" stroke-linecap="round" stroke-linejoin="round" fill="transparent" d="M0,215 h150"></path>

		</svg>
    </span>

    <ModuleControlMenu @moveLeft="emit('moveLeft')" @remove="emit('remove')" @moveRight="emit('moveRight')"/>
  </article>

	<Teleport defer :to="'#' + ctrlPanelOutletId"> 
      <div class="padding" v-if="panelStatus.checkActive(componentId)">
				<div class="field label suffix border small round" style="width:200px">
					<select v-model="isDrawer">
						<option value="true">Szuflada</option>
						<option value="false">Szafka</option>
					</select>
					<label>Styl</label>
					<i>arrow_drop_down</i>
				</div>
				<label class="slider medium ">
				<input type="range" value="5" min="4" max="8">
				<span></span>
				</label>
			</div>
	</Teleport>
</template>
