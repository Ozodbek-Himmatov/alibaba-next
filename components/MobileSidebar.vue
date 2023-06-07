<script setup>
import { initAccordions } from "flowbite";
import { onMounted } from "vue";

const manufacturers = [
  "China",
  "South Korea",
  "United States",
  "Taiwan",
  "India",
  "Japan",
  "Brazil",
  "Germany",
  "Finland",
  "Vietnam",
];

const brands = ["Samsung", "Apple", "Huawei", "Pocco", "Lenovo"];

const features = [
  "Metallic",
  "Plastic cover",
  "8GB RAM",
  "Super power",
  "Large Memory",
];

const categories = [
  "Mobile accessory",
  "Electronics",
  "Smartphones",
  "Modern tech",
];

onMounted(() => {
  initAccordions();
});
</script>

<template>
  <div>
    <div id="accordion-open" class="w-full" data-accordion="open">
      <h2 id="accordion-open-heading-1">
        <button
          type="button"
          class="flex items-center justify-between w-full py-4 font-semibold text-[#505050] border-t"
          data-accordion-target="#accordion-open-body-1"
          aria-expanded="true"
          aria-controls="accordion-open-body-1"
        >
          <span class="text-[#1C1C1C]">Category</span>
          <svg
            data-accordion-icon
            class="w-6 h-6 rotate-180 shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </h2>
      <div
        id="accordion-open-body-1"
        class="hidden"
        aria-labelledby="accordion-open-heading-1"
      >
        <div class="grid grid-cols-1 text-[#505050]">
          <h1
            v-for="el in categories"
            class="w-full py-[10px] hover:cursor-pointer duration-300 hover:text-[#1C1C1C]"
          >
            {{ el }}
          </h1>
          <h1
            class="w-full py-[10px] hover:cursor-pointer duration-300 hover:text-[#144184] text-[#0D6EFD]"
          >
            See all
          </h1>
        </div>
      </div>
      <h2 id="accordion-open-heading-2">
        <button
          type="button"
          class="flex items-center justify-between w-full py-4 font-semibold text-left text-[#505050] border-t-[2px]"
          data-accordion-target="#accordion-open-body-2"
          aria-expanded="true"
          aria-controls="accordion-open-body-2"
        >
          <span class="text-[#1C1C1C]">Brands</span>
          <svg
            data-accordion-icon
            class="w-6 h-6 shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </h2>
      <div
        id="accordion-open-body-2"
        class="hidden"
        aria-labelledby="accordion-open-heading-2"
      >
        <div class="">
          <div class="grid grid-cols-1 text-[#1C1C1C]">
            <div
              v-for="el in brands"
              class="flex py-[10px] items-center justify-start gap-3"
            >
              <input
                class="border-[#BDBDBD] rounded-[6px] w-[20px] h-[20px] hover:cursor-pointer"
                type="checkbox"
                :name="el"
              />
              <h1 :for="el" class="w-full">{{ el }}</h1>
            </div>
            <h1
              class="w-full py-[10px] hover:cursor-pointer duration-300 hover:text-[#144184] text-[#0D6EFD]"
            >
              See all
            </h1>
          </div>
        </div>
      </div>
      <h2 id="accordion-open-heading-3">
        <button
          type="button"
          class="flex items-center justify-between w-full py-4 font-semibold text-left text-[#505050] border-t-[2px]"
          data-accordion-target="#accordion-open-body-3"
          aria-expanded="true"
          aria-controls="accordion-open-body-3"
        >
          <span class="text-[#1C1C1C]">Features</span>
          <svg
            data-accordion-icon
            class="w-6 h-6 shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </h2>
      <div
        id="accordion-open-body-3"
        class="hidden"
        aria-labelledby="accordion-open-heading-3"
      >
        <div class="">
          <div class="grid grid-cols-1 text-[#505050]">
            <div
              v-for="el in features"
              class="flex py-[10px] items-center justify-start gap-3"
            >
              <input
                class="border-[#BDBDBD] rounded-[6px] w-[20px] h-[20px] hover:cursor-pointer"
                type="checkbox"
                :name="el"
              />
              <h1 :for="el" class="w-full">{{ el }}</h1>
            </div>
            <h1
              class="w-full py-[10px] hover:cursor-pointer duration-300 hover:text-[#144184] text-[#0D6EFD]"
            >
              See all
            </h1>
          </div>
        </div>
      </div>
      <h2 id="accordion-open-heading-4">
        <button
          type="button"
          class="flex items-center justify-between w-full py-4 font-semibold text-left text-[#505050] border-t-[2px]"
          data-accordion-target="#accordion-open-body-4"
          aria-expanded="false"
          aria-controls="accordion-open-body-4"
        >
          <span class="text-[#1C1C1C]">Price range</span>
          <svg
            data-accordion-icon
            class="w-6 h-6 shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </h2>
      <div
        id="accordion-open-body-4"
        class="hidden"
        aria-labelledby="accordion-open-heading-4"
      >
        <div class="">
          <div class="grid grid-cols-1 text-[#505050]">
            <div
              class="flex py-[10px] items-center justify-between gap-3 m-[10px]"
            >
              <input
                type="number"
                class="outline-none p-[10px] text-[14px] w-[45%] border-[#DEE2E7] border-[1px] rounded-[10px]"
                placeholder="Minimal"
              />
              <input
                type="number"
                class="outline-none p-[10px] text-[14px] w-[45%] border-[#DEE2E7] border-[1px] rounded-[10px]"
                placeholder="Maximal"
              />
            </div>
          </div>
        </div>
      </div>
      <h2 id="accordion-open-heading-5">
        <button
          type="button"
          class="flex items-center justify-between w-full py-4 font-semibold text-left text-[#505050] border-t-[2px]"
          data-accordion-target="#accordion-open-body-5"
          aria-expanded="false"
          aria-controls="accordion-open-body-5"
        >
          <span class="text-[#1C1C1C]">Condition</span>
          <svg
            data-accordion-icon
            class="w-6 h-6 shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </h2>
      <div
        id="accordion-open-body-5"
        class="hidden"
        aria-labelledby="accordion-open-heading-5"
      >
        <div class="">
          <div class="grid grid-cols-1 text-[#505050]">
            <div class="flex py-[10px] items-center justify-start gap-3">
              <input
                class="border-[#BDBDBD] rounded-[6px] w-[20px] h-[20px] hover:cursor-pointer"
                type="checkbox"
              />
              <h1 class="w-full">New</h1>
            </div>
            <div class="flex py-[10px] items-center justify-start gap-3">
              <input
                class="border-[#BDBDBD] rounded-[6px] w-[20px] h-[20px] hover:cursor-pointer"
                type="checkbox"
              />
              <h1 class="w-full">Old</h1>
            </div>
          </div>
        </div>
      </div>
      <h2 id="accordion-open-heading-6">
        <button
          type="button"
          class="flex items-center justify-between w-full py-4 font-semibold text-left text-[#505050] border-t-[2px]"
          data-accordion-target="#accordion-open-body-6"
          aria-expanded="false"
          aria-controls="accordion-open-body-6"
        >
          <span class="text-[#1C1C1C]">Ratings</span>
          <svg
            data-accordion-icon
            class="w-6 h-6 shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </h2>
      <div
        id="accordion-open-body-6"
        class="hidden"
        aria-labelledby="accordion-open-heading-6"
      >
        <div class="">
          <div class="grid grid-cols-1 text-[#505050]">
            <div class="flex py-[10px] items-center justify-start gap-3">
              <input
                class="border-[#BDBDBD] rounded-[6px] w-[20px] h-[20px] hover:cursor-pointer"
                type="checkbox"
              />

              <n-rate readonly :default-value="1" />
            </div>
            <div class="flex py-[10px] items-center justify-start gap-3">
              <input
                class="border-[#BDBDBD] rounded-[6px] w-[20px] h-[20px] hover:cursor-pointer"
                type="checkbox"
              />

              <n-rate readonly :default-value="2" />
            </div>
            <div class="flex py-[10px] items-center justify-start gap-3">
              <input
                class="border-[#BDBDBD] rounded-[6px] w-[20px] h-[20px] hover:cursor-pointer"
                type="checkbox"
              />

              <n-rate readonly :default-value="3" />
            </div>
            <div class="flex py-[10px] items-center justify-start gap-3">
              <input
                class="border-[#BDBDBD] rounded-[6px] w-[20px] h-[20px] hover:cursor-pointer"
                type="checkbox"
              />

              <n-rate readonly :default-value="4" />
            </div>
            <div class="flex py-[10px] items-center justify-start gap-3">
              <input
                class="border-[#BDBDBD] rounded-[6px] w-[20px] h-[20px] hover:cursor-pointer"
                type="checkbox"
              />

              <n-rate readonly :default-value="5" />
            </div>
          </div>
        </div>
      </div>
      <h2 id="accordion-open-heading-7">
        <button
          type="button"
          class="flex items-center justify-between w-full py-4 font-semibold text-left text-[#505050] border-t-[2px]"
          data-accordion-target="#accordion-open-body-7"
          aria-expanded="false"
          aria-controls="accordion-open-body-7"
        >
          <span class="text-[#1C1C1C]">Manufacturer</span>
          <svg
            data-accordion-icon
            class="w-6 h-6 shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </h2>
      <div
        id="accordion-open-body-7"
        class="hidden"
        aria-labelledby="accordion-open-heading-7"
      >
        <div class="">
          <div class="grid grid-cols-1 text-[#505050]">
            <div
              v-for="el in manufacturers"
              class="flex py-[10px] items-center justify-start gap-3"
            >
              <input
                class="border-[#BDBDBD] rounded-[6px] w-[20px] h-[20px] hover:cursor-pointer"
                type="checkbox"
                :name="el"
              />
              <h1 :for="el" class="w-full">{{ el }}</h1>
            </div>
            <h1
              class="w-full py-[10px] hover:cursor-pointer duration-300 hover:text-[#144184] text-[#0D6EFD]"
            >
              See all
            </h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
