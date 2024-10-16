<script setup>
</script>

<template>
        <svg width="401" height="300" version="1.1"  xmlns="http://www.w3.org/2000/svg">

          <!-- blat -->
          <rect x="2"   y="8" width="153" height="10" stroke="#000000" stroke-width="3px" stroke-linecap="round" stroke-linejoin="round" fill="transparent"/>
          <rect class="svgtooltip" x="300" y="8" width="100" height="10"stroke="#000000" stroke-width="3px" stroke-linecap="round" stroke-linejoin="round" fill="transparent"/>

          <!-- zlew -->
          <path stroke="#000000" stroke-width="3px" stroke-linecap="round" stroke-linejoin="round" fill="transparent" d="M160,6 a4,4,0,0,1,4,-4 h127 a4,4,0,0,1,4,4 v54 a4,4,0,0,1,-4,4 h-127 a4,4,0,0,1,-4,-4 z" @mouseover="mouseOverEffect('#e123',$event)" @mouseout="mouseOutEffect('#e123')"></path>

          <!-- szuflada glowna -->
          <path class="maindrawer" stroke="#000000" stroke-width="3px" stroke-linecap="round" stroke-linejoin="round" fill="transparent" d="M160,91 h50 a5,5,0,0,0,5,5 h25 a5,5,0,0,0,5,-5 h50 v103 h-135 z" @mouseover="mouseOverEffect('#e222',$event)" @mouseout="mouseOutEffect('#e222')"></path>

          <!-- szuflady lewe -->
          <path stroke="#000000" stroke-width="3px" stroke-linecap="round" stroke-linejoin="round" fill="transparent" d="M27,91 h40 a5,5,0,0,0,5,5 h25 a5,5,0,0,0,5,-5 h40 v30 h-115 z"></path>
          <path stroke="#000000" stroke-width="3px" stroke-linecap="round" stroke-linejoin="round" fill="transparent" d="M27,127 h40 a5,5,0,0,0,5,5 h25 a5,5,0,0,0,5,-5 h40 v30 h-115 z"></path>
          <path stroke="#000000" stroke-width="3px" stroke-linecap="round" stroke-linejoin="round" fill="transparent" d="M27,163 h40 a5,5,0,0,0,5,5 h25 a5,5,0,0,0,5,-5 h40 v30 h-115 z"></path>
            
          <!-- horizontal bars -->
          <rect class="bar" x="21" y="70"  width="359" height="15" stroke="#000000" stroke-width="3px" stroke-linecap="round" stroke-linejoin="round" fill="transparent"/>
          <rect class="bar" x="21" y="200" width="359" height="15" stroke="#000000" stroke-width="3px" stroke-linecap="round" stroke-linejoin="round" fill="transparent" @mouseover="mouseOverEffect('#e123',$event)" @mouseout="mouseOutEffect('#e123')"/>

          <!-- outer legs -->
          <rect class="svg-rect" id="svg_1" x="6"   y="18" width="15" height="200" stroke="#000000" stroke-width="3px" stroke-linecap="round" stroke-linejoin="round" fill="transparent"/>
          <rect class="svg-rect" id="svg_1" x="380" y="18" width="15" height="200" stroke="#000000" stroke-width="3px" stroke-linecap="round" stroke-linejoin="round" fill="transparent"/>

          <!-- inner upper legs -->
          <rect class="svg-rect" id="svg_1" x="148"   y="18" width="5" height="52" stroke="#000000" stroke-width="3px" stroke-linecap="round" stroke-linejoin="round" fill="transparent"/>
          <rect class="svg-rect" id="svg_1" x="302"   y="18" width="5" height="52" stroke="#000000" stroke-width="3px" stroke-linecap="round" stroke-linejoin="round" fill="transparent"/>

          <!-- inner lower legs -->
          <rect class="svg-rect" id="svg_1" x="148"   y="85" width="5" height="115" stroke="#000000" stroke-width="3px" stroke-linecap="round" stroke-linejoin="round" fill="transparent"/>
          <rect class="svg-rect" id="svg_1" x="302"   y="85" width="5" height="115" stroke="#000000" stroke-width="3px" stroke-linecap="round" stroke-linejoin="round" fill="transparent"/>
        </svg>

</template>

<style scoped>
</style>

