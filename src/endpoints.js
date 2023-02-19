import axios from 'axios';

export default{
    async getListaArtistas(offset){
        return await axios.get('http://localhost:5000/artistas')
    }
}

// axios.get('http://localhost:5000/artistas/').then((lista)=>{
    //   this.artistas=lista.data
    // }),