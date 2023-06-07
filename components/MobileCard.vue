<template>
  <div
    v-for="el in mobileCards"
    class="bg-white border border-[#DEE2E7] w-[350px] h-[500px] rounded-lg hover:rounded-none cursor-pointer duration-300"
  >
    <img
      :src="`img/${el}.png`"
      class="mx-auto h-[215px] w-[215px] my-14 object-contain"
    />
    <div class="border-t border-[#EFF2F4] p-5">
      <div class="flex items-center justify-between">
        <div class="flex flex-col gap-3">
          <div class="flex items-center gap-2">
            <span class="font-semibold text-[#1C1C1C] text-xl">$99.50</span>
            <span class="text-[#D4CDC5] line-through text-lg">$1128.00</span>
          </div>
          <div class="flex items-center">
            <i class="bx bxs-star text-[#FF9017]" v-for="el in 3"></i>
            <i class="bx bxs-star text-[#D4CDC5]" v-for="el in 2"></i>
            <span class="ml-2 text-[#FF9017]">7.5</span>
          </div>
        </div>
        <i
          class="bx bx-heart text-2xl border border-gray-300 rounded-md text-blue-500 hover:bg-gray-100 cursor-pointer p-1 py-0"
        ></i>
      </div>
      <p class="text-lg font-normal py-3 text-[#606060]">
        GoPro HERO6 4K Action <br />
        Camera - Black
      </p>
    </div>
  </div>
</template>

<script setup>
const mobileCards = [
  "lit-phones-2",
  "blue-phones",
  "phones-2",
  "plansher-2",
  "camera-2",
  "blue-phones",
  "laptop",
  "watch-2",
  "lit-phones-2",
];
</script>

<style lang="scss" scoped></style>
