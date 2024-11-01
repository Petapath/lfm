<script setup>
	import { ref, shallowRef }  from 'vue'
	import Element  from './ModuleDrawerLo.vue'
	import Element2 from './ModuleSinkSmall.vue'
  import Selector from './Selector.vue'
	const width = ref(50)
	const dynamicSegments = ref([])

	const addComponent = (c) => {
	  dynamicSegments.value.push({componentHandle: shallowRef(c), uid: crypto.randomUUID(), rf: ref(null)}) 
	}

  const removeComponent = (cuid) => {
		console.log( "removing " + cuid )
		dynamicSegments.value = dynamicSegments.value.filter(item => item.uid !== cuid)
	}

	const moveLeft = (cuid) => {
		console.log( "moving to left " + cuid )
	  const ds = dynamicSegments.value
		const i  = ds.findIndex(item => item.uid === cuid)
		console.log( "found at " + i)
		if (i>0) [ds[i-1], ds[i]] = [ds[i], ds[i-1]]
		dynamicSegments.value=ds
	}

	const moveRight = (cuid) => {
		console.log( "moving to right " + cuid )
	  const ds = dynamicSegments.value
		const i  = ds.findIndex(item => item.uid === cuid)
		console.log( "found at " + i)
		ds[i].rf.doSomething()
		if (i<ds.length-1) [ds[i+1], ds[i]] = [ds[i], ds[i+1]]
		dynamicSegments.value=ds
	}

</script>

<template>
  
	<div>{{dynamicSegments}}</div>

	<Selector @addComponent="addComponent"/>

	<div class="elevate padding margin surface-container-high">
		<div class="row no-space top-align scroll">
		<div v-for="c in dynamicSegments" :key="c.uid">
			<component :is="c.componentHandle"  
			           :component-id="c.uid" 
								 :ref="(el) => c.rf = el"
			           @remove="removeComponent(c.uid)" 
					       @moveLeft="moveLeft(c.uid)"
					       @moveRight="moveRight(c.uid)" 
					       ctrl-panel-outlet-id="cmpCtrl2"/>
		</div>
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
