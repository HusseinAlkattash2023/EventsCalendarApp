<template>
  <!-- build navbar -->
  <nav
    class="shadow-lg bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200"
  >
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <NuxtLink to="/" class="flex items-center">
        <img
          src="@/assets/images/logo.png"
          class="h-14 mr-3"
          alt="Logo"
        />
      </NuxtLink>
      <div class="flex lg:order-2">
        <!-- for translation -->
        <select v-model="language" class="mr-2 rounded  text-md">
          <option
            v-for="item in locales"
            :key="typeof item === 'object' ? item.code : item"
            :value="typeof item === 'object' ? item.code : item"
          >
            {{ typeof item === "object" ? item.name : item }}
          </option>
        </select>
        <!-- ====== -->

        <!-- login / register -->
        <button
          type="button"
          class="text-white sm:block hidden bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 lg:mr-0"
        >
          <NuxtLink to="login" class="text-md font-bold"
            >{{ $t('login') }}/{{ $t('register') }}</NuxtLink
          >
        </button>
        <!-- ================= -->

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
          class="flex flex-col items-center p-4 lg:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0 lg:bg-white"
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
        </ul>
          <!-- login / register -->
          <button
          type="button"
          class="text-white flex items-center justify-center mt-5  sm:hidden block bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 lg:mr-0"
        >
          <NuxtLink to="login" class="text-lg font-light"
            >{{ $t('login') }}/{{ $t('register') }}</NuxtLink
          >
        </button>
      </div>
    </div>
  </nav>
  <!-- ========================= -->
</template>

<script setup>
let isOpen = ref(false);

const nav_links = ref([
  {
    path: "/",
    display:'home'
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

const { locales, locale, setLocale } = useI18n();

const language = computed({
  get: () => locale.value,
  set: (value) => {
    setLocale(value);
  },
});

</script>

<style scoped></style>
