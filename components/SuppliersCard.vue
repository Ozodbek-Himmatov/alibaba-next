<template>
  <div v-for="el in regionSuppliers" class="flex items-center gap-3">
    <h2 class="text-2xl">{{ el.flag }}</h2>
    <div>
      <h2 class="text-base text-[#1C1C1C]">{{ el.name }}</h2>
      <h4 class="text-[13px] text-[#8B96A5] -mt-1">{{ el.url }}</h4>
    </div>
  </div>
</template>

<script setup>
import { regionSuppliers } from '../constants/region-suppliers';
</script>

<style lang="scss" scoped></style>
