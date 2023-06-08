<script setup>
const props = defineProps(["products"]);
</script>

<template>
  <div class="mt-5 mb-5">
    <h3 class="ml-3 text-lg font-semibold">Algum titulo here....</h3>
    <div class="inline-flex gap-5">
      <ProductCard
        v-for="product in products.items"
        :key="product.slug"
        :product="product"
      />
    </div>
  </div>
</template>
