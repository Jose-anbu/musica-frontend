<template>
  <div class="app">
    <Header></Header>
    <router-view class="px-5 py-5 margenPages"></router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue'
export default {
  name: 'App',
  components: {
    Header
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

.margenPages {
  margin-top: 67.08px;
}
</style>
