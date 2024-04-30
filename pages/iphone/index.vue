<template>
  <div class="grid grid-cols-4 gap-4">
    <NuxtLink
      to="/iphone/iphone-12"
      class="shadow-lg border rounded-lg text-center"
    >
      <h2>Iphone 12</h2>
      <div class="flex justify-center">
        <img with="200" src="assets/images/iphone-12.webp" alt="" />
      </div>
    </NuxtLink>
    <NuxtLink
      to="/iphone/iphone-12-pro"
      class="shadow-lg border rounded-lg text-center"
    >
      <h2>Iphone 12 pro</h2>
      <div class="flex justify-center">
        <img with="200" src="public/images/iphone-12-pro.webp" alt="" />
      </div>
    </NuxtLink>
  </div>
</template>
<script setup>
useHead({
  title: "Nuxt3 - Iphones",
});
</script>
