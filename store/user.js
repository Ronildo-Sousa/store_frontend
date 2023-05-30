import { defineStore } from 'pinia'

export const useuUserStore = defineStore('user', {
    state: () => {
        if (process.client) {
            if (localStorage.getItem("user"))
                return { 
                    user: JSON.parse(localStorage.getItem("user"))
                };
            return {
                user: null,
            };
        }    
    },
    actions: {
    },
})
