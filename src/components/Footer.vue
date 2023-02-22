<template>
  <div class="bg-dark text-light contenedorFooter pt-3 fixed-bottom">
    <div>
      <a href="https://www.linkedin.com/in/joseantonioburgos/" class="me-2" target="_blank" title="LinkedIn">
        <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" alt="LinkedIn" class="icono">
      </a>
      <a href="https://github.com/Jose-anbu" class="ms-2" target="_blank" title="GitHub">
        <img src="https://cdn-icons-png.flaticon.com/512/3291/3291695.png" alt="GitHub" class="icono">
      </a>
    </div>
    <p class="pt-2 textoFooter">&copy; Todos los derechos reservados - José Antonio Burgos - 2023</p>
    <p class="pt-2 textoDisplayPequenio d-md-none">&copy; Todos los derechos reservados</p>
    <p class="textoDisplayPequenio d-md-none">José Antonio Burgos - 2023</p>
  </div>
</template>

<style>
.contenedorFooter {
  box-shadow: 5px -10px 20px grey;
  font-size: 0.9rem;
  text-align: center;
}

.contenedorFooter img {
  height: 20px;
}

.icono {
  background-color: white;
  border-radius: 5px;
  transition: 400ms;
}

.icono:hover {
  box-shadow: 0px 0px 5px grey;
  transform: scale(1.2);
}

@media screen and (min-width: 768px) {
  .contenedorFooter img {
    height: 27px;
  }
}

@media screen and (min-width: 600px) and (max-width: 767px) {
  .contenedorFooter {
    font-size: 13px;
  }

  .contenedorFooter img {
    height: 18px;
  }
}

@media screen and (max-width: 599px) {
  .contenedorFooter {
    font-size: 12px;
  }

  .contenedorFooter img {
    height: 16px;
  }

  .textoFooter{
    display: none;
  }
}
</style>