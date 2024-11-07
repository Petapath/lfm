<script setup>
  import {bitmasks,types} from './bitmasks.js'
  
  const meta = {
									title      :   'Piekarnik',
									description:   'Piekarnik i szuflada',
									avatarImg  :   'url',
									compatibility: { L: bitmasks.fullHeight, R: bitmasks.fullHeight },
                  defaults:      { L: bitmasks.fullHeight, R: bitmasks.fullHeight }
							 }
</script>

<template>
  <slot :meta="meta"/>
</template>
