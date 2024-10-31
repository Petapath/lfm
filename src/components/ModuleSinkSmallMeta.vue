<script setup>
  
  const meta = {
									title      : 'Zlew',
									description: 'Maly zlew',
									avatarImg  : 'url'
							 }
</script>

<template>
  <slot :meta="meta"/>
</template>
