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
};