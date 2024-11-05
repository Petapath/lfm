<script setup>
  defineOptions({ inheritAttrs: false })

	import {ref,shallowRef} from 'vue'
  import {bitmasks,types} from './bitmasks.js'
	//
  import Selector from './Selector.vue'
  import DividerLow  from './LinkNarrowLower.vue'
  import DividerFull from './LinkNarrowFull.vue'
  import DividerFullOuter from './LinkNarrowFullOuter.vue'
  import TerminatorL from './LinkTerminatorL.vue'
  import TerminatorR from './LinkTerminatorR.vue'
	const width = ref(50)
	const dynamicSegments = ref([])


	const addComponent = (c,compatibility,defaults) => {
	  const ds  = dynamicSegments.value
		const dsl = ds.length

		// init with a pair of outer L and R supports
		if(dsl === 0) {
			ds.push({componentHandle: shallowRef(TerminatorL),      uid: crypto.randomUUID(), rf: ref(null)}) 
			ds.push({componentHandle: shallowRef(DividerFullOuter), uid: crypto.randomUUID(), rf: ref(null)}) 
			ds.push({componentHandle: shallowRef(c),                uid: crypto.randomUUID(), rf: ref(null)}) 
			ds.push({componentHandle: shallowRef(DividerFullOuter), uid: crypto.randomUUID(), rf: ref(null)}) 
			ds.push({componentHandle: shallowRef(TerminatorR),      uid: crypto.randomUUID(), rf: ref(null)}) 
	  }
    else {
			// insert at the end always, starting with the separator
			// knowing the preceeding element requirements, 
			// as well as these of the new elements, 
			// we can select the best separator
			let   separator = DividerFull
			const preceeding = ds[dsl-3].rf.info()
			console.log(preceeding)
			console.log(compatibility)
			console.log(defaults)
			if( preceeding.R & defaults.L ) {
				if( defaults.L & bitmasks.halfHeight ) {
				    separator = DividerLow
				}
			}
	  	ds.splice(dsl-2,0,{componentHandle: shallowRef(separator), uid: crypto.randomUUID(), rf: ref(null)}) 
	  	ds.splice(dsl-1,0,{componentHandle: shallowRef(c),         uid: crypto.randomUUID(), rf: ref(null)}) 
		}
	}

  const optimizeLinks = (ds) => {
	  console.log("optimizing")
		for (let i=2; i<ds.length-3; i+=2) {
		  const lei = ds[i].rf.info()
			const led = ds[i].rf.defaults()
			const rei = ds[i+2].rf.info()
			const red = ds[i+2].rf.defaults()
			const spi = ds[i+1].rf.defaults()

		  if( !(led.R & red.L) ) { // if the defaults are not the same, go Hi
			  if( !(spi.R & bitmasks.fullHeight)) {
					ds.splice(i+1,1,{componentHandle: shallowRef(DividerFull), uid: crypto.randomUUID(), rf: ref(null)})
				}
			} else {
			  if( !(spi.R & led.R) ) {
					if( (spi.R & bitmasks.fullHeight) ) { 
						ds.splice(i+1,1,{componentHandle: shallowRef(DividerLow ), uid: crypto.randomUUID(), rf: ref(null)})
					} else {
						ds.splice(i+1,1,{componentHandle: shallowRef(DividerFull), uid: crypto.randomUUID(), rf: ref(null)})
					}
				}
			}
			console.log( ds[i].rf.info() )
		}
		return ds;
	}

  const removeComponent = (cuid) => {
		console.log( "removing " + cuid )
		// dynamicSegments.value = dynamicSegments.value.filter(item => item.uid !== cuid)
	  let ds = dynamicSegments.value
		if(ds.length===5) {
			ds.length=0
		} else {
			const i  = ds.findIndex(item => item.uid === cuid)
			if(i===2) {
			  ds.splice(i,2)
			} else {
			  ds.splice(i-1,2)
			}
		  ds=optimizeLinks(ds)
		}
	}

	const moveLeft = (cuid) => {
	  let ds = dynamicSegments.value
		const i  = ds.findIndex(item => item.uid === cuid)
		if (i>2) [ds[i-2], ds[i]] = [ds[i], ds[i-2]]
		ds=optimizeLinks(ds)
	}

	const moveRight = (cuid) => {
	  let ds = dynamicSegments.value
		const i  = ds.findIndex(item => item.uid === cuid)
		if (i<ds.length-3) [ds[i+2], ds[i]] = [ds[i], ds[i+2]]
		ds=optimizeLinks(ds)
	}

</script>

<template>
  
	<!--div>{{dynamicSegments}}</div-->

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
					       ctrl-panel-outlet-id="module-config-panel"/>
		</div>
		</div>
	</div>

	<div class="elevate padding margin surface-container-high" id="module-config-panel"/>

</template>

<style>
	@import 'https://cdn.jsdelivr.net/npm/beercss@3.7.10/dist/cdn/beer.min.css';

	div:empty {
		display: none;
	}
</style>
