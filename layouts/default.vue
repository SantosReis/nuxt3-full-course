<template>
  <nav class="bg-purple-700 text-white">
    <nuxt-link to="/">Home</nuxt-link>
    <nuxt-link to="/about">About</nuxt-link>
    <nuxt-link to="/profile">Profile</nuxt-link>
  </nav>
  <!-- here nuxt will replace page content -->
  <slot></slot>
</template>
