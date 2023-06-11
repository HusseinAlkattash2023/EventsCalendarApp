<template>
    <div style="height: 400px; width: 100%;" class="border mb-6 mt-4 mx-auto">
      <ag-grid-vue
        class="ag-theme-vuestic"
        style="width: 100%; height: 100%;"
        :defaultColDef="defaultColDef"
        :columnDefs="columnDefs"
        :rowData="rowData"
        :modules="modules"
        :frameworkComponents="frameworkComponents"
      />
    </div>
    <addData/>
  </template>
  
  <script>
  import { AgGridVue } from '@ag-grid-community/vue3'
  import ImageRenderer from "./ImageRenderer.vue"
  import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model'
  
  export default {
    components: { AgGridVue , ImageRenderer},
    data () {
      return {
        modules: [ClientSideRowModelModule],
        defaultColDef: {
          filter: true,
          floatingFilter: true,
          sortable: true,
          editable: true,
        },
        gridApi: null,
        columnDefs: [
          { field: 'image' , cellRendererFramework: ImageRenderer, headerClass: ['field-border'] },
          { field: 'name', headerClass: ['field-border'] , maxWidth: 150},
          { field: 'description', headerClass: ['field-border'] ,maxWidth: 150,cellClass: ['cell']},
          { field: 'start_date', headerClass: ['field-border'] ,maxWidth: 150,},
          { field: 'end_date', headerClass: ['field-border'] ,maxWidth: 150,cellClass: ['cell']},
          { field: 'category', headerClass: ['field-border'] ,maxWidth: 150,},
          { field: 'place', headerClass: ['field-border'] ,maxWidth: 150,cellClass: ['cell']},
          { field: 'is_important', headerClass: ['field-border'] ,maxWidth: 120,},
          { field: 'is_public', headerClass: ['field-border'] ,maxWidth: 120,cellClass: ['cell']},
        ],
        rowData: [
      {
        image:"https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=944&q=80",
        name: "Leanne Graham",
        description: "Bret",
        start_date: new Date().toISOString().slice(0, 10),
        end_date: new Date().toISOString().slice(0, 10),
        category: "Hockey",
        place: "Sporthall1",
        is_important:true,
        is_public:false,
      },
      {
        image:"https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=944&q=80",
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
        image:"https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=944&q=80",
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
        image:"https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=944&q=80",
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
        image:"https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=944&q=80",
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
        image:"https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=944&q=80",
        name: "Ervin Howell",
        description: "Antonette",
        start_date: new Date().toISOString().slice(0, 10),
        end_date: new Date().toISOString().slice(0, 10),
        category: "Hockey",
        place: "Sporthall1",
        is_important:true,
        is_public:false
      },
    ],
    frameworkComponents: {
        ImageRenderer,
      },
      }
    },
  }
  </script>
  
  <style lang="scss">
  @import '@vuestic/ag-grid-theme';
  .ag-theme-vuestic{
 
    --ag-row-border-width: 1px;
    --ag-row-border-color: rgb(192, 192, 192);
 
  }
  .field-border{
    border: 1px solid rgb(192, 192, 192);
  }
  .cell{
    background-color:#ecf0f1;
  }
  </style>
  