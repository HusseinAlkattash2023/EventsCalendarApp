<template>
  <div class="w-full bg-black h-52 text-white p-4 text-3xl">
    <h2 class="text-left">{{ $t("events") }}</h2>
    <form class="flex flex-row">
      <div class="w-3/4 flex flex-col justify-center">
        <div class="flex flex-row items-center">
          <div class="relative w-full mt-5">
            <input
              type="search"
              id="location-search"
              class="block rounded p-2 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
              placeholder="Suchen..."
              required
            />
            <button
              type="submit"
              class="absolute top-0 right-0 p-2 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                aria-hidden="true"
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
              <span class="sr-only">Search</span>
            </button>
          </div>
          <div class="w-full flex flex-col text-left mx-4">
            <label class="text-sm">Von</label>
            <va-date-input name="birthDay" label="datum auswählen..." />
          </div>
          <div class="w-full flex flex-col text-left">
            <label class="text-sm">Bis</label>
            <va-date-input name="birthDay" label="datum auswählen..." />
          </div>
        </div>
        <div class="flex flex-row items-center mt-6">
          <div class="w-full flex flex-col text-left">
            <va-select
              v-model="data.value1"
              label="auswählen"
              :options="data.options1"
            />
          </div>
          <div class="w-full mx-4 flex flex-col text-left">
            <va-select
              v-model="data.value2"
              label="auswählen"
              :options="data.options2"
            />
          </div>
          <div class="w-full flex flex-col text-left">
            <va-select
              v-model="data.value3"
              label="auswählen"
              :options="data.options2"
            />
          </div>
        </div>
      </div>
      <div class="ml-4 mt-5 w-1/4">
        <div>
          <va-option-list
            v-model="data.listValue"
            type="switch"
            :options="['Abgelaufen Events', 'Stornierte Kurse']"
            class="text-sm"
            size="md"
          />
        </div>
        <div>
          <va-button icon="replay" class="w-full" color="secondary">Filter</va-button>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
const data = ref({
  value1: "",
  value2: "",
  value3: "",
  listValue: ["Option 1"],
  options1: ["test1", "test2", "test3"],
  options2: ["test1", "test2", "test3"],
  options3: ["test1", "test2", "test3"],
});
</script>

<style scoped>
.custom-switch .custom-control-label::before {
  font-size: 24px; /* Change the font size to 24px */
}
</style>
