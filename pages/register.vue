<script setup>
import { ref } from "vue";
import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost/api",
});

const form = ref({
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  password_confirmation: "",
});

const errors = ref([]);

const getErrors = (field) => {
  let result = null;
  result = errors.value.filter((item) => item !== undefined && item[field]);
  if (result.length > 0) {
    result = result[0][field];
  }
  return result;
};

const login = (event) => {
  event.preventDefault();
  errors.value = [];

  http
    .post("/auth/register", form.value)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      let validationErrrors = Object.entries(error.response.data.errors);

      validationErrrors.forEach((item) =>
        item.reduce((key, value) => errors.value.push({ [key]: value }))
      );
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
        Sign up to your account
      </h2>
    </div>
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" method="POST">
        <div class="flex justify-between gap-2">
          <div class="w-full">
            <label
              for="first_name"
              class="block text-sm font-medium leading-6 text-gray-900"
              >First name</label
            >
            <div class="mt-2">
              <input
                v-model="form.first_name"
                id="first_name"
                name="first_name"
                type="text"
                class="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>

            <small
              v-for="(error, index) in getErrors('first_name')"
              :key="index"
              class="text-red-500"
            >
              {{ error }}
            </small>
          </div>

          <div class="w-full">
            <label
              for="last_name"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Last name</label
            >
            <div class="mt-2">
              <input
                v-model="form.last_name"
                id="last_name"
                name="last_name"
                type="text"
                class="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
            <small
              v-for="(error, index) in getErrors('last_name')"
              :key="index"
              class="text-red-500"
            >
              {{ error }}
            </small>
          </div>
        </div>
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
          <div class="flex items-center justify-between">
            <label
              for="password_confirmation"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Password confirmation</label
            >
          </div>
          <div class="mt-2">
            <input
              v-model="form.password_confirmation"
              id="password_confirmation"
              name="password_confirmation"
              type="password"
              class="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
            />
          </div>

          <small
            v-for="(error, index) in getErrors('password_confirmation')"
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
        have an account ?
        <a href="#" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >Sign in</a
        >
      </p>
    </div>
  </div>
</template>
