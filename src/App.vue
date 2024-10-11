<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
    <main class="responsive max padding" style="background-color:chartreuse;">

	<nav class="bottom" style="background-color: chartreuse;">
	  <a>
	    <i>home</i>
	    <div><RouterLink to="/">Home</RouterLink></div>
	  </a>
	  <a>
	    <i>search</i>
	    <div><RouterLink to="/about">About</RouterLink></div>
	  </a>
	  <a>
	    <i>share</i>
	    <div><RouterLink to="/prototype">Prototype</RouterLink></div>
	  </a>
	</nav>

	<article class="large padding responsive no-border no-elevate" style="background-color:greenyellow;">
  		<RouterView />
	</article>
    </main>
</template>

<style>
	@import 'https://cdn.jsdelivr.net/npm/beercss@3.7.10/dist/cdn/beer.min.css';
</style>
