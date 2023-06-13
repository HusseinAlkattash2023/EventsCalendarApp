<template>
    <div style="height: 400px; width: 100%;" class="border mb-6 mt-4 mx-auto">
      <ag-grid-vue
        class="ag-theme-vuestic"
        style="width: 100%; height: 100%;"
        :defaultColDef="defaultColDef"
        :columnDefs="columnDefs"
        :rowData="rowData"
        :modules="modules"
      />
    </div>
    <div>
  <v-row justify="center">
    <v-dialog  v-model="open" persistent width="1024">
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
</div>
  </template>
  
  <script>
  import { AgGridVue } from '@ag-grid-community/vue3'
  import ImageRenderer from "./ImageRenderer.vue"
  import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model'
  import ActionCellRenderer from "./ActionCellRenderer.vue"
  
  export default {
    components: { AgGridVue , ImageRenderer},
    data () {
      return {
        open:false,
        url: 'http://localhost:3000/items',
        items:{
        id:0,
        name: "",
        description: "",
        start_date: new Date().toISOString().split('T')[0],
        end_date: new Date().toISOString().split('T')[0],
        category: "",
        place: "",
        is_important:false,
        is_public:false,
        },

        modules: [ClientSideRowModelModule],
        defaultColDef: {
          filter: true,
          floatingFilter: true,
          sortable: true,
        },

        columnDefs: [
        { headerName: 'ID', field: 'id',maxWidth: 100,headerClass: ['field-border'],cellClass: ['cell']},
          { field: 'name', headerClass: ['field-border']},
          { field: 'description', headerClass: ['field-border'],cellClass: ['cell']},
          { field: 'start_date', headerClass: ['field-border']},
          { field: 'end_date', headerClass: ['field-border'],cellClass: ['cell']},
          { field: 'category', headerClass: ['field-border']},
          { field: 'place', headerClass: ['field-border'] ,cellClass: ['cell']},
          { field: 'is_important', headerClass: ['field-border']},
          { field: 'is_public', headerClass: ['field-border'],cellClass: ['cell']},
          {
            headerName: 'Actions',
            field: 'id',
            cellRendererFramework: ActionCellRenderer,
            width: 200,
            cellRendererParams: {
            onEditClicked: this.onEditClicked,
            onDeleteClicked: this.onDeleteClicked,
          },
          }
        ],
        rowData:null,
      }
    },
    methods:{
      onEditClicked(oldData) {
            this.items = oldData
            this.open = true
        },
      onDeleteClicked(id) {
                  const confirm = window.confirm('Are you sure, you want to delete this row', id);
                  if (confirm) {
                    fetch(`${this.url}/${id}`, { method: 'DELETE' })
                      .then(resp => resp.json())
                      .then(resp => this.getUsers());
                  }
      },
      handleClose() {
        this.open = false;
        this.items = {
        name: "",
        description: "",
        start_date: new Date().toISOString().split('T')[0],
        end_date: new Date().toISOString().split('T')[0],
        category: "",
        place: "",
        is_important:false,
        is_public:false,
        };
      },
      getUsers() {
        fetch(this.url)
          .then(resp => resp.json())
          .then(resp => {this.rowData = resp});
      },
      handleFormSubmit() {
        if (this.items.id) {
          // updating a user
          const confirm = window.confirm('Are you sure, you want to update this row ?');
          if (confirm) {
            fetch(`${this.url}/${this.items.id}`, {
              method: 'PUT',
              body: JSON.stringify(this.items),
              headers: {
                'content-type': 'application/json',
              },
            })
              .then(resp => resp.json())
              .then(resp => {
                this.handleClose();
                this.getUsers();
              });
          }
        } else{
          fetch(this.url, {
            method: 'POST',
            body: JSON.stringify(this.items),
            headers: {
              'content-type': 'application/json',
            },
          })
            .then(resp => resp.json())
            .then(resp => {
              this.handleClose();
              this.getUsers();
            })
      }
    }
    },
    created(){
      this.getUsers()
    },
  }
  </script>
  
  <style lang="scss">
  @import '@vuestic/ag-grid-theme';
  .ag-theme-vuestic{
    width:100%;
    --ag-row-border-width: 1px;
    --ag-row-border-color: rgb(192, 192, 192);
 
  }
  .ag-theme-vuestic .ag-header{
    font-size:20px;
  }
  .field-border{
    border: 1px solid rgb(192, 192, 192);
  }
  .cell{
    background-color:#ecf0f1;
  }
  </style>
  