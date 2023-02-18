const routes = [
  {
    name:'listaArtistas',
    path:'/',
    component:()=>import('./pages/ListaArtistas.vue')
  },
  {
    name:'artista',
    path:'/artista/:id',
    component:()=>import('./pages/Artista.vue')
  },
  {
    name:'cancion',
    path:'/cancion/:id',
    component:()=>import('./pages/Cancion.vue')
  }
];

export default routes;