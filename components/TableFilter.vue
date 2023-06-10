<template>
    <div style="height: 400px; width: 96%;" class="border mt-4 mx-auto">
      <ag-grid-vue
        class="ag-theme-vuestic"
        style="width: 100%; height: 100%;"
        :defaultColDef="defaultColDef"
        :columnDefs="columnDefs"
        :rowData="rowData"
        :modules="modules"
      />
    </div>
  </template>
  
  <script>
  import { AgGridVue } from '@ag-grid-community/vue3'
  import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model'
  
  export default {
    components: { AgGridVue },
    data () {
        const items = [
      {
        name: "Leanne Graham",
        description: "Bret",
        start_date: new Date().toISOString().slice(0, 10),
        end_date: new Date().toISOString().slice(0, 10),
        category: "Hockey",
        place: "Sporthall1",
        is_important:true,
        is_public:false
      },
      {
        name: "Ervin Howell",
        description: "Antonette",
        start_date: new Date().toISOString().slice(0, 10),
        end_date: new Date().toISOString().slice(0, 10),
        category: "Hockey",
        place: "Sporthall1",
        is_important:true,
        is_public:false
      },
      {
        name: "Ervin Howell",
        description: "Antonette",
        start_date: new Date().toISOString().slice(0, 10),
        end_date: new Date().toISOString().slice(0, 10),
        category: "Hockey",
        place: "Sporthall1",
        is_important:true,
        is_public:false
      },
      {
        name: "Ervin Howell",
        description: "Antonette",
        start_date: new Date().toISOString().slice(0, 10),
        end_date: new Date().toISOString().slice(0, 10),
        category: "Hockey",
        place: "Sporthall1",
        is_important:true,
        is_public:false
      },
      {
        name: "Ervin Howell",
        description: "Antonette",
        start_date: new Date().toISOString().slice(0, 10),
        end_date: new Date().toISOString().slice(0, 10),
        category: "Hockey",
        place: "Sporthall1",
        is_important:true,
        is_public:false
      },
      {
        name: "Ervin Howell",
        description: "Antonette",
        start_date: new Date().toISOString().slice(0, 10),
        end_date: new Date().toISOString().slice(0, 10),
        category: "Hockey",
        place: "Sporthall1",
        is_important:true,
        is_public:false
      },
    ];
      return {
        modules: [ClientSideRowModelModule],
        rowData: items,
        defaultColDef: {
          filter: true,
          floatingFilter: true,
          sortable: true,
        },
        columnDefs: [
          { field: 'name' },
          { field: 'description' },
          { field: 'start_date' },
          { field: 'end_date' },
          { field: 'category' },
          { field: 'place' },
          { field: 'is_important' },
          { field: 'is_public' },
        ],
      }
      
    },
  }
  </script>
  
  <style lang="scss">
  @import '@vuestic/ag-grid-theme';
  </style>
  