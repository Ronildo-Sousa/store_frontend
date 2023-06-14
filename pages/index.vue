<script setup>
import { onMounted, ref } from "vue";
const { $axios } = useNuxtApp();

const products = ref({
  items: [],
});
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

  $axios()
    .get(`/products?per_page=20`)
    .then((response) => {
      products.value.items = response.data.data;
    });
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
      <div class="p-3">
        <h3 class="ml-3 text-lg font-semibold">All Products</h3>
        <div class="flex flex-wrap items-center justify-around ">
          <ProductCard v-for="item in products.items" :key="item.slug" :product="item" />
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
