import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', () => {
    const cart = ref({ total: 0, items: [] });

    const addTocart = (product) => {
        if (productExists(product.name)) {
            return
        }
        cart.value.items.push({
            name: product.name,
            price: product.price,
            quantity: 1,
            image: product.images[0],
        });
        cart.value.total += product.price;
    };

    const productExists = (product_name) => {
        return cart.value.items.find((item) => item.name === product_name);
    }

    const removeFromCart = (product_name) => {
        cart.value.items.forEach((item, index) => {
            if (productExists(product_name)) {
                cart.value.total -= (item.price * item.quantity);
                cart.value.items.splice(index, 1);
            }
        })
    };

    const changeCartQuantity = (product_name, quantity) => {
        cart.value.items.forEach((item) => {
            if (productExists(product_name)) {
                cart.value.total -= (item.price * item.quantity);
                item.quantity = quantity;

                cart.value.total += (item.price * item.quantity);
            }
        });
    };

    return {
        cart,
        addTocart,
        changeCartQuantity,
        removeFromCart,
    };
}, {
    persist: true
})
