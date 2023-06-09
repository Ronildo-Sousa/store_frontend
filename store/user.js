import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', () => {
    const cart = ref({ total: 0, items: [] });

    const addTocart = (product, quantity = 1) => {
        if (productExists(product.name)) {
            return {message: 'Product already added', type: 'error'};
        }
        cart.value.items.push({
            name: product.name,
            price: product.price,
            quantity: quantity,
            image: product.images[0],
        });
        cart.value.total += product.price;

        return {message: 'Product added to cart', type: 'success'}
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
