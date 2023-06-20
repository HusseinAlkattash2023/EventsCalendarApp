<template>
    <div>
      <v-btn variant="elevated" prepend-icon="$edit"  color="green" @click="editClicked" class="mx-2">Edit</v-btn>
      <v-btn variant="elevated" prepend-icon="$delete" color="red" @click="openModal()">Delete</v-btn>
      <Modal :agreeDelete="deleteClicked"/>
    </div>
  </template>
  
  <script>
  import { useModalStore } from '@/stores/modal';
  import { mapState, mapActions } from 'pinia'
  export default {
    methods: {
      ...mapActions(useModalStore
      ,{
        openModal: "openModal",
        closeModal: "closeModal",
      }),
      editClicked() {
        this.params.onEditClicked(this.params.data);
      },
      deleteClicked() {
        this.closeModal();
        this.params.onDeleteClicked(this.params.value);
      },
    },
    computed:{
    ...mapState(useModalStore,{
      open:"open",
      agree:'agree'
    })
  }
  };
  </script>
  