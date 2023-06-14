<script setup>
import { ref } from "vue";
import { useUserStore } from "~/store/user";
const store = useUserStore();
</script>

<template>
  <SharedDefaultModal :modal_id="'cartmodal'">
    <template #header>
      <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
        Your shopping cart
      </h3>
    </template>
    <template #body>
      <div
        v-if="store.cart.items.length > 0"
        class="relative overflow-x-auto shadow-md sm:rounded-lg"
      >
        <div
          class="w-full max-h-full overflow-hidden text-sm text-left text-gray-500 dark:text-gray-400"
        >
          <div
            class="flex justify-between text-xs font-semibold text-gray-700 uppercase bg-gray-50 dark:bg-gray-800 dark:text-gray-400"
          >
            <div class="py-3">
              <span class="sr-only">Image</span>
            </div>
            <div>Product</div>
            <div>Qty</div>
            <div>Price</div>
            <div class="pr-3">Action</div>
          </div>
          <div>
            <ProductCartItem
              v-for="(product, idx) in store.cart.items"
              :key="product.name + idx"
              :product="product"
            />
          </div>
        </div>
      </div>
      <div
        v-else
        class="p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300"
        role="alert"
      >
        <span class="font-medium">Your cart is empty !</span>
      </div>
    </template>
    <template v-if="store.cart.items.length > 0" #footer>
      <div class="flex justify-between w-full">
        <button
          data-modal-hide="cartmodal"
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Checkout
        </button>
        <p class="mr-5 text-lg font-semibold dark:text-white">
          Subtotal: ${{ store.cart.total }}
        </p>
      </div>
    </template>
  </SharedDefaultModal>
</template>
