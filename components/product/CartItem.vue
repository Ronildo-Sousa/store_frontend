<script setup>
import { ref, watch } from "vue";
import { Modal } from "flowbite";
import { useUserStore } from "~/store/user";
import { useToastStore } from "~/store/toast";
const store = useUserStore();
const toastStore = useToastStore();

const props = defineProps(["product"]);

const quantity = ref(props.product.quantity);

watch(quantity, (newValue) => {
  if (newValue > 0) {
    store.changeCartQuantity(props.product.name, newValue);
  }
});

const incrementQuantity = () => {
  quantity.value++;
  store.changeCartQuantity(props.product.name, quantity.value);
};

const decrementQuantity = () => {
  if (quantity.value > 1) {
    quantity.value--;
    store.changeCartQuantity(props.product.name, quantity.value);
  }
};

const remove = () => {
  console.log(props.product)
  // store.removeFromCart(props.product.name);
  // new Modal(document.getElementById("removeFromCart")).hide();
}
</script>

<template>
  <div
    class="flex items-center bg-white border-b-4 cursor-pointer dark:bg-gray-700 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600"
  >
    <div class="w-32 p-4">
      <img src="/_nuxt/assets/images/apple-watch.png" alt="Apple Watch" />
    </div>
    <div class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
      {{ product.name }}
    </div>
    <div class="px-6 py-4">
      <div class="flex items-center space-x-3">
        <button
          @click="decrementQuantity"
          class="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          type="button"
        >
          <span class="sr-only">Quantity button</span>
          <svg
            class="w-4 h-4"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div>
          <input
            v-model="quantity"
            type="number"
            class="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            min="1"
          />
        </div>
        <button
          @click="incrementQuantity"
          class="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          type="button"
        >
          <span class="sr-only">Quantity button</span>
          <svg
            class="w-4 h-4"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </div>
    <div class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
      ${{ product.price }}
    </div>
    <div class="px-6 py-4">
      <SharedPopUpModal :modal_id="'removeFromCart-'+ product.name">
        <template #content>
          <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            Are you sure you want to remove this product?
          </h3>
        </template>
        <template #actions>
          <button
              @click="remove()"
                type="button"
                class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
              >
                Yes, I'm sure
              </button>
              <button
                :data-modal-hide="'removeFromCart-'+ product.name"
                type="button"
                class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              >
                No, cancel
              </button>
        </template>
      </SharedPopUpModal>
      <button
        :data-modal-target="'removeFromCart-'+ product.name"
        :data-modal-toggle="'removeFromCart-'+ product.name"
        type="button"
        class="font-medium text-red-600 dark:text-red-500 hover:underline"
      >
        Remove
      </button>
    </div>
  </div>
</template>
