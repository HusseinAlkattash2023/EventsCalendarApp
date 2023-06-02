<template>
    <div class="flex flex-col items-center justify-center w-96 border-2 border-slate-300 rounded shadow-2xl h-44 mx-2">
        <i class="material-icons text-4xl mb-4 bg-red-600 text-white p-3 rounded">{{ props.icon }}</i>
        <h2 class="text-3xl font-bold">{{ props.title }}</h2>
        <NuxtLink to="/" class="mt-4">{{ props.body }}</NuxtLink>
    </div>
</template>

<script setup>
const props = defineProps({
    icon:String,
    title:String,
    body:String
})
</script>

<style scoped>

</style>