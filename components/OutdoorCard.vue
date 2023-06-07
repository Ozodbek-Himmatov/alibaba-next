<script setup>
import { homeOutdoor } from "../constants/home-outdoor";
</script>

<template>
  <div
    class="overflow-x-auto grid grid-cols-4 grid-rows-1 lg:grid-rows-2 lg:h-[310px]  lg:w-full"
  >
    <div
      v-for="el in homeOutdoor"
      class="lg:flex border-gray-200   cursor-pointer p-3 mt-1 border-b border-r"
    >
      <div class="flex gap-14">
        <div class="w-full">
          <div class="text-md font-normal text-[#1C1C1C]">{{ el.name }}</div>
          <span class="text-sm font-normal text-gray-500"
            >From <br />
            USD {{ el.usd }}</span
          >
        </div>
        <div class="w-[130px] h-[130px] flex items-center justify-center">
          <img :src="`/img/${el.img}`" />
        </div>
      </div>
    </div>
  </div>
</template>
