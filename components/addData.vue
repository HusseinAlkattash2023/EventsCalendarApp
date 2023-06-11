<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent width="1024">
      <template v-slot:activator="{ props }">
        <v-btn color="primary" v-bind="props">
          {{ $t("add_event") }}
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="border-b">
          <span class="text-h5">{{ $t("add_event") }}</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field
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
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <va-date-input
                  :rules="[(v) => !!v || 'Required']"
                  label="From*"
                  class="w-full rounded-t bg-gray-100 h-14 p-1"
                />
              </v-col>
              <v-col cols="12" sm="6">
                <va-date-input
                  :rules="[(v) => !!v || 'Required']"
                  label="Until*"
                  class="w-full rounded-t bg-gray-100 h-14 p-1"
                />
              </v-col>
              <v-col cols="12" sm="6">
                <v-select
                  :items="['Hockey', 'Basketball']"
                  label="Select Category*"
                  required
                  :rules="[(v) => !!v || 'Required']"
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6">
                <v-select
                  :items="['Sporthall1', 'Sporthall2']"
                  label="Select Place*"
                  required
                  :rules="[(v) => !!v || 'Required']"
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6">
                <p>Is Important:</p>
                <va-switch
                  v-model="is_important"
                  true-label="True"
                  false-label="False"
                />
              </v-col>
              <v-col cols="12" sm="6">
                <p>Is Public</p>
                <va-switch
                  v-model="is_public"
                  true-label="True"
                  false-label="False"
                />
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
            Close
          </v-btn>
          <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
export default {
  data: () => ({
    dialog: false,
    is_important: true,
    is_public:false
  }),
};
</script>
