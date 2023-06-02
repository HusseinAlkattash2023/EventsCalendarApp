<template>
    <main>
    <div class="home flex flex-col items-center justify-center">
        <div class="z-10 mb-10 flex flex-col items-center justify-center">
            <h1 class=" font-bold uppercase text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white">event calendar</h1>
            <h2 class="capitalize text-white mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">The club on the Alster</h2>
        </div>
        <div class="flex btn mt-0 md:mt-10 z-10">
            <button class="hover:shadow-2xl hover:bg-red-700 bg-red-600 mx-2 md:mx-4 md:py-4 py-3 rounded italic">
                <NuxtLink to="/events" class="lg:text-3xl md:text-2xl sm:text-xl text-white font-bold">Events</NuxtLink>
            </button>
            <button class="hover:shadow-2xl hover:bg-red-700 bg-red-600 mx-2 md:mx-4 md:py-4 py-3 rounded italic">
                <NuxtLink to="courses" class="lg:text-3xl md:text-2xl sm:text-xl text-white font-bold">Courses & Camps</NuxtLink>
            </button>
        </div>
    </div>
    <div class="mt-20 flex items-center justify-center mb-10">
        <div v-for="card in cards" :key="card">
            <Card :icon="card.icon" :title="card.title" :body="card.body"/>
        </div>
    </div>
    </main>
</template>

<script setup>
const cards = ref([
    {
        icon:"location_on",
        title:"The club on the Alster",
        body:"Hallerstraße 91, 20149 Hamburg"
    },
    {
        icon:"mail",
        title:"E-Mail",
        body:"eventkalender@dcada.de"
    },
    {
        icon:"forum",
        title:"FAQ",
    },
])
</script>

<style scoped>
.home{
    background-image: url('@/assets/images/Club.jpg');
    background-repeat: no-repeat;
    background-position: calc(50%);
    background-size: cover;
    height: 90vh;
    width: 100%;
    margin: 0px;
}
.home::before {
  position: absolute;
  z-index: 1;
  content: "";
  display: block;
  background: black;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  top: 20px;
}
.btn button{
    width: 270px;
    transition: all 0.5s ease;
}
@media only screen and (max-width: 1025px){
    .btn button{
    width: 230px;
}
}

@media only screen and (max-width: 768px){
    .btn button{
    width: 180px;
}
}

@media only screen and (max-width: 640px){
    .btn button{
    width: 150px;
}
}
@media only screen and (max-width: 460px){
    h1{
        font-size: 38px;
    }
}
</style>