<template>
  <h2>Ipad {{ name }}</h2>
</template>
<script setup>
const route = useRoute();

const name = computed(() => {
  // return route.params.name;
  return route.params.name.replaceAll("-", " ");
});
</script>
