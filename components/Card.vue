<template>
    <div class="relative lg:my-0 my-3 cursor-pointer flex flex-col items-center justify-center w-80 md:w-96 lg:w-80 xl:w-96 rounded shadow-2xl h-44 mx-2">
        <i class="absolute top-4 material-icons text-4xl mb-4 bg-red-600 text-white py-1 px-3 rounded">{{ props.icon }}</i>
        <div class="flex flex-col items-center mt-14">
            <h2 class="xl:text-3xl text-2xl md:text-3xl lg:text-2xl font-bold">{{ props.title }}</h2>
            <NuxtLink to="" class="mt-4 hover:underline">{{ props.body }}</NuxtLink>
        </div>
    </div>
</template>

<script setup>

const props = defineProps({
    icon:String,
    title:String,
    body:String,
    state:Boolean
})
</script>

<style scoped>
.relative{
    border: 1px solid rgb(214, 214, 214);
}
</style>