<script setup>
import { ref } from "vue";
import { useNuxtApp } from "#app";
const { $axios } = useNuxtApp();

const form = ref({
  email: "",
  password: "",
});

const formErrors = ref([]);
const httpErrors = ref(null);

const getErrors = (field) => {
  let result = null;
  result = formErrors.value.filter((item) => item !== undefined && item[field]);
  if (result.length > 0) {
    result = result[0][field];
  }
  return result;
};

const login = (event) => {
  event.preventDefault();
  formErrors.value = [];

  $axios()
    .post("/auth/login", form.value)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      if (error.response.status === 422) {
        let validationErrrors = Object.entries(error.response.data.errors);

        validationErrrors.forEach((item) =>
          item.reduce((key, value) => formErrors.value.push({ [key]: value }))
        );
      } else {
        httpErrors.value = error.response.data.message;
      }
    });
};
</script>

<template>
  <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        class="mx-auto h-10 w-auto"
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
        alt="Your Company"
      />
      <h2
        class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
      >
        Sign in to your account
      </h2>
    </div>
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <div
        v-if="httpErrors"
        class="bg-red-500 text-white p-2 flex justify-center mb-3 items-center rounded"
      >
        {{ httpErrors }}
      </div>
      <form class="space-y-6" method="POST">
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900"
            >Email address</label
          >
          <div class="mt-2">
            <input
              v-model="form.email"
              id="email"
              name="email"
              type="email"
              autocomplete="email"
              class="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
            />
          </div>

          <small
            v-for="(error, index) in getErrors('email')"
            :key="index"
            class="text-red-500"
          >
            {{ error }}
          </small>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label
              for="password"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Password</label
            >
          </div>
          <div class="mt-2">
            <input
              v-model="form.password"
              id="password"
              name="password"
              type="password"
              autocomplete="current-password"
              class="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
            />
          </div>

          <small
            v-for="(error, index) in getErrors('password')"
            :key="index"
            class="text-red-500"
          >
            {{ error }}
          </small>
        </div>

        <div>
          <button
            @click="login"
            type="submit"
            class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign up
          </button>
        </div>
      </form>

      <p class="mt-10 text-center text-sm text-gray-500">
        don't have an account ?
        <a href="#" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >Sign up</a
        >
      </p>
    </div>
  </div>
</template>
