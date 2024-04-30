<template>
  <div>Hello world</div>
  <button @click="increment">Increment</button>
  <p>{{ count }}</p>
  <button @click="decrement">Decrement</button>
</template>
<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
  },
};
</script>
<script setup>
// const count = ref(0);
// function increment() {
//   count.value++;
// }
// function decrement() {
//   count.value--;
// }
</script>
