<template>
  <footer class="footer">
    <div class="footer-up">
      <a class="footer-up__a" href="#">Volver arriba</a>
    </div>
    <div class="footer-middle">
      <div class="footer-middle__contain">
        <div class="footer-middle__links">
          <h2>Alisuper</h2>
          <a href="">Trabaja con nosotros</a>
          <a href="">Sobre nosotros</a>
          <a href="">Blog</a>
          <a href="">Tecnología</a>
        </div>
      
      <div class="footer-middle__links">
        <h2>Gana con Alisuper</h2>
        <a href="">Proveedor Alisuper</a>
        <a href="">Programa de afiliados</a>
        <a href="">Vender aplicaciones</a>
        <a href="">Anuncia con nosotros</a>
        <a href="">Super deliver</a>
      </div>
      <div class="footer-middle__links">
        <h2>Productos ágiles</h2>
        <a href="">Redimir puntos</a>
        <a href="">Recargar saldo</a>
        <a href="">Convertidor de divisas (proximamente)</a>
        <a href="">Comprar ALS (Alisuper Token)</a>
        <a href="">Comprar con ALS</a>
        <a href="">Comprar NFT</a>
      </div>
      <div class="footer-middle__links">
        <h2>Centro de ayuda</h2>
        <a href="">Preguntas frecuentes</a>
        <a href="">Contacto</a>
        <a href="">Haznos un (PQRS)</a>
        <a href="">Políticas de cambio y devoluciones</a>
        <a href="">Cambios y devoluciones</a>
        <a href="">Actualizar datos.</a>
      </div>
    </div>
    </div>
    <div class="footer-down">
      <h1>Footer</h1>
    </div>
  </footer>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.footer{
  margin-top: 50px;
  &-up{
    display: grid;
    padding: 20px 0;
    place-items: center;
    background: #727376;

    &__a{
      text-decoration: none;
      color: white;
      font-size: 18px;
      font-weight: 600;
    }
  }
  &-middle{
    display: grid;
    padding: 24px;
    background: #4c4747;
    place-items: center;

    &__contain{
      display: grid;
      width: 75%;
      grid-template-columns: repeat(4, 1fr);
      height: fit-content;
      gap: 12px;
      
          @media (max-width: 700px) {
            grid-template-columns: repeat(2, 1fr);
            width: 100%;
          }
    }

    &__links{
      
      width: 100%;
      display: grid;
      height: fit-content;
      
      gap: 10px;
      a{
        color: white;
        text-decoration: none;
        font-size: 16px;
        font-weight: 200;
      }
      h2{
        font-weight: 500;
        font-size: 18px;
      }
    }
  }
  &-down{
    background: black;
  }
}
</style>