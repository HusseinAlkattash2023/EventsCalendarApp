<template>
    <main class="h-screen  text-center mt-28">
      <h1>{{ $t("about") }}</h1>
    </main>
    <va-button @click="showModal = true">
    Show modal
  </va-button>

  <va-modal
    v-model="showModal"
     
    blur
  />
  </template>

<script>

export default {
  data() {
    return {
      showModal: false
    };
  },
};
</script>
<style scoped>

</style>