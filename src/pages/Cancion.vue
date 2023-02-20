<template>
  <div>
    <h1 class="pb-4">{{ detalleCancion.nombre }}</h1>
    <div class="d-flex">
      <div class="contenedorImagen me-4">
        <img :src='imagenDisco' class="img-thumbnail" :alt='nombrePortadaDisco'>
      </div>
      <div class="seccionDetalles">
        <ul>
          <li>Duración: {{ detalleCancion.duracion }}</li>
          <li>Nombre del disco: {{ detalleCancion.nombreDisco }}</li>
        </ul>
      </div>
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
      return this.detalleCancion
    })
  },
  data() {
    return {
      detalleCancion: {}
    }
  },
  computed: {
    imagenDisco() {
      return this.detalleCancion.imagenDisco
    },

    nombrePortadaDisco() {
      return 'Imagen de tapa de disco',this.detalleCancion.nombreDisco
    }
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