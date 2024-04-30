<template>
  <button @click="toggle">Toggle</button>
  <div v-if="MyComponent === 'welcome'">
    <HomeWelcome />
  </div>
  <Counter v-else />
</template>
<script setup>
// const MyComponent = shallowRef("Counter");
const MyComponent = ref("counter");

function toggle() {
  MyComponent.value = "welcome";
}
</script>
