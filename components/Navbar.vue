<template>
  <!-- build navbar -->
  <nav
    class="shadow-lg bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200"
  >
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <NuxtLink to="/" class="flex items-center 2xl:relative 2xl:right-32">
        <img src="@/assets/images/logo.png" class="h-14 mr-3" alt="Logo" />
      </NuxtLink>
      <div class="flex lg:order-2 2xl:relative 2xl:left-32">
        <!-- login / register -->
        <button
          type="button"
          class="text-white sm:block hidden bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 lg:mr-0"
        >
          <NuxtLink to="login" class="text-md font-bold"
            >{{ $t("login") }}/{{ $t("register") }}</NuxtLink
          >
        </button>
        <!-- ================= -->

        <!-- for translation -->
        <select v-model="language" class="ml-2 rounded text-md">
          <option
            v-for="item in locales"
            :key="typeof item === 'object' ? item.code : item"
            :value="typeof item === 'object' ? item.code : item"
          >
            {{ typeof item === "object" ? item.name : item }}
          </option>
        </select>
        <!-- ====== -->

        <!-- open navbar / close navbar -->
        <button @click="isOpen = !isOpen" class="block lg:hidden">
          <i v-if="!isOpen" class="material-icons text-3xl">menu</i>
          <i v-if="isOpen" class="material-icons text-3xl">close</i>
        </button>
        <!-- ============== -->
      </div>

      <!-- nav -->
      <div
        :class="isOpen ? 'block' : 'hidden'"
        class="flex flex-col justify-center lg:justify-between w-full lg:flex flex-col justify-center lg:w-auto lg:order-1"
        id="navbar-sticky"
      >
        <ul
          class="flex flex-col items-center p-4 lg:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 lg:flex-row lg:space-x-2 lg:mt-0 lg:border-0 lg:bg-white"
        >
          <li
            class="my-3 lg:my-0"
            v-for="(item, index) in nav_links"
            :key="index"
          >
            <NuxtLink
              @click="isOpen = !isOpen"
              :to="item.path"
              active-class="text-white bg-red-600"
              class="block lg:text-sm lg:font-medium hover:bg-red-600 hover:text-white uppercase lg:p-2 py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-red-600 lg:hover:text-white lg:p-0"
              aria-current="page"
              >{{ $t(item.display) }}</NuxtLink
            >
          </li>
          <li>
            <button
              @click="isOpenDropdown = !isOpenDropdown"
              class="flex items-center justify-between w-full lg:text-sm uppercase hover:text-red-600 mmd:w-auto py-2 pl-3 pr-4 lg:p-2"
            >
              {{ $t("configuration") }}
              <svg
                class="w-5 h-5 ml-1"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <!-- Dropdown menu -->
            <div
              id="dropdownNavbar"
              :class="!isOpenDropdown ? 'hidden' : 'block'"
              class="z-10 border absolute top-14 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-lg w-44"
            >
              <ul
                class="py-2 text-sm text-gray-700"
                aria-labelledby="dropdownLargeButton"
              >
                <li v-for="(item, index) in settings" :key="index">
                  <NuxtLink
                  active-class="text-white bg-red-600"
                  @click="isOpenDropdown = !isOpenDropdown"
                    :to="item.path"
                    :class="index !== 0 ? 'border-t' : 'border-0'"
                    class="block font-semibold px-4 py-2 hover:bg-red-600 hover:text-white"
                    >{{ $t(item.display) }}</NuxtLink
                  >
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <!-- login / register -->
        <button
          type="button"
          class="text-white flex items-center justify-center mt-5 sm:hidden block bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 lg:mr-0"
        >
          <NuxtLink to="login" class="text-lg font-light"
            >{{ $t("login") }}/{{ $t("register") }}</NuxtLink
          >
        </button>
      </div>
    </div>
  </nav>
  <!-- ========================= -->
</template>

<script setup>
let isOpen = ref(false);
let isOpenDropdown = ref(false);

const nav_links = ref([
  {
    path: "/",
    display: "home",
  },
  {
    path: "/events",
    display: "events",
  },
  {
    path: "/courses",
    display: "courses_and_camps",
  },
  {
    path: "/coupons",
    display: "coupons",
  },
  {
    path: "/about",
    display: "about",
  },
  {
    path: "/faq",
    display: "faq",
  },
]);

const settings = ref([
  {
    path: "/eventsAdmin",
    display: "events",
  },
  {
    path: "/coursesAdmin",
    display: "courses",
  },
  {
    path: "/campsAdmin",
    display: "camps",
  },
  {
    path: "/giftsAdmin",
    display: "gifts",
  },
]);

const { locales, locale, setLocale } = useI18n();

const language = computed({
  get: () => locale.value,
  set: (value) => {
    setLocale(value);
  },
});
</script>

<style scoped></style>
