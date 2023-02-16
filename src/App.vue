<template>
  <div class="app">
    <Layout />
    <router-view class="px-5 py-5"></router-view>
  </div>
</template>

<script>
import Layout from './components/Layout.vue'
export default {
  name: 'App',
  components: {
    Layout,
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}

body {
  font-family: 'Gloria Hallelujah', cursive;
}
</style>
