<script setup>
import { ref } from "vue";
const props = defineProps(["products", "listTitle"]);

const scrollX = ref(0);
const listIsHover = ref(false);
const sizeList = props.products.items.length;

const handleLeft = () => {
  let x = scrollX.value + Math.round(window.innerWidth / 2);
  if (x > 0) {
    x = 0;
  }
  scrollX.value = x;
};
const handleRight = () => {
  let x = scrollX.value - Math.round(window.innerWidth / 2);
  let listW = sizeList * 310;

  if (window.innerWidth - listW > x) {
    x = window.innerWidth - listW - 60;
  }

  scrollX.value = x;
};
</script>

<template>
  <div @mouseenter="listIsHover = true" @mouseleave="listIsHover = false" v-if="sizeList > 0" class="relative">
    <div
      @click="handleLeft"
      :class="listIsHover ? 'opacity-100' : 'opacity-0'"
      class="absolute left-0 p-4 transition-all ease-in-out bg-gray-400 rounded-full cursor-pointer hover:bg-gray-500 dark:bg-black dark:hover:bg-indigo-800 top-1/2"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15.75 19.5L8.25 12l7.5-7.5"
        />
      </svg>
    </div>
    <div
      @click="handleRight"
      :class="listIsHover ? 'opacity-100' : 'opacity-0'"
      class="absolute right-0 p-4 transition-all ease-in-out bg-gray-400 rounded-full cursor-pointer hover:bg-gray-500 dark:bg-black dark:hover:bg-indigo-800 top-1/2"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>
    </div>

    <div class="p-5 mb-5 overflow-x-hidden">
      <h3 class="ml-3 text-lg font-semibold" v-if="listTitle">{{ listTitle }}</h3>

      <div
        class="transition-all ease-in-out"
        :style="{
          marginLeft: scrollX + 'px',
          width: sizeList * 310 + 'px',
        }"
      >
        <div class="inline-flex gap-5">
          <ProductCard
            v-for="(product, idx) in products.items"
            :key="`${Date.now() + idx}-${product.slug}`"
            :product="product"
          />
        </div>
      </div>
    </div>
  </div>
</template>
