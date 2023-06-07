<template>
  <div>
    <header>
      <div class="border-b">
        <div class="container mx-auto w-full">
          <nav class="flex h-[100px] items-center justify-between">
            <!-- logo -->
            <nuxt-link to="/"
              ><img class="h-[56px] w-[170px]" src="/icon/logo.svg" alt=""
            /></nuxt-link>

            <!-- searching group -->
            <div
              v-show="router.currentRoute.value.name !== 'cart'"
              class="search relative flex flex-row justify-between"
            >
              <!-- search input -->
              <input
                type="search"
                id="location-search"
                class="p-2.5 w-[431px] h-[40px] z-20 text-gray-900 rounded-l-lg border-[#0D6EFD] border-2 border-r-0 outline-none text-base"
                placeholder="Search"
                required
              />
              <!-- categories dropdown -->
              <button
                class="flex items-center justify-between text-sm font-normal px-2 text-center border-2 border-[#0D6EFD] hover:bg-gray-200 outline-none w-[145px] z-10"
                type="button"
                @click="() => (topHeaderFilter = !topHeaderFilter)"
              >
                {{ currentCategory }}
                <i class="bx bx-chevron-down text-2xl text-slate-500"></i>
              </button>
              <!-- dropdown content -->
              <div
                id="dropdownHover"
                class="absolute right-24 z-50 top-12 bg-white border shadow rounded-lg w-44"
                :class="{ hidden: !topHeaderFilter }"
              >
                <ul
                  class="py-2 text-sm text-gray-700 p-0"
                  aria-labelledby="dropdownHoverButton"
                >
                  <nuxt-link
                    v-for="el in topHeaderCats"
                    class="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    :select="el.name == currentCategory"
                    @click="() => (currentCategory = el.name)"
                  >
                    {{ el.name }}
                  </nuxt-link>
                </ul>
              </div>
              <!-- search btn -->
              <button
                type="submit"
                class="flex p-2.5 justify-center items-center text-white w-[100px] text-[16px] h-[40px] font-medium bg-[#127FFF] rounded-r-lg bg-gradient-to-r from-[#127FFF] to-[#0067FF]"
              >
                <span class="">Search</span>
              </button>
            </div>

            <!-- links -->
            <div class="flex items-center gap-6">
              <ul v-for="el in topHeaderElements">
                <li class="">
                  <nuxt-link
                    :to="el.path"
                    class="flex cursor-pointer flex-col gap-2 items-center text-gray-500"
                  >
                    <img
                      :src="'icon/' + el.icon"
                      class="w-[20px] h-[19px]"
                      alt=""
                    />
                    <span class="font-normal leading-[15px]">{{
                      el.title
                    }}</span>
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      <HeaderBottom v-show="router.currentRoute.value.name !== 'cart'" />
    </header>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { topHeaderElements } from "../constants/top-header-links";
import { topHeaderCats } from "../constants/top-header-category";
const topHeaderFilter = ref(false);
const currentCategory = ref("All Categories");
const router = useRouter();
</script>

<style lang="scss" scoped></style>
