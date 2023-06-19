<template>
  <v-row justify="center">
    <v-dialog  v-model="open" persistent width="1024">
      <template v-slot:activator="{ }">
        <v-btn class="w-80 mt-8 btn" size="large"  height="44" prepend-icon="$plus" color="blue" @click="IsOpen">
          {{ $t("add_event") }}
        </v-btn>
      </template>
      <form ref="form" @submit.prevent="handleFormSubmit">
      <v-card class="add_data">
        <v-card-title class="border-b">
          <span class="text-h5">{{ items.id ? $t("update_events") : $t("add_event")}}</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field
                v-model="items.name"
                  label="Enter Name*"
                  :rules="[(v) => !!v || 'Required']"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  label="Enter description*"
                  required
                  :rules="[(v) => !!v || 'Required']"
                  v-model="items.description"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <va-date-input
                  :rules="[(v) => !!v || 'Required']"
                  label="Start date*"
                  class="w-full rounded-t bg-gray-100 h-14 p-1"
                  v-model="items.start_date"
                />
              </v-col>
              <v-col cols="12" sm="6">
                <va-date-input
                  :rules="[(v) => !!v || 'Required']"
                  label="End date*"
                  class="w-full rounded-t bg-gray-100 h-14 p-1"
                  v-model="items.end_date"
                />
              </v-col>
              <v-col cols="12" sm="6">
                <v-select
                  :items="['Hockey', 'Basketball']"
                  label="Select Category*"
                  required
                  :rules="[requiredRule]"
                  v-model="items.category"
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6">
                <v-select
                  :items="['Sporthall1', 'Sporthall2']"
                  label="Select Place*"
                  v-model="items.place"
                  :rules="[requiredRule]"
                  required
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6">
                <va-switch
                  v-model="items.is_important"
                  true-label="Is Important:True"
                  false-label="Is Important:False"
                  required
                />
              </v-col>
              <v-col cols="12" sm="6">
                <va-switch
                  v-model="items.is_public"
                  true-label="Is Public:True"
                  false-label="Is Public:False"
                  required
                />
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions class="border-t-2">
          <v-spacer></v-spacer>
          <v-btn color="red" prepend-icon="$close" variant="elevated" @click="handleClose">
            Close
          </v-btn>
          <v-btn color="green" variant="elevated" type="submit">
            {{ items.id ? 'Update' : 'Submit' }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </form>
    </v-dialog>
  </v-row>
</template>

<script>
import { useMainStore } from '@/stores/data';
import { mapState, mapActions } from 'pinia'

export default {
  data () {
    return {
    }
  },
  methods:{
    ...mapActions(useMainStore
      ,{
        handleClose:"handleClose",
        onEditClicked:"onEditClicked",
        onDeleteClicked:"onDeleteClicked",
        getEvents:"getEvents",
        handleFormSubmit:"handleFormSubmit",
        IsOpen:"IsOpen"
      }),
    requiredRule(value) {
      return !!value || 'This field is required';
    },
  },
  created(){
    this.getEvents();
  },
  computed:{
    ...mapState(useMainStore,{
      open:"open",
      url:"url",
      items:"items",
      rowData:"rowData"
    })
  }
}
</script>

<style scoped>
.add_data{
  height:480px;
  overflow-y:auto;
}
.btn{
  font-weight:bold;
  position:absolute;
  right:20px;
}
</style>