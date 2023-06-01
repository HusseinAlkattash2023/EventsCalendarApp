<template>

  <!-- build navbar -->
  <nav
    class="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200"
  >
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <NuxtLink to="/" class="flex items-center">
        <img
          src="@/assets/images/logo.png"
          class="h-14 mr-3"
          alt="Flowbite Logo"
        />
      </NuxtLink>
      <div class="flex lg:order-2">
        <button
          type="button"
          class="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 lg:mr-0"
        >
            <NuxtLink to="login" class="text-lg font-light">Login/Register</NuxtLink>
        </button>
        <button @click="isOpen = !isOpen" class="block lg:hidden">
          <i v-if="!isOpen" class="material-icons text-3xl">menu</i>
          <i v-if="isOpen" class="material-icons text-3xl">close</i>
        </button>
      </div>
      <div
        :class="isOpen ? 'block' : 'hidden'"
        class="items-center justify-between w-full lg:flex lg:w-auto lg:order-1"
        id="navbar-sticky"
      >
        <ul
          class="flex flex-col items-center p-4 lg:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0 lg:bg-white"
        >
          <li class="my-3 lg:my-0" v-for="(item , index) in nav_links" :key="index">
            <NuxtLink
              @click="isOpen = !isOpen"
              :to="item.path"
              active-class="text-white bg-red-600"
              class="block lg:text-sm lg:font-medium hover:bg-red-600 hover:text-white uppercase lg:p-2 py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-red-600 lg:hover:text-white lg:p-0"
              aria-current="page"
              >{{ item.display }}</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- ========================= -->

  <!-- pages contain -->
  <div class="container mt-20 mx-auto p-4">
    <slot />
  </div>
  <!-- ==================== -->

  <!-- footer start -->
  <footer>footer</footer>
  <!-- ====================== -->
</template>

<script setup>
const nav_links = ref([
    {
        path:"/",
        display:"Home"
    },
    {
        path:"/events",
        display:"Events"
    },
    {
        path:"/courses",
        display:"Courses and camps"
    },
    {
        path:"/coupons",
        display:"Coupons"
    },
    {
        path:"/about",
        display:"About Us"
    },
    {
        path:"/faq",
        display:"FAQ"
    },
]);

let isOpen = ref(false);

</script>

<style scoped></style>
