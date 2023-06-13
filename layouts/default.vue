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
  <div class="dark:bg-gray-900 dark:text-white">
    <Navbar />
    <SharedToastList />
    <ProductCart />
    <main>
      <slot />
    </main>
    <SharedFooter />
  </div>
</template>
