<template>
    <v-row justify="center">
      <v-dialog v-model="open" persistent width="1024">
        <template v-slot:activator="{ props }">
          <v-btn class="w-1/2" color="primary" v-bind="props">
            {{ $t("add_event") }}
          </v-btn>
        </template>
        <form @submit.prevent="handleFormSubmit">
        <v-card>
          <v-card-title class="border-b">
            <span class="text-h5">{{ $t("add_event") }}</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="data.name"
                    label="Enter name*"
                    required
                    :rules="[(v) => !!v || 'Required']"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    label="Enter description*"
                    required
                    :rules="[(v) => !!v || 'Required']"
                    v-model="data.description"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <va-date-input
                    :rules="[(v) => !!v || 'Required']"
                    label="Start date*"
                    class="w-full rounded-t bg-gray-100 h-14 p-1"
                    v-model="data.start_date"
                  />
                </v-col>
                <v-col cols="12" sm="6">
                  <va-date-input
                    :rules="[(v) => !!v || 'Required']"
                    label="End date*"
                    class="w-full rounded-t bg-gray-100 h-14 p-1"
                    v-model="data.end_date"
                  />
                </v-col>
                <v-col cols="12" sm="6">
                  <v-select
                    :items="['Hockey', 'Basketball']"
                    label="Select Category*"
                    required
                    :rules="[(v) => !!v || 'Required']"
                    v-model="data.category"
                  ></v-select>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-select
                    :items="['Sporthall1', 'Sporthall2']"
                    label="Select Place*"
                    required
                    :rules="[(v) => !!v || 'Required']"
                    v-model="data.place"
                  ></v-select>
                </v-col>
                <v-col cols="12" sm="6">
                  <va-switch
                    v-model="data.is_important"
                    true-label="Is Important:True"
                    false-label="Is Important:False"
                  />
                </v-col>
                <v-col cols="12" sm="6">
                  <va-switch
                    v-model="data.is_public"
                    true-label="Is Public:True"
                    false-label="Is Public:False"
                  />
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="red" prepend-icon="$close" variant="elevated" @click="handleClose">
              Close
            </v-btn>
            <v-btn color="green" variant="elevated" type="submit">
              {{ id ? 'Update' : 'Submit' }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </form>
      </v-dialog>
    </v-row>
  </template>
  
  <script>
  export default {
    props:{
        open:false,
        handleClose:{
            type:Function
        },
        data: Object,
        handleFormSubmit:{
            type:Function
        }
    }
  };
  </script>