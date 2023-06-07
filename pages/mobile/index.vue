<template>
  <div class="container mx-auto">
    <nav class="py-6">
      <ul class="flex items-center gap-8 font-normal font-base text-[#8B96A5]">
        <li class="flex items-center gap-4 cursor-pointer">
          Clothings <i class="bx bxs-chevron-right text-lg"></i>
        </li>
        <li class="flex items-center gap-4 cursor-pointer">
          Men's wear <i class="bx bxs-chevron-right text-lg"></i>
        </li>
        <li class="flex items-center gap-4 cursor-pointer">
          Home <i class="bx bxs-chevron-right text-lg"></i>
        </li>
        <li class="flex items-center gap-4 cursor-pointer">Summer clothing</li>
      </ul>
    </nav>
    <div class="flex gap-5">
      <div class="w-[20%]">
        <SideBar />
      </div>
      <div class="w-full">
        <div
          class="bg-white flex items-center justify-between py-3 px-5 rounded-lg border border-gray-200"
        >
          <h2>
            12,911 items in <span class="font-bold">Mobile accessory</span>
          </h2>
          <div class="flex items-center gap-4">
            <input
              id="item"
              type="checkbox"
              class="w-4 h-4 text-blue-600 bg-[#BDBDBD] rounded"
            />
            <label for="item" class="text-md text-[#1C1C1C]">
              Verified only
            </label>
            <div class="border py-1.5 h-[40px] w-[190px] rounded-lg">
              <select class="bg-white w-[180px] outline-none px-3 rounded-md">
                <option>Featured</option>
              </select>
            </div>
            <div class="flex items-center">
              <img
                src="/icon/windows.svg"
                class="border border-r-0 rounded-l-md p-2 cursor-pointer h-[35px] w-[35px] bg-[#DEE2E7]"
              />
              <img
                src="/icon/hamburger-2.svg"
                class="border h-[35px] w-[35px] rounded-r-md p-2 cursor-pointer bg-white"
              />
            </div>
          </div>
        </div>
        <div class="flex items-center text-sm gap-2 py-5">
          <button
            v-for="el in catLinks"
            class="bg-white flex items-center gap-1 border border-[#0D6EFD] hover:bg-[#0D6EFD]/10 pl-3 pr-1 rounded-lg text-gray-800 duration-300 text-sm"
          >
            {{ el }} <i class="bx bx-x text-2xl text-gray-600"></i>
          </button>
          <span class="text-[#0D6EFD] cursor-pointer">Clear all filter</span>
        </div>
        <div class="grid grid-cols-3 gap-y-10 gap-x-[106px]">
          <MobileCard />
        </div>
        <div
          class="flex items-center justify-end gap-5 py-5 mt-5 mb-36 text-end"
        >
          <div class="bg-white px-2 py-2 border border-gray-300 rounded-lg">
            <select
              class="cursor-pointer bg-white outline-none pr-5 text-gray-800"
            >
              <option>Show 10</option>
            </select>
          </div>
          <ul class="flex items-center gap-0 border border-gray-300 rounded-lg">
            <li
              class="px-2 p-1 bg-white hover:bg-gray-100 cursor-pointer border-r rounded-l-lg"
            >
              <i class="bx bx-chevron-left text-2xl"></i>
            </li>
            <li
              v-for="i in 3"
              class="p-2 px-4 bg-white hover:bg-gray-100 cursor-pointer border-r"
            >
              {{ i }}
            </li>
            <li
              class="px-2 p-1 bg-white hover:bg-gray-100 cursor-pointer border-r rounded-r-lg"
            >
              <i class="bx bx-chevron-right text-2xl"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import MobileCard from "~/components/MobileCard.vue";
import SideBar from "~/components/MobileSidebar.vue";
const catLinks = ["Samsung", "Apple", "Poco", "Metallic", "4 star", "3 star"];
</script>

<style lang="scss" scoped></style>
