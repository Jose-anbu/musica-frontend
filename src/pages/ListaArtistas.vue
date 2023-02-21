<template>
  <div>
    <h1>Artistas ({{ ListaArtistas.length }})</h1>
    <div>
      <div class="lista d-flex justify-content-between my-5">
        <ArtistaCard v-for="artista in ListaArtistas" 
        :id="artista.id"
        :nombre="artista.nombre"
        :genero="artista.genero"
        :pais="artista.pais"
        :biografia="artista.biografia"
        :imagen="artista.imagen"
        :canciones="artista.canciones"
        class="artistaCard"/>
      </div>
    </div>
  </div>
</template>

<script>
import ArtistaCard from '../components/ArtistaCard.vue'
import endpoints from '../endpoints'

export default {
  components: {
    ArtistaCard
  },
  name: 'ListaArtistas',
  data() {
    return {
      ListaArtistas: [],
    }
  },
  created() {
    this.getListaArtistas(0)?.then(() => {
    })
  },
  methods: {
    getListaArtistas(offset) {
      endpoints.getListaArtistas(offset).then((lista) => {
        return this.ListaArtistas = lista.data
      })
    }
  }
}
</script>

<style>
.lista{
  display: flex;
  justify-content: space-between;
}

.artistaCard {
  width: 30%;
  text-align: center;
}
</style>