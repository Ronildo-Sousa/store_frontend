import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useToastStore = defineStore('toast', () => {
    const list = ref([]);

    const removeToast = (toast) => {
        list.value.forEach((item, index) => {
            if (item.id === toast.id) {
                list.value.splice(index, 1);
            }
        });
    };

    const addToast = (message, type) => {
        list.value.push({
            id: list.value.length + 1,
            message,
            type,
        })
    }

    return {
        list,
        removeToast,
        addToast,
    };
});