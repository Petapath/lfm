<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <main class="responsive max padding" style="background-color:chartreuse; width:100%;">

	<nav class="bottom center-align" style="background-color: chartreuse;">
	    <RouterLink to="/"><i>home</i>Home</RouterLink>
	    <RouterLink to="/about"><i>search</i>Search</RouterLink>
	    <RouterLink to="/prototype"><i>share</i>Prototype</RouterLink>
	</nav>

	<article class="max padding responsive no-border no-elevate" style="background-color:greenyellow;">
  		<RouterView />
	</article>
    </main>
</template>

<style>
  @import 'https://cdn.jsdelivr.net/npm/beercss@3.7.10/dist/cdn/beer.min.css';

  nav {
    width: 100%;
    font-size: 14px;
  }

  nav a {
    display: inline-block;
  }
  
  nav a:hover {
    background-color: inherit;
  }

  nav a i:hover {
    background-color: red;
  }

</style>
