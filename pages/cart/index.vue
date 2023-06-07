<template>
  <div class="container mx-auto pb-10">
    <h1 class="text-2xl font-semibold my-5 text-[#1C1C1C]">
      My cart ({{ services.length }})
    </h1>
    <div class="flex gap-5">
      <div class="w-full bg-white border border-[#DEE2E7] rounded-lg">
        <div
          v-for="el in services"
          class="border-b mx-5 flex justify-between gap-3 p-5"
        >
          <div class="flex gap-3">
            <div
              class="h-[90px] w-[90px] flex items-center bg-white rounded-lg border border-gray-300"
            >
              <img
                :src="`/img/${el.img}.png`"
                alt=""
                class="h[70px] mx-auto p-2"
              />
            </div>
            <div>
              <h2 class="text-[#1C1C1C] font-medium text-md">
                T-shirts with multiple colors, for men and lady
              </h2>
              <p class="text-sm text-[#8B96A5] font-normal">
                Size: medium, Color: blue, Material: Plastic
              </p>
              <p class="text-sm text-[#8B96A5] font-normal">
                Seller: Artel Market
              </p>
              <div class="flex mt-3 gap-5">
                <button
                  class="border border-[#DEE2E7] px-2 py-1 text-md rounded-md text-[#FA3434]"
                >
                  Remove
                </button>
                <button
                  class="border border-[#DEE2E7] px-2 py-1 text-md rounded-md text-blue-500"
                >
                  Save for later
                </button>
              </div>
            </div>
          </div>
          <div class="text-end">
            <h2 class="text-md text-[#1C1C1C]">$78.99</h2>
            <div
              class="border border-[#DEE2E7] px-2 h-[40px] w-[123px] flex items-center py-1 mt-3 rounded-lg outline-none"
            >
              <select class="bg-white outline-none w-[110px]">
                <option>Qty: 9</option>
                <option>Qty: 9</option>
              </select>
            </div>
          </div>
        </div>
        <div class="flex justify-between p-5">
          <button
            class="px-4 py-1 text-white bg-blue-500 flex items-center gap-2 rounded-md"
          >
            <i class="bx bx-left-arrow-alt text-2xl"></i> Back to shop
          </button>
          <button
            class="px-4 py-1 hover:bg-gray-100 text-blue-500 border border-gray-300 bg-none flex items-center gap-2 rounded-md"
          >
            Remove all
          </button>
        </div>
      </div>
      <div class="w-[35%]">
        <div class="bg-white p-5 border border-[#DEE2E7] rounded-lg mb-5">
          <label class="text-gray-600">Have a coupon?</label>
          <div class="flex mt-2">
            <input
              type="text"
              placeholder="Add coupon"
              class="w-[80%] rounded-l-md border border-r-0 px-2 outline-none"
            />
            <button
              class="border p-2 px-4 text-blue-500 hover:bg-gray-100 rounded-r-md"
            >
              Apply
            </button>
          </div>
        </div>
        <div
          class="text-gray-600 border border-[#DEE2E7] bg-white p-5 rounded-lg mb-5"
        >
          <div class="mb-3 flex items-center justify-between">
            <span>Subtotal:</span>
            <span>$1403.97</span>
          </div>
          <div class="mb-3 flex items-center justify-between">
            <span>Discount:</span>
            <span class="text-red-500">- $60.00</span>
          </div>
          <div class="mb-3 flex items-center justify-between">
            <span>Tax:</span>
            <span class="text-green-500">+ $14.00</span>
          </div>
          <div class="h-[1px] bg-[#E4E4E4] my-5"></div>
          <div class="py-3 text-black mb-3 flex items-center justify-between">
            <span>Total:</span>
            <span class="text-xl">$1357.97</span>
          </div>
          <button
            class="text-center bg-[#00B517] w-full py-3 rounded-md text-white text-lg"
          >
            Checkout
          </button>
          <div class="flex items-center justify-center gap-5 pt-5">
            <img v-for="el in payments" :src="`/img/${el}.png`" />
          </div>
        </div>
      </div>
    </div>

    <!-- services starts -->
    <div class="flex py-7 gap-10">
      <div v-for="el in services" class="flex items-center gap-2">
        <i
          :class="el.icon"
          class="text-3xl bg-gray-300 p-2 px-3 rounded-full text-gray-500"
        ></i>
        <div>
          <h2>{{ el.name }}</h2>
          <p class="text-gray-500 text-sm">Have you ever finally just</p>
        </div>
      </div>
    </div>
    <!-- services ends -->

    <!-- Saved for later begins -->
    <div class="bg-white h-[510px] border border-[#DEE2E7] rounded-lg p-5">
      <h2 class="text-xl">Saved for later</h2>
      <div class="grid grid-cols-4 gap-20 px-10">
        <div v-for="el in saved" class="py-5">
          <div
            class="bg-[#EEEEEE] w-[290px] h-[260px] flex items-center rounded-lg"
          >
            <img :src="`/img/${el}.png`" class="mx-auto" />
          </div>
          <h2 class="py-3 text-xl">$99.50</h2>
          <p class="text-[#606060] text-md">
            GoPro HERO6 4K Action <br />
            Camera - Black
          </p>
          <button
            class="border text-[#0D6EFD] px-3 py-1 mt-3 font-medium rounded-lg flex items-center gap-3 hover:bg-gray-100"
          >
            <i class="bx bx-cart-alt text-xl"></i> Move to cart
          </button>
        </div>
      </div>
    </div>
    <!-- Saved for later begins -->

    <div
      class="mt-5 rounded-lg text-white flex items-center justify-between bg-[#005ADE] p-5 h-[120px] relative"
    >
      <img src="/img/blue-back.png" class="absolute left-0 z-0" />
      <div class="z-50">
        <h2 class="text-2xl">Super discount on more than 100 USD</h2>
        <p class="text-sm">Have you ever finally just write dummy info</p>
      </div>
      <button class="bg-[#FF9017] p-4 py-2 rounded-lg">Shop now</button>
    </div>
  </div>
</template>

<script setup>
const services = [
  { img: "blue-shirt", icon: "bx bxs-lock", name: "Secure payment" },
  {
    img: "blue-bag",
    icon: "bx bxs-message-alt-detail",
    name: "Customer support",
  },
  { img: "lamp", icon: "bx bxs-truck", name: "Free delivery" },
];
const payments = ["pay-1", "pay-2", "pay-3", "pay-4", "pay-5"];
const saved = ["planshet-2", "blue-phones", "watch-2", "laptop-2"];
</script>

<style lang="scss" scoped></style>
