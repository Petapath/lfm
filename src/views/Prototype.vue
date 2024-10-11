<script setup>
import { ref } from 'vue'

const msg = ref('Hello World!')


function mouseOverEffect(target,evt) {
  console.log(evt);
  var tgt = document.getElementById(target); 

  tgt.style.visibility="visible";
  tgt.style.display="block";
  tgt.style.left=evt.clientX + 'px';
  tgt.style.top=evt.clientY  + 'px';
}

function mouseOutEffect(target) {
  document.getElementById(target).style.visibility="hidden";
  //var tgt=document.querySelector(target);
  //tgt.close();
}

</script>

<template>
  <h1>{{ msg }}</h1>
  <input v-model="msg" /> <br><br><br>


   <div>
        <svg width="410" height="300" version="1.1"  xmlns="http://www.w3.org/2000/svg">

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
      </div>

      <div class="mydialog" id="#e123">Tip on <b>SVG</b> rectangle</div>
      <div class="mydialog" id="#e222">Here we have another description</div>

</template>

<style>
@import 'https://cdn.jsdelivr.net/npm/beercss@3.7.10/dist/cdn/beer.min.css';

  .bar {
    fill: none;
  }
  .bar:hover {
    fill: #ec008c;
    opacity: 1;
  }
  
  .maindrawer {
    fill:none;
  }
   .maindrawer:hover {
    fill:red;
    opacity: 0.8;
  }

  .mytooltipcontents {
    visibility: hidden;
    position: absolute;
    width:max-content;
  }

  .mydialog {
  display: none;
  border: none;
  opacity: 0.9;
  visibility: hidden;
  position: fixed;
  box-shadow: var(--elevate2);
  color: var(--on-surface);
  background-color: var(--surface-container-high);
  padding: 1.5rem;
  z-index: 100;
  inset: 10% auto auto 50%;
  min-inline-size: 20rem;
  max-inline-size: 100%;
  max-block-size: 80%;
  overflow-x: hidden;
  overflow-y: auto;
  transition: all var(--speed3), 0s background-color;
  border-radius: 0.75rem;
  outline: none;
}


</style>
