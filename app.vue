<template>
  <component :is="Counter"></component>
</template>
<script setup>
const Counter = resolveComponent("Counter");
</script>
