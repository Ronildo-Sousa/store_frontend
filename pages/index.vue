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
      <ProductCart />
      <!-- <ProductList
        v-for="item in products"
        :key="item.category"
        :products="item"
        :list-title="item.category"
      /> -->
    </div>
  </NuxtLayout>
</template>
