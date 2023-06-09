<script setup>
import { onMounted, ref } from "vue";
const { $axios } = useNuxtApp();

const categories = ref({ items: null });
const products = ref([]);

// onMounted(() => {
//   $axios()
//     .get("/categories")
//     .then((response) => {
//       categories.value.items = response.data.data;
//       categories.value.items.forEach((category) => {
//         $axios()
//           .get(`/products/?from_categories[]=${category.slug}`)
//           .then((response) => {
//             products.value.push({ category: category.name, items: response.data.data });
//           });
//       });
//     });
// });
</script>

<template>
  <NuxtLayout>
    <div class="p-5 dark:bg-gray-700 dark:text-white">
      <SharedDefaultModal>
        <template #header>
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
            Terms of Service
          </h3>
        </template>
        <template #body>
          <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            With less than a month to go before the European Union enacts new consumer
            privacy laws for its citizens, companies around the world are updating their
            terms of service agreements to comply.
          </p>
          <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            The European Unions General Data Protection Regulation (G.D.P.R.) goes into
            effect on May 25 and is meant to ensure a common set of data rights in the
            European Union. It requires organizations to notify users as soon as possible
            of high-risk data breaches that could personally affect them.
          </p>
        </template>
        <template #footer>
          <button
            data-modal-hide="defaultModal"
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            I accept
          </button>
          <button
            data-modal-hide="defaultModal"
            type="button"
            class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
          >
            Decline
          </button>
        </template>
      </SharedDefaultModal>
      <!-- <ProductList
        v-for="item in products"
        :key="item.category"
        :products="item"
        :list-title="item.category"
      /> -->
    </div>
  </NuxtLayout>
</template>
