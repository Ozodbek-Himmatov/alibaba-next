<template>
  <div
    v-for="el in dealsElements"
    class="2xl:w-[249px] border-gray-300 p-5 m-1 border-l flex flex-col justify-between items-center pt-[17px]"
  >
    <div class="w-[130px] h-[130px] flex items-center justify-center">
      <img :src="`/img/${el.img}`" alt="" />
    </div>
    <div class="flex flex-col items-center gap-[10px] text-center">
      <span class="text-[18px] text-[#1C1C1C]">{{ el.title }}</span>
      <button class="bg-[#FFE3E3] text-[#EB001B] px-3.5 h-[28px] rounded-full">
        {{ el.number }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { dealsElements } from "../constants/deals-elements";
</script>

<style lang="scss" scoped></style>
