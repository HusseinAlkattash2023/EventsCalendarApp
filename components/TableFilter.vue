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
    <addData @custom-event="handleCustomEvent"/>
  </template>
  
  <script>
  import { AgGridVue } from '@ag-grid-community/vue3'
  import ImageRenderer from "./ImageRenderer.vue"
  import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model'
  
  export default {
    components: { AgGridVue , ImageRenderer},
    data () {
      return {
        url: 'http://localhost:3000/items',
        modules: [ClientSideRowModelModule],
        defaultColDef: {
          filter: true,
          floatingFilter: true,
          sortable: true,
          editable: true,
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
        ],
        rowData:null,
      }
    },
    created(){
        fetch(this.url)
          .then(resp => resp.json())
          .then(resp => {this.rowData = resp});
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
  