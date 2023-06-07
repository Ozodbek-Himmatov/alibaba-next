<template>
  <div>
    <div class="flex flex-row gap-0.5">
      <div
        class="w-[50px] h-[55px] 2xl:text-white text-[#8B96A5] flex flex-col items-center justify-center bg-[#EFF2F4] 2xl:bg-[#606060] rounded-[4px]"
      >
        <span class="font-bold text-[18px]">{{ day.toString().padStart(2, '0') }}</span>
        <span class="text-[14px]">Days</span>
      </div>

      <div
        class="2xl:ml-[6px] 2xl:mr-[6px] w-[50px] h-[55px] 2xl:text-white text-[#8B96A5] bg-[#EFF2F4] flex flex-col items-center 2xl:bg-[#606060] justify-center rounded-[4px]"
      >
        <span class="font-bold text-[18px]">{{ hour.toString().padStart(2, '0') }}</span>
        <span class="text-[14px]"> Hour </span>
      </div>

      <button
        class="2xl:mr-[6px] w-[50px] h-[55px] 2xl:text-white bg-[#EFF2F4] text-[#8B96A5] rounded-[4px] flex flex-col items-center 2xl:bg-[#606060] justify-center"
      >
        <span class="font-bold text-[18px]">{{ min.toString().padStart(2, '0') }}</span>
        <span class="text-[14px]"> Min </span>
      </button>
      <button
        class="w-[50px] h-[55px] 2xl:text-white bg-[#606060] bg-[#EFF2F4] text-[#8B96A5] rounded-[4px] flex flex-col items-center 2xl:bg-[#606060] justify-center"
      >
        <span class="font-bold text-[18px]">{{ sec.toString().padStart(2, '0') }}</span>
        <span class="text-[14px]"> Sec </span>
      </button>
    </div>
  </div>
</template>

<script setup>
const day = ref(new Date().getDate());
const hour = ref(new Date().getHours());
const min = ref(new Date().getMinutes());
const sec = ref(new Date().getSeconds());

setInterval(() => {
  day.value = new Date().getDate();
  hour.value = new Date().getHours();
  min.value = new Date().getMinutes();
  sec.value = new Date().getSeconds();
}, 1000);
</script>

<style lang="scss" scoped></style>
