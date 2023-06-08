<script setup>
import { onMounted, ref } from "vue";
const { $axios } = useNuxtApp();

const products = ref({ items: null });

onMounted(() => {
    $axios().get('/products/?from_categories[]=odell-stark-iv').then((response) => {
      products.value.items = response.data.data;
    })
});
</script>

<template>
  <NuxtLayout>
    <div class="p-5 dark:bg-gray-700 dark:text-white">
      <ProductList :products="products" />
    </div>
  </NuxtLayout>
</template>
