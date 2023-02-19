<template>
  <div>
    <!-- <p>Tarjeta de Artista</p> -->
    <div class="card">
      <div class="contenedor__card">
        <img :src='imagen' :alt='nombre' class="card-img-top">
      </div>
      <div class="card-body">
        <h4 class="card-text">{{ nombre }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'ArtistaCard',
  props:['id','nombre','genero','pais','biografia','imagen','canciones']
}
</script>

<style>
.card{
  transition: 400ms;
}

.card:hover{
  cursor: pointer;
  transform: scale(1.01);
  box-shadow: 5px 10px 20px grey;
}

.contenedor__card{
  width: auto;
  height: 200px;
  overflow: hidden;
}

/* .contenedor__card img{
  width: 100%;
  height: auto;
} */

</style>