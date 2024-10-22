<script setup>
	import {ref} from 'vue'
  import {panelStatus} from './state.js'

  const showCtrlPanel = ref(false)
	const props = defineProps(['ctrlPanelOutletId','componentId'])
</script>

<template>

  <!-- zlew with a single drawer / store -->
	<article class="no-elevate no-round no-padding min ">
		<svg width="160" height="220" version="1.1"  xmlns="http://www.w3.org/2000/svg">
			<defs>
				<pattern id="img0" patternUnits="userSpaceOnUse" width="200" height="100">
					<image href="https://www.shutterstock.com/shutterstock/photos/2478458745/display_1500/stock-photo-dark-wood-texture-background-surface-with-old-natural-pattern-texture-of-retro-plank-wood-plywood-2478458745.jpg" x="0" y="0" width="100" height="100" />
				</pattern>
			</defs>

			<!-- blat -->
			<path stroke="#000000" stroke-width="3px" stroke-linecap="round" stroke-linejoin="round" fill="transparent" d="M0,8 h8, v10, h-8"></path>
			<path stroke="#000000" stroke-width="3px" stroke-linecap="round" stroke-linejoin="round" fill="transparent" d="M160,8 h-7, v10, h7"></path>

			<!-- zlew -->
			<path stroke="#000000" stroke-width="3px" stroke-linecap="round" stroke-linejoin="round" fill="transparent" d="M13,6 a4,4,0,0,1,4,-4 h127 a4,4,0,0,1,4,4 v54 a4,4,0,0,1,-4,4 h-127 a4,4,0,0,1,-4,-4 z" onmousemove="showTooltip(evt, 'This is blue');" onmouseout="hideTooltip();"></path>

			<!-- szuflada -->
			<path stroke="#000000" stroke-width="3px" stroke-linecap="round" stroke-linejoin="round" fill="transparent" d="M13,91 h50 a5,5,0,0,0,5,5 h25 a5,5,0,0,0,5,-5 h50 v103 h-135 z"></path>

			<!-- horizontal bars -->
			<rect class="svg-rect" id="svg_1" x="0" y="70"  width="160" height="15" stroke="#000000" stroke-width="0px" stroke-linecap="round" stroke-linejoin="round" fill="url(#img0)"/>
			<path stroke="#000000" stroke-width="3px" stroke-linecap="round" stroke-linejoin="round" fill="transparent" d="M0,70 h160"></path>
			<path stroke="#000000" stroke-width="3px" stroke-linecap="round" stroke-linejoin="round" fill="transparent" d="M0,85 h160"></path>
			<rect class="svg-rect" id="svg_1" x="0" y="200" width="160" height="15" stroke="#000000" stroke-width="0px" stroke-linecap="round" stroke-linejoin="round" fill="url(#img0)"/>
			<path stroke="#000000" stroke-width="3px" stroke-linecap="round" stroke-linejoin="round" fill="transparent" d="M0,200 h160"></path>
			<path stroke="#000000" stroke-width="3px" stroke-linecap="round" stroke-linejoin="round" fill="transparent" d="M0,215 h160"></path>

			<!-- inner upper legs -->
			<rect class="svg-rect" id="svg_1" x="2"   y="18" width="5" height="52" stroke="#000000" stroke-width="3px" stroke-linecap="round" stroke-linejoin="round" fill="url(#img0)"/>
			<rect class="svg-rect" id="svg_1" x="154"   y="18" width="5" height="52" stroke="#000000" stroke-width="3px" stroke-linecap="round" stroke-linejoin="round" fill="url(#img0)"/>

			<!-- inner lower legs -->
			<rect class="svg-rect" id="svg_1" x="2"   y="85" width="5" height="115" stroke="#000000" stroke-width="3px" stroke-linecap="round" stroke-linejoin="round" fill="url(#img0)"/>
			<rect class="svg-rect" id="svg_1" x="154"   y="85" width="5" height="115" stroke="#000000" stroke-width="3px" stroke-linecap="round" stroke-linejoin="round" fill="url(#img0)"/>

		</svg>

		<nav class="no-space middle-align">
			<button class="circle transparent" style="height:20px;width:20px;"><i class="tiny">line_start_arrow</i></button>
			<button class="circle transparent" style="height:20px;width:20px;" @click="panelStatus.setActive(componentId)"><i class="tiny">line_end_arrow</i></button>
		</nav>
  </article>

	<Teleport defer :to="'#' + ctrlPanelOutletId"> 
      <div v-if="panelStatus.checkActive(componentId)">
				<h5>Teleported: sink section</h5>
				<label class="slider medium ">
				<input type="range" value="5" min="4" max="8">
				<span></span>
				</label>
			</div>
	</Teleport>
</template>
