<script setup>
import { onMounted, ref } from "vue";
const { $axios } = useNuxtApp();

const categories = ref({ items: null });
const products = ref([]);
const FeaturedProducts = ref([]);

onMounted(() => {
  $axios()
    .get(`/products?from_categories[]=featured`)
    .then((response) => {
      FeaturedProducts.value.push({
        category: "Featured products",
        items: response.data.data,
      });
    });
  // $axios()
  //   .get("/categories")
  //   .then((response) => {
  //     categories.value.items = response.data.data;
  //     categories.value.items.forEach((category) => {
  //       $axios()
  //         .get(`/products/?from_categories[]=${category.slug}`)
  //         .then((response) => {
  //           products.value.push({ category: category.name, items: response.data.data });
  //         });
  //     });
  //   });
});
</script>

<template>
  <NuxtLayout>
    <div>
      <SharedHero
        title="Lorem ipsum dolor sit, amet "
        body="Neque eum, beatae officia delectus sunt at corrupti voluptates quidem quis sit iusto
      fugiat id corporis autem nemo. Ea obcaecati eius adipisci!"
      />

      <ProductList
        v-for="item in FeaturedProducts"
        :key="item.slug"
        :products="item"
        :list-title="item.category"
      />
      <!-- <ProductList
        v-for="item in products"
        :key="item.category"
        :products="item"
        :list-title="item.category"
      /> -->
    </div>
  </NuxtLayout>
</template>
