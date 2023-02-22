<template>
  <div class="app">
    <Header></Header>
    <router-view class="px-5 py-5 margenPages"></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
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
  margin: 67.08px 0 104px;
}

@media screen and (max-width: 767px){
  .margenPages {
    margin: 40px 0 77px;
  }
  h1{
    font-size: 25px;
  }
  h3{
    font-size: 18px;
  }
  h4{
    font-size: 15px;
  }
  li{
    font-size: 13px;
  }
}
</style>
