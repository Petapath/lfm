<script setup>
import c1 from '../components/c1.vue'
import c2 from '../components/c2.vue'
import OuterLeftLeg from '../components/OuterLegLeft.vue'
import Display from '../components/Display.vue'

const comps = [ { k:'c1',   v:c1 },
		{ k:'c2',   v:c2 },
		{ k:'c11',  v:c1 },
		{ k:'c111', v:c1 }];

comps.push( {k:'c222', v:c2}, {k:'c2222', v:c2} );
const kees = comps.map(({k}) => ({k}));

</script>

<template>
  <main class="responsive max padding" style="background-color:chartreuse;">
   <div v-for="(c,i) in comps">
	   <h4>{{i}} {{c.k}}</h4>
	   <component :is="c.v"></component>
	   <br>
	   <hr>
	   <br>
   </div>
   <pre>
     {{kees}}
   </pre>


   <article class="large padding responsive ">
     <div class="row no-space top-align scroll">
		<OuterLeftLeg width="35"/>
	 </div>
   </article>

	 <article class="large padding " style="height:100%">
	 	<Display />
	 </article>
  </main>
</template>
