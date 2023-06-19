<template>
  <div class="w-full bg-black lg:h-52 md:h-78 text-white p-4 text-3xl">
    <h2 class="text-left">{{ $t("events") }}</h2>
    <form @submit.prevent="" class="flex lg:flex-row flex-col items-center">
      <div class="lg:w-3/4 w-full flex flex-col justify-center">
        <div class="flex md:flex-row flex-col items-center">
          <div class="relative w-full mt-5">
            <input
              type="search"
              @input="filterData"
              v-model="searchQuery"
              id="location-search"
              class="block rounded p-2 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              :placeholder="$t('search')"
              required
            />
            <button
              type="submit"
              class="absolute top-0 right-0 p-2 text-sm font-medium text-white bg-gray-500 rounded-r-sm border border-gray-500 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300"
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
          <div class="w-full flex flex-col md:my-0 my-2 text-left mx-4">
            <label class="text-base">{{ $t("from") }}</label>
            <va-date-input name="birthDay" stateful clearable />
          </div>
          <div class="w-full flex flex-col text-left">
            <label class="text-base">{{ $t("until") }}</label>
            <va-date-input name="birthDay" stateful clearable/>
          </div>
        </div>
        <div class="flex md:flex-row flex-col items-center">
          <div class="w-full flex flex-col text-left">
            <label class="text-base">{{ $t("place") }}</label>
            <v-select
              v-model="data.value1"
              :items="data.options1"
              multiple
              class="ss"
              variant=""
              density="compact"
            >
              <template v-slot:selection="{ index }">
                <span v-if="index === 0" class="text-base">
                  ({{ data.value1.length }} options)
                </span>
              </template>
            </v-select>
          </div>
          <div class="w-full mx-4 flex flex-col text-left my-2 md:my-0">
            <label class="text-base">{{ $t("sport") }}</label>
            <v-select
              v-model="data.value2"
              :items="data.options2"
              multiple
              class="ss"
              variant=""
              density="compact"
            >
              <template v-slot:selection="{ index }">
                <span v-if="index === 0" class="text-base">
                  ({{ data.value2.length }} options)
                </span>
              </template>
            </v-select>
          </div>
          <div class="w-full flex flex-col text-left">
            <label class="text-base">{{ $t("team") }}</label>
            <v-select
              v-model="data.value3"
              :items="data.options3"
              multiple
              class="ss"
              variant=""
              density="compact"
            >
              <template v-slot:selection="{ index }">
                <span v-if="index === 0" class="text-base">
                  ({{ data.value3.length }} options)
                </span>
              </template>
            </v-select>
          </div>
        </div>
      </div>
      <div class="ml-4 mt-5 lg:w-1/4 w-full">
        <div
          class="flex lg:flex-col items-center justify-center lg:items-start lg:justify-center"
        >
          <va-switch
            :label="$t('expired_events')"
            size="small"
            class="text-base sm:mx-3 lg:mx-0 mx-1 lg:mx-0"
            v-model="data.switch1"
            color="danger"
          />
          <va-switch
            :label="$t('canceled_courses')"
            size="small"
            class="text-base lg:mt-2 lg:mx-0 mx-1 sm:mx-3 lg:mx-0"
            v-model="data.switch2"
            color="danger"
          />
        </div>
        <div class="mt-5">
          <button
            class="bg-gray-500 w-full flex flex-row items-center justify-center rounded h-10"
          >
            <i class="material-icons text-2xl">replay</i>
            Filter
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import { useMainStore } from "@/stores/data";
import { storeToRefs } from "pinia";

const mainStore = useMainStore();

const { searchQuery } = storeToRefs(mainStore);

const filterData = () => {
  mainStore.filterData();
};

onMounted(() => {
  mainStore.filterData();
});

const data = ref({
  date:'',
  selectedDate: null,
  value1: [],
  value2: [],
  value3: [],
  switch1: false,
  switch2: false,
  options1: ["test1", "test2", "test3", "test4", "test5", "test6"],
  options2: ["test1", "test2", "test3", "test4", "test5", "test6"],
  options3: ["test1", "test2", "test3", "test4", "test5", "test6"],
});
</script>

<style scoped>
.ss {
  background: white;
  height: 40px;
  border-radius: 5px;
  border: none;
  color: black;
}
</style>
