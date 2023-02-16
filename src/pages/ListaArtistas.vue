<template>
  <div>
    <h1>Artistas ({{ artistas.length }})</h1>
    <div>
      <ArtistaCard/>
    </div>
  </div>
</template>

<script>
import ArtistaCard from '../components/ArtistaCard.vue'
import axios from 'axios'

export default {
  components:{
    ArtistaCard
  },
  name: 'ListaArtistas',
  data() {
    return {
      cantidad: 0,
      artistas: []
    }
  },
  created(){
    axios.get('http://localhost:5000/artistas/').then((lista)=>{
      this.artistas=lista.data
    })
  }
}
</script>

<style>

</style>