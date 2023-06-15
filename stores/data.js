import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', {
    // a function that returns a fresh state
    state: () => ({
    open: false,
    url: 'http://localhost:3000/items',
    rowData:null,
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
    }),
    // optional getters
    getters: {
    },
    // optional actions
    actions: {
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
        getEvents() {
            fetch(this.url)
                .then(resp => resp.json())
                .then(resp => {this.rowData = resp});
        },
        onEditClicked(oldData) {
            this.items = oldData
            this.open = true
        },
        IsOpen(){
            this.open = true
        },
        onDeleteClicked(id) {
            const confirm = window.confirm('Are you sure, you want to delete this row', id);
            if (confirm) {
            fetch(`${this.url}/${id}`, { method: 'DELETE' })
                .then(resp => resp.json())
                .then(resp => this.getEvents());
        }
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
                this.getEvents();
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
              this.getEvents();
            })
      }
    }
    },
})