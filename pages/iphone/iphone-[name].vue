<template>
  <div>
    <Head>
      <Title>Nuxt 3 - {{ name }}</Title>
      <Meta name="description" content="My amazing site." />
      <Meta>Lorem Ipsum</Meta>
    </Head>
    <div class="flex justify-center w-full mt-20">
      <div class="grid grid-cols-2">
        <div>
          <img :src="`/images/iphone-${route.params.name}.webp`" />
        </div>
        <div class="text-center">
          <h1 class="text-3xl">Iphone {{ name }}</h1>
          <button
            @click="addToCart"
            class="p-3 bg-indigo-900 text-white rounded-md mt-5 w-48"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  </div>
  <h2>IPhone {{ name }}</h2>
</template>
<script setup>
const route = useRoute();
const name = computed(() => {
  return route.params.name.replaceAll("-", " ");
});

const cart = useCart();
function addToCart() {
  cart.value.push({
    name: `iphone-${route.params.name}`,
  });
}

// useHead({
//   title: `Nuxt3 - ${route.params.name}`,
//   meta: [{ name: "description", content: "My amazing site." }],
// });
</script>
