import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    state: () => {
        return {
            user: null,
            cart: {
                total: 0,
                items: [
                    {
                        name: 'teste', 
                        slug: 'teste',
                        price: 10,
                        quantity: 2
                    },
                    {
                        name: 'teste2', 
                        slug: 'teste2',
                        price: 20,
                        quantity: 5
                    },
                    {
                        name: 'teste3', 
                        slug: 'teste3',
                        price: 30,
                        quantity: 1
                    },
                ]
            }
        } 
    },
    actions: {
        incrementCartTotal(value) {
            this.cart.total += value
        }, 
    },
})
