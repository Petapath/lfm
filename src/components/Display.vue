<script setup>
	import { ref }  from 'vue'
	import Element  from './Element.vue'
	import Element2 from './Element2.vue'
  import Selector from './Selector.vue'
	const width = ref(50)
	const componentController = ref('Nothing')
</script>

<template>

	<Selector />
	<br>
	<hr>
	<div class="row no-space top-align scroll">
	<Element  ctrl-panel-outlet-id="cmpCtrl2" component-id="0x101" @rendercp="(m) => componentController=m" />
	<Element  ctrl-panel-outlet-id="cmpCtrl2" component-id="0x102" @rendercp="(m) => componentController=m" />
	<Element2 ctrl-panel-outlet-id="cmpCtrl2" component-id="0x201"/>
	</div>

	<br>

	<div v-html="componentController" />
	<div id="cmpCtrl2" />

</template>

<style>
	@import 'https://cdn.jsdelivr.net/npm/beercss@3.7.10/dist/cdn/beer.min.css';
</style>
