import axios from "axios";

export default {
  async getListaArtistas(offset) {
    return await axios.get("http://localhost:5000/artistas");
  },
  async getArtista(id) {
    let artista = await axios.get(`http://localhost:5000/artistas/${id}`);
    return artista.data;
  },
  async getCancionesArtista(canciones_) {
    let canciones = [];
    let cancion = {};
    for (let i = 0; i < canciones_.length; i++) {
      cancion = await axios.get(`http://localhost:5000/canciones/${canciones_[i]}`);
      canciones.push(cancion.data);
    }
    return canciones;
  },
  async getDetalleCancion(id){
    let cancion=await axios.get(`http://localhost:5000/canciones/${id}`)
    return cancion.data
  },
  async getCancionesMismosAlbum(id){
    let listaArtistas=await this.getListaArtistas(0)
    listaArtistas=listaArtistas.data
    let longitudListaArtistas=0
    let longitudListaCanciones=0
    longitudListaArtistas=listaArtistas.length

    for(let i=0;i<longitudListaArtistas;i++){
      longitudListaCanciones=await listaArtistas[i].canciones.length
      for(let j=0;j<longitudListaCanciones;j++){

        console.log(listaArtistas[i].nombre,': ',listaArtistas[i].canciones[j])
        
        if(listaArtistas[i].canciones[j]===id){
          console.log('Este id es igual a: ' + id)
          return listaArtistas[i].canciones
        }
      }
    }
  }
};