<script setup>
import { useToastStore } from "~/store/toast";
const toastStore = useToastStore();
</script>

<template>
  <div class="fixed z-50 flex flex-col space-y-5 w-80 top-14 right-4">
    <SharedToast
      v-for="(toast, idx) in toastStore.list"
      :key="idx"
      :toast="toast"
    />
  </div>
</template>
