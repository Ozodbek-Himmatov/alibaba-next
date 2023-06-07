<template>
  <div
    v-for="el in extraService"
    class="bg-white border border-1 border-[#E0E0E0] h-[255px] hover:shadow hover:rounded-b-none cursor-pointer rounded-xl   relative duration-150"
  >
    <img :src="`/img/${el.img}`" alt="" class="rounded-t-md w-full bg-black cover" />
    <i
      class="absolute right-7 top-[130px] bg-[#D1E7FF] text-2xl w-[55px] h-[55px] p3 flex items-center justify-center border-2 border-white rounded-full"
      :class="el.icon"
    ></i>
    <p class="p-5 px-6 w-[206px]">{{ el.title }}</p>
  </div>
</template>

<script setup>
import { extraService } from "../constants/extra-service";
</script>

<style lang="scss" scoped></style>
