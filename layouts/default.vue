<template>

  <!-- Navbar -->
      <Navbar/>
  <!-- ========================= -->

  <!-- pages contain -->
  <div class="mt-20">
    <slot />
  </div>
  <!-- ==================== -->

  <!-- footer start -->
    <Footer/>
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
