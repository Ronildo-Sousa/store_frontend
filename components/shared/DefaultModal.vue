<script setup>
const props = defineProps(['modal_id']);
</script>

<template>
  <div>
    <!-- Main modal -->
    <div
      :id="modal_id"
      tabindex="-1"
      aria-hidden="true"
      class="fixed top-0 left-0 right-0 z-50 hidden w-full h-screen max-h-full p-4 overflow-hidden bg-gray-700 bg-opacity-70 md:inset-0"
    >
      <div class="relative w-full max-w-2xl">
        <!-- Modal content -->
        <div class="relative max-h-full bg-white rounded-lg shadow-lg h-[75vh] flex flex-col justify-between dark:bg-gray-800">
          <!-- Modal header -->
          <div
            class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600"
          >
            <slot name="header"></slot>

            <button
              type="button"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              :data-modal-hide="modal_id"
            >
              <svg
                aria-hidden="true"
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>

          <!-- Modal body -->
          <div class="max-h-full p-6 space-y-6 overflow-x-hidden overflow-y-scroll h-96">
            <slot name="body"></slot>
          </div>

          <!-- Modal footer -->
          <div
            class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600"
          >
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
