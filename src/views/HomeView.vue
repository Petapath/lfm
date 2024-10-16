<script setup>
import c1 from '../components/c1.vue'
import c2 from '../components/c2.vue'

const comps = [ { k:'c1',   v:c1 },
		{ k:'c2',   v:c2 },
		{ k:'c11',  v:c1 },
		{ k:'c111', v:c1 }];

comps.push( {k:'c222', v:c2}, {k:'c2222', v:c2} );
const kees = comps.map(({k}) => ({k}));

</script>

<template>
  <main>
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
  </main>
</template>
