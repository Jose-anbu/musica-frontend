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
          <li>Nombre del álbum: {{ detalleCancion.nombreDisco }}</li>
        </ul>
      </div>
    </div>
    <div class="seccionCancionesRelacionadas">
      <h3 class="py-4">Otras canciones del mismo álbum </h3>
      <span>{{ filtrarCanciones }}</span>
      <ul>
        <li v-if="hayCancionesRelacionadas > 0" v-for="cancion in cancionesMismoAlbum">{{ cancion.nombre }}</li>
        <li v-else class="text-secondary">Por ahora no disponibles</li>
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
      endpoints.getListaCancionesArtista(this.id).then((lista) => {
        this.listaCancionesArtista = lista
        endpoints.getCancionesArtista(this.listaCancionesArtista).then((canciones_) => {
          this.canciones = canciones_
          return this.canciones
        })
        return this.listaCancionesArtista
      })
      return this.detalleCancion
    })
  },
  data() {
    return {
      detalleCancion: {},
      canciones: [],
      cancionesMismoAlbum: [],
      hayCancionesRelacionadas: 0
    }
  },
  computed: {
    imagenDisco() {
      return this.detalleCancion.imagenDisco
    },

    nombrePortadaDisco() {
      return 'Imagen de tapa de disco', this.detalleCancion.nombreDisco
    },

    filtrarCanciones() {
      this.canciones.forEach((cancion) => {
        if (cancion.nombreDisco === this.detalleCancion.nombreDisco && cancion.nombre != this.detalleCancion.nombre) {
          this.cancionesMismoAlbum.push(cancion)
          this.hayCancionesRelacionadas++
        }
        return this.cancionesMismoAlbum
      })
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

.seccionCancionesRelacionadas ul {
  width: 50%;
  margin: 0 auto;
  padding-left: 0;
}

.seccionCancionesRelacionadas li {
  margin-bottom: 10px;
  list-style-type: none;
  text-align: center;
}
</style>