<template>
  <nav
    class="bg-purple-900 shadow-lg p-3 text-white text-lg flex justify-between"
  >
    <nuxt-link to="/">Home</nuxt-link>
    <nuxt-link to="/about">About</nuxt-link>
    <nuxt-link to="/iphone">Iphones</nuxt-link>
    <nuxt-link to="/profile">Profile</nuxt-link>
    <p>Cart ({{ cart.length }})</p>
    <p>{{ auth.isAuthenticated }}</p>
  </nav>
</template>
<script setup>
const cart = useCart();
const auth = useAuth();
</script>
