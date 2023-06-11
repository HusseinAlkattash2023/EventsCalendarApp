<template>
    <div class="image-renderer">
      <img :src="params.value" alt="Image">
    </div>
  </template>
  
  <script>
export default {
  props: ['params']
}
  </script>
  
  <style scoped>
  </style>
  