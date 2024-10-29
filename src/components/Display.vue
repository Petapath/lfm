<script setup>
	import { ref }  from 'vue'
	import Element  from './Element.vue'
	import Element2 from './Element2.vue'
  import Selector from './Selector.vue'
	const width = ref(50)
	const dynamicSegments = ref([])

	const addComponent = (c) => {
	  dynamicSegments.value.push({comp: c, uid: crypto.randomUUID()});
		};

</script>

<template>

	<Selector @addComponent="addComponent"/>

	<div class="elevate padding margin surface-container-high">
		<div class="row no-space top-align scroll">
		<div v-for="(c) in dynamicSegments">
			<component :is="c.comp" ctrl-panel-outlet-id="cmpCtrl2" component-id="c.uid" />
		</div>
		</div>
	</div>

	<div class="elevate padding margin surface-container-high">
		<div class="row no-space top-align scroll">
		<!--Element  ctrl-panel-outlet-id="cmpCtrl2" component-id="0x101" @rendercp="(m) => componentController=m" /-->
		<Element  ctrl-panel-outlet-id="cmpCtrl2" component-id="0x101"/>
		<Element  ctrl-panel-outlet-id="cmpCtrl2" component-id="0x102"/>
		<Element2 ctrl-panel-outlet-id="cmpCtrl2" component-id="0x201"/>
		</div>
	</div>

	<div class="elevate padding margin surface-container-high" id="cmpCtrl2"/>

</template>

<style>
	@import 'https://cdn.jsdelivr.net/npm/beercss@3.7.10/dist/cdn/beer.min.css';

	div:empty {
		display: none;
	}
</style>
