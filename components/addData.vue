<template>
  <v-row justify="center">
    <v-dialog v-model="items.dialog" persistent width="1024">
      <template v-slot:activator="{ props }">
        <v-btn color="primary" v-bind="props">
          {{ $t("add_event") }}
        </v-btn>
      </template>
      <form @submit.prevent="sendDataToParent">
      <v-card>
        <v-card-title class="border-b">
          <span class="text-h5">{{ $t("add_event") }}</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field
                v-model="items.name"
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
                  :rules="[(v) => !!v || 'Required']"
                  v-model="items.category"
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6">
                <v-select
                  :items="['Sporthall1', 'Sporthall2']"
                  label="Select Place*"
                  required
                  :rules="[(v) => !!v || 'Required']"
                  v-model="items.place"
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6">
                <va-switch
                  v-model="items.is_important"
                  true-label="Is Important:True"
                  false-label="Is Important:False"
                />
              </v-col>
              <v-col cols="12" sm="6">
                <va-switch
                  v-model="items.is_public"
                  true-label="Is Public:True"
                  false-label="Is Public:False"
                />
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red" prepend-icon="$close" variant="elevated" @click="items.dialog = false">
            Close
          </v-btn>
          <v-btn color="green" variant="elevated" type="submit">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </form>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data(){
    
    return{
      items:{
      dialog: false,
    is_important: false,
    is_public:false,
    name:'',
    description:'',
    start_date:new Date(),
    end_date: new Date(),
    category: '',
    place: '',
    }
    }
  },
  methods:{
  sendDataToParent() {
    if(this.items){
    this.$emit('custom-event', this.items);
    this.items.dialog = false
    }
    this.items = {}
  }
}
};
</script>
