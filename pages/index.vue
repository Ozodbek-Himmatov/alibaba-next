<template>
  <div class="container mx-auto h-full pt-7 pb-8">
    <!-- banner begins -->
    <section
      class="flex bg-white pt-[20px] pb-[20px] gap-[27px] rounded-md border border-1 border-gray-300"
    >
      <div>
        <ul v-for="el in bannerCats" class="w-[290px] flex flex-col ml-[14px]">
          <li
            class="flex items-center h-[50px] text-[17px] hover:bg-[#E5F1FF] hover:font-medium cursor-pointer rounded-[6px] pl-[10px]"
          >
            {{ el.name }}
          </li>
        </ul>
      </div>

      <div>
        <h2 class="absolute mt-[55px] ml-[50px] text-[33px]">
          Latest trending
        </h2>
        <h1 class="absolute mt-[95px] ml-[50px] text-[37px]">
          <b>Electronic items</b>
        </h1>
        <button
          class="absolute mt-[165px] ml-[50px] h-[50px] text-[20px] bg-white rounded-md px-3"
        >
          Learn More
        </button>
        <img class="h-[460px] w-[864px]" src="/img/home-banner.png" alt="" />
      </div>

      <div class="flex flex-col gap-2">
        <div
          class="w-[280px] h-[185px] bg-[#E3F0FF] flex flex-col items-center rounded-[6px]"
        >
          <div class="flex pt-[16px] px-5 justify-between w-full mb-[14px]">
            <img class="w-[50px]" src="/icon/home-avatar.svg" alt="" />
            <span class="text-[17px]">Hi, user <br />let's get stated</span>
          </div>
          <button
            class="bg-[#127FFF] text-white w-[250px] h-[40px] rounded-[6px] text-[17px]"
          >
            Join now
          </button>
          <button
            class="mt-[7px] bg-white rounded-[6px] text-[#0D6EFD] w-[250px] h-[40px] border text-[18px]"
          >
            Log in
          </button>
        </div>

        <div class="h-[130px] bg-[#F38332] rounded-md flex items-center">
          <span class="text-[20px] ml-[25px] text-white mb-3">
            Get US $10 off <br />with a new <br />supplier
          </span>
        </div>

        <div class="h-[130px] bg-[#55BDC3] rounded-md flex items-center">
          <span class="text-[20px] ml-[25px] text-white mb-3">
            Send quotes with <br />supplier <br />preferences
          </span>
        </div>
      </div>
    </section>
    <!-- banner ends -->

    <!-- deals begin -->
    <section
      class="bg-white rounded-md border borer-1 border-gray-300 mt-[35px] pl-[20px] overflow-hidden h-[280px] flex"
    >
      <div class="pt-[20px] flex flex-col gap-5">
        <div>
          <h1 class="font-bold text-[22px]">Deals and offers</h1>
          <h2 class="text-[#8B96A5] text-[18px]">Hygiene equipments</h2>
        </div>

        <Timer />
        <!-- Timer of Deals and Offers -->
      </div>

      <div class="flex overflow-scroll 2xl:overflow-hidden ml-10">
        <Cards />
        <!-- Cards of Deals and Offers -->
      </div>
    </section>
    <!-- deals end -->

    <!-- Home and outdoor begins -->
    <section
      class="lg:mt-5 mt-3 bg-white border borer-1 border-gray-300 lg:h-[310px] rounded-lg lg:flex w-full"
    >
      <div
        :class="`bg-[url('/img/home-outdoor.png')] `"
        class="lg:bg-contain bg-cover flex justify-between lg:justify-center lg:block lg:w-[302px] p-4"
      >
        <h2 class="text-xl font-bold w-[150px]">
          Home and <br />
          outdoor
        </h2>
        <button class="bg-white mt-3 px-4 py-2 rounded-lg">Source now</button>
      </div>

      <div class="flex overflow-scroll 2xl:overflow-hidden">
        <OutdoorCard />
      </div>
    </section>
    <!-- Home and outdoor ends -->

    <!-- Consumer electronics and gadgets starts -->
    <section
      class="lg:mt-5 mt-3 bg-white border lg:h-[310px] rounded-lg border borer-1 border-gray-300 lg:flex w-full"
    >
      <div
        :class="`bg-[url('/img/consumer-gadgets.png')] `"
        class="lg:bg-contain bg-cover flex justify-between lg:justify-center lg:block lg:w-[295px] p-4"
      >
        <h2 class="text-xl font-bold w-[150px]">
          Consumer <br />
          electronics and <br />
          gadgets
        </h2>
        <button class="bg-white mt-3 px-4 py-2 rounded-lg">Source now</button>
      </div>

      <div class="flex overflow-scroll 2xl:overflow-hidden">
        <GadgetsCard />
      </div>
    </section>
    <!-- Consumer electronics and gadgets ends -->

    <!-- Send Request -->
    <SendRequest />

    <!-- Recommended items section starts -->
    <section class="lg:mt-9 pb-3">
      <h2 class="text-2xl font-semibold text-[#1C1C1C] mb-7">
        Recommended items
      </h2>
      <Recommended />
    </section>
    <!-- Recommended items section ends -->

    <!-- Our extra services starts -->
    <section class="pb-5 mt-9">
      <h2 class="text-2xl font-bold mb-5">Our extra services</h2>
      <div class="grid grid-cols-4 grid-rows-1 gap-5">
        <ServiceCard />
      </div>
    </section>
    <!-- Our extra services ends -->

    <!-- Suppliers by region starts -->
    <section class="pb-5 mt-9">
      <h2 class="text-2xl font-bold mb-7">Suppliers by region</h2>
      <div class="grid grid-cols-5 gap-5">
        <SuppliersCard />
      </div>
    </section>
    <!-- Suppliers by region ends -->
  </div>
</template>

<script setup>
import { bannerCats } from "../constants/banner-category";
import Timer from "../components/DealsTimer.vue";
import Recommended from "../components/Recommended.vue";
import SuppliersCard from "../components/SuppliersCard.vue";
import Cards from "../components/DealCards.vue";
import ServiceCard from "../components/ServiceCard.vue";
import OutdoorCard from "../components/OutdoorCard.vue";
import GadgetsCard from "../components/GadgetsCard.vue";
import SendRequest from "../components/SendRequest.vue";
</script>

<style lang="scss" scoped></style>
