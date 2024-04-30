<template>
  <nuxt-link to="/">Home</nuxt-link>
  <nuxt-link to="/about">About</nuxt-link>
  <NuxtPage />
</template>
<script setup>
const page = ref("home");

function view(name) {
  page.value = name;
}
</script>
