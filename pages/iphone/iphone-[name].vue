<template>
  <div>
    <Head>
      <Title>Nuxt 3 - {{ name }}</Title>
      <Meta name="description" content="My amazing site." />
      <Meta>Lorem Ipsum</Meta>
    </Head>
  </div>
  <h2>IPhone {{ name }}</h2>
</template>
<script setup>
const route = useRoute();
const name = computed(() => {
  return route.params.name.replaceAll("-", " ");
});

// useHead({
//   title: `Nuxt3 - ${route.params.name}`,
//   meta: [{ name: "description", content: "My amazing site." }],
// });
</script>
