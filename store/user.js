import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', () => {
    const cart = ref({ total: 0, items: [] });

    const addTocart = (product) => {
        cart.value.items.push({
            name: product.name,
            price: product.price,
            quantity: 1,
            image: product.images[0],
        });
        cart.value.total += product.price;
    };

    const incrementCart = (product_name, quantity) => {
        cart.value.items.forEach((item) => {        
            if (item.name === product_name) {
                cart.value.total -= (item.price * item.quantity);
                item.quantity += (quantity - item.quantity);
                
                cart.value.total += (item.price * item.quantity);
            }
        });
    };

    return {
        cart,
        addTocart,
        incrementCart,
    };
}, {
    persist: true
})
