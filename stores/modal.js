import { defineStore } from 'pinia';

export const useModalStore = defineStore('modal', {
    state: () => ({
        open: false,
        agree:false
    }),
    getters: {
    },
    actions:{
        closeModal(){
            this.open = false;
        },
        openModal(){
            this.open = true;
        },
        agreeDelete(){
            this.open = false;
            this.agree= true
        }
    }
})