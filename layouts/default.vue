<template>
  <div>
    <Header />
    <main class="min-h-screen bg-[#F7FAFC]">
      <slot />
    </main>
    <TopFooter v-show="router.currentRoute.value.name !== 'cart'" />
    <Footer />
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

definePageMeta({
  layout: "default",
});
</script>

<style scoped></style>
