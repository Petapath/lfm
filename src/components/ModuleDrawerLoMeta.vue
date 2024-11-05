<script setup>
  import {bitmasks,types} from './bitmasks.js'
  
  const meta = {
									title      :   'Szuflady',
									description:   'Szuflady',
									avatarImg  :   'url',
									compatibility: { L: bitmasks.fullHeight | bitmasks.halfHeight, R: bitmasks.fullHeight | bitmasks.halfHeight },
                  defaults:      { L: bitmasks.halfHeight, R: bitmasks.halfHeight }
							 }
</script>

<template>
  <slot :meta="meta"/>
</template>
