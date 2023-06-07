<script setup>
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";
const { $darkmodeConfig } = useNuxtApp();

onMounted(() => {
  initFlowbite();
  $darkmodeConfig();
});
</script>

<template>
  <div>
    <Navbar />
    <slot />
  </div>
</template>
