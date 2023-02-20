<template>
  <div>
    <h1 class="pb-4">{{ artista.nombre }}</h1>
    <div class="d-flex">
      <div class="contenedorImagen me-4">
        <img :src='imagenArtista' class="img-thumbnail" :alt='nombreArtista'>
      </div>
      <div class="seccionDetalles">
        <ul>
          <li>Género: {{ artista.genero }}</li>
          <li>País: {{ artista.pais }}</li>
          <li>Biografía: {{ artista.biografia }}</li>
        </ul>
      </div>
    </div>
    <div class="seccionCanciones">
      <h3 class="py-4">Canciones</h3>
      <ul>
        <li v-for="(cancion, index) in canciones" @click=irADetalleCancion(index)>{{ cancion.nombre }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import endpoints from '../endpoints'

export default {
  name: 'Artista',
  data() {
    return {
      id: '',
      artista: {},
      canciones: []
    }
  },
  created() {
    this.id = this.$route.params.id.toString();
    endpoints.getArtista(this.id).then((artista) => {
      this.artista = artista
      endpoints.getCancionesArtista(this.artista.canciones)?.then((canciones_) => {
        console.log(canciones_)
        this.canciones = canciones_
      })
      return {
        ...this.artista,
        ...this.canciones
      }
    })
  },
  computed: {
    imagenArtista() {
      return this.artista.imagen
    },
    nombreArtista() {
      return 'Imagen de',this.artista.nombre
    }
  },
  methods:{
    irADetalleCancion(index){
      console.log(index)
      console.log(this.artista.canciones[index])
      this.$router.push({name: 'cancion', params: {id:this.artista.canciones[index]}})
    }
  }
}
</script>

<style>
.contenedorImagen {
  width: 40%;
  overflow: hidden;
}

.seccionDetalles {
  width: 50%;
}

.seccionDetalles li {
  padding-bottom: 10px;
  list-style: circle;
}

.seccionCanciones li {
  margin-bottom: 10px;
  list-style: inside;
  list-style-type: none;
}

.seccionCanciones li:hover{
  cursor: pointer;
  transform: scale(1.01);
}
</style>