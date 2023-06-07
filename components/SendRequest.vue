<script setup></script>

<template>
  <section
    class="bg-[url('img/request-banner.png')] lg:mt-5 border lg:h-[500px] rounded-lg flex w-full bg-cover"
  >
    <div
      class="flex w-full bg-gradient-to-r from-[#2C7CF1] to-[#00D1FF80] rounded-lg p-10 justify-between"
    >
      <div class="w-[440px] text-white">
        <h2 class="font-[#1C1C1C] font-semibold text-[32px] mb-6">
          An easy way to send requests to all suppliers
        </h2>
        <h4 class="text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing <br />
          elit, sed do eiusmod tempor incididunt.
        </h4>
      </div>
      <form class="bg-white w-[490px] p-5 rounded-lg">
        <h2 class="text-xl mb-8 font-bold">Send quote to suppliers</h2>
        <input
          type="text"
          placeholder="What item you need?"
          class="mb-8 w-full border border-gray-300 px-3 placeholder:text-[#1C1C1C] py-2 rounded-lg outline-none"
        />
        <textarea
          rows="2"
          class="mb-8 w-full border border-gray-300 px-3 py-2 rounded-lg outline-none"
          placeholder="Type more details"
        ></textarea>
        <div class="flex gap-2">
          <input
            type="text"
            placeholder="Quantity"
            class="mb-8 w-[45%] h-[40px] border border-gray-300 px-3 py-2 rounded-lg outline-none placeholder:text-[#1C1C1C]"
          />
          <select
            type="text"
            class="mb-8 bg-white w-[25%] flex items-center h-[40px] border rounded-lg invalid:text-[#1C1C1C] border-gray-300 px-3 py-2 outline-none"
          >
            <option>Pcs</option>
            <option>Pcs</option>
            <option>Pcs</option>
          </select>
        </div>
        <button
          class="text-white px-3 py-2 mt-2 rounded-lg bg-gradient-to-r from-[#127FFF] to-[#0067FF]"
        >
          Send inquiry
        </button>
      </form>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
