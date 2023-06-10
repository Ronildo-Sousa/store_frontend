<script setup>
import {ref} from 'vue'
import { useUserStore } from '~/store/user';
const store = useUserStore();

</script>

<template>
    <SharedDefaultModal :modal_id="'cartmodal'">
        <template #header>
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
            Your shopping cart {{ store.cart.total }}
          </h3>
        </template>
        <template #body>
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead
                class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
              >
                <tr>
                  <th scope="col" class="px-6 py-3">
                    <span class="sr-only">Image</span>
                  </th>
                  <th scope="col" class="px-6 py-3">Product</th>
                  <th scope="col" class="px-6 py-3">Qty</th>
                  <th scope="col" class="px-6 py-3">Price</th>
                  <th scope="col" class="px-6 py-3">Action</th>
                </tr>
              </thead>
              <tbody>
                <ProductCartItem v-for="(product, idx) in store.cart.items" :key="idx" :product="product" />
              </tbody>
            </table>
          </div>
        </template>
        <template #footer>
          <button
            data-modal-hide="cartmodal"
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Checkout
          </button>
        </template>
      </SharedDefaultModal>
</template>