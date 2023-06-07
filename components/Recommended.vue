<template>
  <div class="grid grid-cols-5 grid-rows-2 gap-10">
    <div
      v-for="el in recommended"
      class="w-[275px] h-[360px] border bg-white p-3 rounded-lg cursor-pointer shadow hover:scale-105 duration-75"
    >
      <img :src="`/img/${el.img}`" class="mx-auto p-7 mb-1" />
      <h2 class="text-lg font-medium text-[#1C1C1C] mb-2">${{ el.cost }}</h2>
      <p class="text-lg font-normal text-gray-500">{{ el.title }}</p>
    </div>
  </div>
</template>

<script setup>
import { recommended } from "../constants/recommended";
</script>

<style lang="scss" scoped></style>
