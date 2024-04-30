<template>
  <NuxtPage />
  <NuxtLayout />
</template>
<script setup>
const page = ref("home");

function view(name) {
  page.value = name;
}
</script>
