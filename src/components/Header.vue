<template>
  <div>
    <nav class="navbar bg-dark fixed-top">
      <div class="px-5 d-flex">
        <img src="../assets/logo.png" alt="Logo" class="imagenLogo__nav">
        <router-link to="/" class="texto__nav navbar-brand" title="Home">Lo Vueno &#128526;</router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style>
nav {
  box-shadow: 5px 10px 20px grey;
}

.imagenLogo__nav {
  width: 8%;
}

.texto__nav {
  display: flex;
  color: #00bf63;
  text-shadow: 0px 0px 10px white;
  align-items: center;
  transition: 400ms;
}

.texto__nav:hover {
  color: lightgreen;
  cursor: pointer;
  transform: scale(1.10);
}
</style>