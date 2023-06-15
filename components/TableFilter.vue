<template>
    <addData/>
    <div style="height: 400px; width: 100%;" class="border mb-6 mt-12 mx-auto">
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
  import ActionCellRenderer from "./ActionCellRenderer.vue";
  import { useMainStore } from '@/stores/data';
  import { mapState, mapActions } from 'pinia'
  
  export default {
    components: { AgGridVue},
    data () {
      return {
        modules: [ClientSideRowModelModule],
        defaultColDef: {
          filter: true,
          floatingFilter: true,
          sortable: true,
        },

        columnDefs: [
        { headerName: 'ID', field: 'id',maxWidth: 100,headerClass: ['field-border'],cellClass: ['cell']},
          { headerName:this.$t('name'), field: 'name', headerClass: ['field-border']},
          { headerName:this.$t('description'), field: 'description', headerClass: ['field-border'],cellClass: ['cell']},
          { headerName: 'start date', field: 'start_date', headerClass: ['field-border']},
          { headerName: 'end date', field: 'end_date', headerClass: ['field-border'],cellClass: ['cell']},
          { headerName: 'category', field: 'category', headerClass: ['field-border']},
          { headerName: 'place', field: 'place', headerClass: ['field-border'] ,cellClass: ['cell']},
          { headerName: 'is important' , field: 'is_important', headerClass: ['field-border']},
          { headerName: 'is public', field: 'is_public', headerClass: ['field-border'],cellClass: ['cell']},
          {
            headerName: 'Actions',
            field: 'id',
            cellRendererFramework: ActionCellRenderer,
            width: 250,
            cellRendererParams: {
            onEditClicked: this.onEditClicked,
            onDeleteClicked: this.onDeleteClicked,
          },
          headerClass: ['field-border']
          }
        ],
      }
    },
    methods:{
      ...mapActions(useMainStore
        ,{
          onEditClicked:"onEditClicked",
          onDeleteClicked:"onDeleteClicked",
          getUsers:"getUsers",
          IsOpen:"IsOpen"
        }),
    },
    created(){
      this.getUsers();
    },
    computed:{
      ...mapState(useMainStore,{
        rowData:"rowData"
      })
    }
  }
  </script>
  
  <style lang="scss">
  @import '@vuestic/ag-grid-theme';
  .ag-theme-vuestic{
    width:100%;
    --ag-row-border-width: 1px;
    --ag-row-border-color: rgb(192, 192, 192);
 
  }
  .field-border {
    border: 1px solid rgb(192, 192, 192);
    margin:auto;
  }
  .ag-header-cell {
  font-size: 36px;
}
  .cell{
    background-color:#ecf0f1;
  }
  </style>
  