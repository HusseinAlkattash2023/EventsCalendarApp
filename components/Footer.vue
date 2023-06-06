<template>
    <div class="mt-auto w-full">
        <div class="relative bg-neutral-700 text-center h-60 mt-0">
            <div class="flex items-center justify-center">
                <img src="@/assets/images/logo.png" alt="" class="absolute w-20 sm:w-28 text-center"/>
            </div>
            <div class="flex flex-col items-center justify-center relative top-28">
            <span class="text-white font-bold text-4xl">#DCadA</span>
            <div class="mt-10 text-white">
                <NuxtLink class="hover:underline" to="/">{{ $t('imprint') }}</NuxtLink> |
                <NuxtLink class="hover:underline" to="/">{{ $t('data_protection') }}</NuxtLink> |
                <NuxtLink class="hover:underline" to="/">{{ $t('terms_of_use') }}</NuxtLink>
            </div>
            </div>
        </div>
        <div class="flex sm:flex-row flex-col items-center justify-around w-full h-14 bg-neutral-900">
            <span class="text-white">© 1919 - 2023 Der Club an der Alster e.V.</span>
            <span class="text-white">Membr - Ein Service von Soft-Park</span>
        </div>
    </div>
</template>

<style scoped>
</style>