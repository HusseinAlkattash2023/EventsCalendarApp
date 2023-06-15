<template>
    <div>
      <v-btn variant="elevated" prepend-icon="$edit"  color="green" @click="editClicked" class="mx-2">Edit</v-btn>
      <v-btn variant="elevated" prepend-icon="$delete" color="red" @click="deleteClicked">Delete</v-btn>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      editClicked() {
        this.params.onEditClicked(this.params.data);
      },
      deleteClicked() {
        this.params.onDeleteClicked(this.params.value);
      },
    },
  };
  </script>
  