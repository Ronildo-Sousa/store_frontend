<script setup>
import { onMounted } from "vue";
import { initFlowbite, Modal } from "flowbite";
const { $darkmodeConfig } = useNuxtApp();

onMounted(() => {
  initFlowbite();
  $darkmodeConfig();
  let modal = new Modal(document.getElementById("cartmodal"));
  // modal.show();
});
</script>

<template>
  <div>
    <Navbar />
    <slot />
  </div>
</template>
