<script setup>
	import { ref, computed } from 'vue'
	import {} from 'beercss'
	const props = defineProps(['width'])
	const localW = ref('35');
	const adjustedLocalW = computed( () => Math.floor( parseInt(localW.value) / 10 ));
</script>

<template>

  <article class="no-elevate no-round no-padding">
	  abc {{width}}
	  <svg :width="localW" height="70" version="1.1"  xmlns="http://www.w3.org/2000/svg">
	  <rect class="svg-rect" id="svg_1" x="6"   y="18" :width="width" height="50" stroke="#000000" stroke-width="3px" stroke-linecap="round" stroke-linejoin="round" fill="transparent"/>

      <!-- blat -->
	  <!--path stroke="#000000" stroke-width="3px" stroke-linecap="round" stroke-linejoin="round" fill="transparent" d="M{width},8 h-21, v10, h21"></path-->

      <!-- outer leg left -->
	  <!--rect class="svg-rect" id="svg_1" x="6"   y="18" width="{width}" height="200" stroke="#000000" stroke-width="3px" stroke-linecap="round" stroke-linejoin="round" fill="transparent"/-->

    </svg>


	<fieldset>
	<div class="field border label small" style="width:150px;">
  		<input class="active" type="text" v-model="localW" :placeholder="localW">
		<label class="active">Width</label>
	</div>
	<div class="field border label small" style="width:150px;">
  		<input class="active" type="text" v-model="adjustedLocalW" :placeholder="adjustedLocalW">
		<label class="active">Width (adjusted)</label>
	</div>
	<div class="form-input">
	  <label>
		<input :placeholder="localW">
		<span class="placeholder">Width</span>
	  </label>
	</div>

	<label class="slider ">
	  <input type="range" value="25" v-model="localW">
	  <span></span>
	</label>

	<label class="checkbox">
  		<input type="checkbox">
  		<span></span>
	</label>

	<div class="field middle-align">
	  <nav class="vertical no-space">
		<label class="radio">
		  <input type="radio" name="radio4_">
		  <span>Equal</span>
		</label>
		<label class="radio">
		  <input type="radio" name="radio4_">
		  <span>Fibonacci</span>
		</label>
		<label class="radio">
		  <input type="radio" name="radio4_">
		  <span>Geometrical</span>
		</label>
	  </nav>
	</div>
	
	</fieldset>

  </article>


</template>

<style> 
@import 'https://cdn.jsdelivr.net/npm/beercss@3.7.10/dist/cdn/beer.min.css';
</style>
