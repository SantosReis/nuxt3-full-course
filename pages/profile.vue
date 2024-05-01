<template>
  <h1>Iskandar</h1>

  <!-- here nuxt will replace page content -->
  <slot></slot>
</template>
<script setup>
definePageMeta({
  layout: "sidebar",
  middleware: () => {
    // log("I am from middleware");
    const auth = useAuth();
    return auth.value.isAuthenticated;
  },
});
</script>
