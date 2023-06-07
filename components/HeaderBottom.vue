<template>
  <div class="border-b">
    <div class="container mx-auto w-full">
      <nav class="flex h-[70px] items-center justify-between text-[#1C1C1C]">
        <div class="hidden gap-3 items-center w-full lg:flex lg:w-auto">
          <button
            class="inline-flex items-center text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <svg
              class="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <ul class="flex items-center flex-col gap-8 font-medium lg:flex-row">
            <li
              v-for="el in bottomHeaderElements"
              class="mr-2 p-2 hover:bg-slate-200 rounded-xl cursor-pointer"
            >
              <a
                href="#"
                class="block text-gray-800 rounded lg:p-0"
                aria-current="page"
              >
                {{ el.title }}
              </a>
            </li>
            <li
              class="p-2 rounded-xl cursor-pointer py-2"
            >
              <select
                id="help"
                class="block bg-white text-gray-800 rounded lg:p-0"
              >
                <option>Help</option>
                <option>Contact</option>
                <option>About us</option>
              </select>
            </li>
          </ul>
        </div>
        <div class="flex items-center gap-14">
          <select
            id="currencies"
            class="bg-white text-[16px] rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 cursor-pointer text-slate-900 outline-none"
          >
            <option>Uzbek, SUM</option>
            <option>English, USD</option>
            <option>Russian, EU</option>
          </select>
          <select
            id="countries"
            class="bg-white text-[16px] rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 cursor-pointer text-slate-900 outline-none"
          >
            <option>Ship to 🇩🇪</option>
            <option>Ship to 🇺🇿</option>
            <option>Ship to 🇷🇺</option>
            <option>Ship to 🏴󠁧󠁢󠁥󠁮󠁧󠁿</option>
          </select>
        </div>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { bottomHeaderElements } from "../constants/bottom-header-links";
</script>

<style lang="scss" scoped></style>
