import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', () => {
    const cart = ref({ total: 0, items: [] });

    return {
        cart
    };
}, {
    persist: true
})
