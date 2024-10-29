<script setup>
	import Element  from './Element.vue'
	import Element2 from './Element2.vue'

  const emit = defineEmits(['addComponent'])

	const segments = [
		{
		  title: 'Szuflady',
			description: 'Szuflady',
			avatarImg: 'url',
			configOptions: 'default',
			componentHandle: Element
		},
		{
		  title: 'Zlew',
			description: 'Zlew',
			avatarImg: 'url',
			configOptions: 'default',
			componentHandle: Element2
		}
	]
</script>

<template>
	<h4>This is the component selector</h4>
	<div class="row scroll">
		<article class="small-width border" v-for="(v, index) in segments" :key="index">
			<h5>{{v.title}}</h5>
			<p>{{v.description}}</p>
			<div class="space"></div>
			<nav>
				<button @click="emit('addComponent',v.componentHandle)">Button</button>
			</nav>
		</article>
	</div>
</template>

<style>
	@import 'https://cdn.jsdelivr.net/npm/beercss@3.7.10/dist/cdn/beer.min.css';
</style>
