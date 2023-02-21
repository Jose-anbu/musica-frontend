<template>
  <div>
    <div class="d-flex">
      <div class="contenedorImagen me-4">
        <img :src='imagenDisco' class="img-thumbnail" :alt='nombrePortadaDisco'>
      </div>
      <div class="seccionDetalles">
        <h1 class="pb-4">{{ detalleCancion.nombre }}</h1>
        <ul>
          <li>Duración: {{ detalleCancion.duracion }}</li>
          <li>Nombre del albúm: {{ detalleCancion.nombreDisco }}</li>
        </ul>
      </div>
    </div>
    <div>
      <h3 class="py-4">Otros temas</h3>
      <ul>
        <!-- <li>{{ cancionesMismoAlbum.canciones }}</li> -->
      </ul>
    </div>
  </div>
</template>

<script>
import endpoints from '../endpoints';

export default {
  name: 'Cancion',
  created() {
    this.id = this.$route.params.id.toString()
    endpoints.getDetalleCancion(this.id).then((detalleCancion) => {
      this.detalleCancion = detalleCancion
      endpoints.getCancionesMismosAlbum(this.id).then((lista) => {
        this.cancionesMismoAlbum = lista
        console.log(this.cancionesMismoAlbum)
        return this.cancionesMismoAlbum
      })
      return this.detalleCancion
    })
  },
  data() {
    return {
      detalleCancion: {},
      cancionesMismoAlbum: []
    }
  },
  computed: {
    imagenDisco() {
      return this.detalleCancion.imagenDisco
    },

    nombrePortadaDisco() {
      return 'Imagen de tapa de disco', this.detalleCancion.nombreDisco
    },
  }
}
</script>

<style>
.contenedorImagen {
  width: 20%;
  overflow: hidden;
}

.seccionDetalles {
  width: 50%;
}

.seccionDetalles li {
  padding-bottom: 10px;
  list-style: circle;
}
</style>