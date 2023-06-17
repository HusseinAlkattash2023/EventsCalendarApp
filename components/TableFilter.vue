<template>
    <addData/>
    <div style="height: 60vh; width: 100%;" class="border mb-6 mt-12 mx-auto">
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
        { headerName: 'ID', field: 'id',width: "100%",headerClass: 'field-border',cellClass: ['cell'] , cellStyle: { borderRight: "2px solid rgb(192, 192, 192)"}},
          { headerName:this.$t('name'),width: "120%", field: 'name', headerClass: ['field-border'],cellStyle: { borderRight: "2px solid rgb(192, 192, 192)" }},
          { headerName:this.$t('description'),width: "150%", field: 'description', headerClass: ['field-border'],cellClass: ['cell'],cellStyle: { borderRight: "2px solid rgb(192, 192, 192)" }},
          { headerName: 'start date', field: 'start_date',width: "130%", headerClass: ['field-border'],cellStyle: { borderRight: "2px solid rgb(192, 192, 192)"}},
          { headerName: 'end date', field: 'end_date',width: "130%", headerClass: ['field-border'],cellClass: ['cell'],cellStyle: { borderRight: "2px solid rgb(192, 192, 192)"}},
          { headerName: 'category', field: 'category',width: "130%", headerClass: ['field-border'],cellStyle: { borderRight: "2px solid rgb(192, 192, 192)"}},
          { headerName: 'place', field: 'place',width: "130%", headerClass: ['field-border'] ,cellClass: ['cell'],cellStyle: { borderRight: "2px solid rgb(192, 192, 192)"}},
          { headerName: 'is important' , field: 'is_important',width: "130%", headerClass: ['field-border'],cellStyle: { borderRight: "2px solid rgb(192, 192, 192)"}},
          { headerName: 'is public', field: 'is_public',width: "130%", headerClass: ['field-border'],cellClass: ['cell'],cellStyle: { borderRight: "2px solid rgb(192, 192, 192)"}},
          {
            headerName: 'Actions',
            field: 'id',
            cellRendererFramework: ActionCellRenderer,
            width:"250%",
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
          getEvents:"getEvents",
          IsOpen:"IsOpen"
        }),
    },
    created(){
      this.getEvents();
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
    width:1000px;
    --ag-row-border-width: 1px;
    --ag-row-border-color: rgb(192, 192, 192);


 
  }
  .field-border {
    border: 1px solid white;
    margin:auto;
    background-color:#dc2626;
    color:white;
  }
  .field-border:hover{
    background-color: #dc2626 !important;
    cursor: default !important;
  }
  .field-border .ag-header-cell-label {
  font-size: 16px;
  display:flex;
  justify-content: center;
  // text-align:center;
  // display: grid;
  // place-items: center;
}
  .cell{
    background-color:#ecf0f1;
  }
  </style>
  