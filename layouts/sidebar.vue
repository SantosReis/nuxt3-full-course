<template>
  <main class="user-layout bg-gray-600">
    <article class="sidebar">
      <p>Dashboard</p>
      <p>Setting</p>
    </article>
    <!-- here nuxt will replace page content -->
    <slot></slot>
  </main>
</template>

<style>
.sidebar {
  display: flex;
  flex-direction: column;
}
.user-layout {
  display: flex;
}
</style>
