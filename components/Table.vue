<template>
    <div class="App">
      <v-btn variant="elevated" color="primary" @click="handleClickOpen">Add Event</v-btn>
      <div style="height: 400px; width: 100%;" class="border mb-6 mt-4 mx-auto">
      <ag-grid-vue
        class="ag-theme-vuestic"
        style="width: 100%; height: 100%;"
        :defaultColDef="defaultColDef"
        :columnDefs="columnDefs"
        :rowData="tableData"
        :modules="modules"
      />
    </div>
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
                    v-model="formData.name"
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
                    v-model="formData.description"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <va-date-input
                    :rules="[(v) => !!v || 'Required']"
                    label="Start date*"
                    class="w-full rounded-t bg-gray-100 h-14 p-1"
                    v-model="formData.start_date"
                  />
                </v-col>
                <v-col cols="12" sm="6">
                  <va-date-input
                    :rules="[(v) => !!v || 'Required']"
                    label="End date*"
                    class="w-full rounded-t bg-gray-100 h-14 p-1"
                    v-model="formData.end_date"
                  />
                </v-col>
                <v-col cols="12" sm="6">
                  <v-select
                    :items="['Hockey', 'Basketball']"
                    label="Select Category*"
                    required
                    :rules="[(v) => !!v || 'Required']"
                    v-model="formData.category"
                  ></v-select>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-select
                    :items="['Sporthall1', 'Sporthall2']"
                    label="Select Place*"
                    required
                    :rules="[(v) => !!v || 'Required']"
                    v-model="formData.place"
                  ></v-select>
                </v-col>
                <v-col cols="12" sm="6">
                  <va-switch
                    v-model="formData.is_important"
                    true-label="Is Important:True"
                    false-label="Is Important:False"
                  />
                </v-col>
                <v-col cols="12" sm="6">
                  <va-switch
                    v-model="formData.is_public"
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
    </div>
  </template>
  
  <script>
  import { AgGridVue } from '@ag-grid-community/vue3'
  import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model'
  export default {
    components: {
      AgGridVue
    },
    data() {
      return {
        modules: [ClientSideRowModelModule],
        defaultColDef: {
          filter: true,
          floatingFilter: true,
          sortable: true,
          editable: true,
        },
        gridApi: null,
        tableData: null,
        open: false,
        formData: {
          name: '',
          description: '',
          start_date: new Date().toString().slice(0,10),
          end_date: new Date().toString().slice(0,10),
          category:'',
          place:'',
          is_important:false,
          is_public:false
        },
        url: 'http://localhost:3000/items',
        columnDefs: [
          { headerName: 'ID', field: 'id' },
          { headerName: 'Name', field: 'name' },
          { headerName: 'description', field: 'description' },
          { headerName: 'start date', field: 'start_date' },
          { headerName: 'end_date', field: 'end date' },
          { headerName: 'category', field: 'category date' },
          { headerName: 'place', field: 'place' },
          { headerName: 'is important', field: 'is_important' },
          { headerName: 'is public', field: 'is_public' },
          {
            headerName: 'Actions',
            field: 'id',
            cellRendererFramework: {
              template: `
                <div>
                  <v-btn variant="outlined" color="primary" @click="handleUpdate(params.data)">Update</v-btn>
                  <v-btn variant="outlined" color="red" @click="handleDelete(params.value)">Delete</v-btn>
                </div>
              `,
              methods: {
                handleUpdate(oldData) {
                  this.$emit('update', oldData);
                },
                handleDelete(id) {
                  const confirm = window.confirm('Are you sure, you want to delete this row', id);
                  if (confirm) {
                    fetch(`${this.url}/${id}`, { method: 'DELETE' })
                      .then(resp => resp.json())
                      .then(resp => this.getUsers());
                  }
                }
              }
            }
          }
        ]
      };
    },
    methods: {
      getUsers() {
        fetch(this.url)
          .then(resp => resp.json())
          .then(resp => {this.tableData = resp});

      },
      handleClickOpen() {
        this.open = true;
      },
      handleClose() {
        this.open = false;
        this.formData = {};
      },
      // onGridReady(params) {
      //   this.gridApi = params.api;
      // },
      handleFormSubmit() {
        if (this.formData.id) {
          // updating a user
          const confirm = window.confirm('Are you sure, you want to update this row ?');
          if (confirm) {
            fetch(`${this.url}/${this.formData.id}`, {
              method: 'PUT',
              body: JSON.stringify(this.formData),
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
        } else {
          // adding new user
          fetch(this.url, {
            method: 'POST',
            body: JSON.stringify(this.formData),
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
      },
    },
    created() {
      this.getUsers();
    },
  
  };
  </script>
  
  <style>
    @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');
  </style>