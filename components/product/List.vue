<script setup>
import { computed } from "vue";
const props = defineProps(["products", "listTitle"]);
const products = computed(() => props.products.items);
</script>

<template>
  <div class="mt-5 mb-5 overflow-hidden">
    <h3 class="ml-3 text-lg font-semibold" v-if="listTitle">{{ listTitle }}</h3>
    <div class="inline-flex gap-5">
      <ProductCard v-for="(product, idx) in products" :key="`${Date.now() + idx}-${product.slug}`" :product="product" />
    </div>
  </div>
</template>
