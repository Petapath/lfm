<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <main class="responsive max padding" style="background-color:whitesmoke; width:100%;">

	<header style="background-color:whitesmoke;">
	  <nav class="top" style="background-color:whitesmoke;">
	    <button class="circle transparent">
	      <i>arrow_back</i>
	    </button>
	    <h6 class="max"></h6>
	    <button class="circle transparent">
	      <i>attach_file</i>
	    </button>
	    <button class="circle transparent">
	      <i>today</i>
	    </button>
	    <button class="circle transparent">
	      <i>more_vert</i>
	    </button>
	  </nav>
	</header>

  	<RouterView />

    </main>

<nav class="bottom center-align" style="background-color: whitesmoke;">
    <RouterLink to="/"><i>home</i>Home</RouterLink>
    <RouterLink to="/about"><i>handyman</i>Search</RouterLink>
    <RouterLink to="/prototype"><i>architecture</i>Prototype</RouterLink>
</nav>


</template>

<style>
  @import 'https://cdn.jsdelivr.net/npm/beercss@3.7.10/dist/cdn/beer.min.css';

/*
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
*/

</style>
