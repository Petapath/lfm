<script setup>
	import { ref } from 'vue'
	import { useCounterStore } from '@/stores/counter'
	const counter = useCounterStore()
	const width = ref(50)
</script>

<template>
	<h5>C1</h5>
	<div>My width is {{width}}</div>
	<div>My count is {{counter.count}}</div>
	<button @click="width++">Increase width</button>
	<button @click="counter.increment()">Increase count</button>
</template>
