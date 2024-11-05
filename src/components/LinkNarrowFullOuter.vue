<script setup>

	const doSomething = () => {
		console.log('I am ModuleDrawerLo')
	}

	defineExpose({
		doSomething
	})
 
</script>

<template>

  <!-- zlew with a single drawer / store -->
	<article class="no-elevate no-round no-padding">
    <span>
		<svg width="18" height="220" version="1.1"  xmlns="http://www.w3.org/2000/svg">

			<!-- horizontal bars -->
			<path stroke="#000000" stroke-width="3px" stroke-linecap="round" stroke-linejoin="round" fill="transparent" d="M0, 8 h18"></path>
			<path stroke="#000000" stroke-width="3px" stroke-linecap="round" stroke-linejoin="round" fill="transparent" d="M0,18 h18"></path>

			<!-- leg -->
			<rect class="svg-rect" x="2"   y="18" width="14" height="200" stroke="#000000" stroke-width="3px" stroke-linecap="square" stroke-linejoin="round" fill="transparent"/>

		</svg>
    </span>

  </article>

</template>
