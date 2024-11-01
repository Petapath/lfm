<script setup>
  import { ref }       from 'vue'
	import DrawerLo      from './ModuleDrawerLo.vue'
	import DrawerLoMeta  from './ModuleDrawerLoMeta.vue'
	import SinkSmall     from './ModuleSinkSmall.vue'
	import SinkSmallMeta from './ModuleSinkSmallMeta.vue'

  const emit = defineEmits(['addComponent'])

	const segments = [
		{
			componentHandle: DrawerLo,
      meta           : DrawerLoMeta
		},
		{
			componentHandle: SinkSmall,
		  meta           : SinkSmallMeta
		}
	]

	const hnd = ref(null);
  
</script>

<template>
	<div class="row scroll">
		<article class="small-width border" v-for="(s, index) in segments" :key="index">
			<component :is="s.meta" v-slot="{meta}">
			<h5>{{meta.title}}</h5>
			<p>{{meta.description}}</p>
			<div class="space"></div>
			<nav>
				<button class="circle right-round bottom-round small" @click="emit('addComponent',s.componentHandle)">
           <i>add</i>
        </button>
			</nav>
		  </component>
		</article>
	</div>
</template>

<style>
	@import 'https://cdn.jsdelivr.net/npm/beercss@3.7.10/dist/cdn/beer.min.css';
</style>
