<template>
    <v-row justify="center">
      <v-dialog
        v-model="open"
        persistent
        width="auto"
      >
        <v-card class="h-48">
          <v-toolbar
              color="red"
              title="Delete this event"
            ></v-toolbar>
          <v-card-text>Are you sure to delete the event?.</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              variant="elevated"
              color="green"
              @click="closeModal"
            >
              No
            </v-btn>
            <v-btn
              variant="elevated"
              color="red"
              @click="agreeDelete"
            >
              Yes
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </template>

  <script>
  import { useModalStore } from '@/stores/modal';
  import { mapState, mapActions } from 'pinia'
    export default {
    props:['agreeDelete'],
    methods:{
      ...mapActions(useModalStore
      ,{
        closeModal: "closeModal",
        openModal: "openModal",
      }),
    },
    computed:{
    ...mapState(useModalStore,{
      open:"open",
    })
  }
    }
  </script>