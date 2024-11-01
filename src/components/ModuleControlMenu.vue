<script setup>
  const emit  = defineEmits(['moveLeft','moveRight','remove'])
</script> 

<template> 

    <nav class="no-space middle-align">
      <button class="circle transparent" style="height:20px;width:20px;" @click="emit('moveLeft')" ><i class="tiny">line_start_arrow</i><div class="tooltip top">Move to left</div></button>
      <button class="circle transparent" style="height:20px;width:20px;" @click="emit('remove')"   ><i class="tiny">clear</i><div class="tooltip top">Remove</div></button>
			<button class="circle transparent" style="height:20px;width:20px;" @click="emit('moveRight')"><i class="tiny">line_end_arrow</i><div class="tooltip top">Move to right</div></button>
    </nav>

</template>
