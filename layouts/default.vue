<template>
  <div>
    <nav
      class="bg-purple-700 shadow-lg p-3 text-white text-lg flex justify-between"
    >
      <nuxt-link to="/">Home</nuxt-link>
      <nuxt-link to="/about">About</nuxt-link>
      <nuxt-link to="/iphone">Iphones</nuxt-link>
      <nuxt-link to="/profile">Profile</nuxt-link>
    </nav>
    <!-- here nuxt will replace page content -->
    <slot></slot>
  </div>
</template>
