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
          <a href="">Compra y recoge</a>
          <a href="">Franquicias</a>
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
          <a href="">Comprar AST (Alisuper Token)</a>
          <a href="">Comprar con AST</a>
          <a href="">Comprar NFT</a>
        </div>
        <div class="footer-middle__links">
          <h2>Centro de ayuda</h2>
          <a href="">Preguntas frecuentes</a>
          <a href="">Contacto</a>
          <a href="">Haznos un (PQRS)</a>
          <a href="">Políticas de cambio y devoluciones</a>
          <a href="">Cambios y devoluciones</a>
          <a href="">Actualizar datos</a>
        </div>
        <div class="footer-middle__links">
          <h2>Información legal</h2>
          <a href="">Términos y condiciones</a>
          <a href="">Términos del Marketplace</a>
          <a href="">Política de privacidad</a>
          <a href="">Autorización de tratamiento de datos</a>
          <a href="">Superintendencia de industria y comercio (SIC)</a>
          <a href="">Derecho de retracto</a>
          <a href="">Solicitud de reversiones</a>
        </div>
        <div class="footer-middle__newsletter">
          <div class="footer-middle__content">
            <h2>Suscríbete a nuestro newsletter</h2>
            <p>Entérate de nuestras ofertas y lanzamientos exclusivos</p>
            <div class="footer-middle__group">
              <BaseInput2 placeholder="Escribe tu correo" class="normal" />
              <BaseButton class="green" label="Suscribirme"/>
            </div>
            <div class="footer-middle__group2">
              <BaseCheckbox />
              <p>
                Acepto términos y condiciones, términos y condiciones 
                marketplace y autorizo el tratamiento de mis datos personales 
                con las siguientes condiciones.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-down">
      <div class="footer-down__container">
        <img :src="getFile('img/vector', `logo`, 'svg')">
        <p>&copy; Alisuper 2023 </p>
      </div>
    </div>
  </footer>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.footer {
  margin-top: 50px;

  &-up {
    display: grid;
    
    place-items: center;
    background: #727376;

    &__a {
      padding: 20px 0;
      text-align: center;
      width: 100%;
      height: 100%;
      text-decoration: none;
      color: white;
      font-size: 18px;
      font-weight: 600;

      &:hover{
        background: rgba(255, 255, 255, 0.086);
      }
    }
  }

  &-middle {
    display: grid;
    padding: 32px 24px;
    background: #4c4747;
    place-items: center;

    &__newsletter{
      grid-column: 2 / 5;
      grid-row: 2 / 3;
      align-items: center;
      display: grid;
      
      @media (max-width: 620px) {
        grid-row: 4;
        grid-column: 1 / 3;
      }
    }
    &__group{
      border: #575757 1px solid;
      border-radius: 18px;
      padding: 24px;
      height: fit-content;
      align-items: center;
      display: flex;
      width: 100%;
      gap: 8px;

      @media (max-width: 480px) {
        flex-direction: column;
        gap: 16px;
      }
    }
    &__group2{
      border-radius: 18px;
      padding: 0 24px;
      height: fit-content;
      align-items: center;
      display: flex;
      width: 100%;
      gap: 8px;

      p{
        color: rgb(168, 167, 167);
      }
    }
    &__content{
      display: grid;
      h2{
        font-weight: 400;
      }
      gap: 18px;
    }

    &__contain {
      display: grid;
      width: 75%;
      grid-template-columns: repeat(4, 1fr);
      height: fit-content;
      gap: 16px;

      @media (max-width: 700px) {
        grid-template-columns: repeat(2, 1fr);
        width: 100%;
      }

      @media (max-width: 399px) {
        grid-template-columns: 1fr;
        width: 100%;
      }
    }
    
    &__links {

      width: 100%;
      display: grid;
      height: fit-content;

      gap: 8px;

      a {
        color: rgb(168, 167, 167);
        text-decoration: none;
        font-size: 16px;
        font-weight: 200;

        &:hover {
          color: rgb(209, 206, 206);
        }
      }

      h2 {
        font-weight: 500;
        font-size: 18px;
        border-bottom: #575757 1px solid;
        padding-bottom: 5px;
      }
    }
  }

  &-down {
    display: grid;
    padding: 20px;
    background: black;
    place-items: center;
    &__container{
      display: flex;
      align-items: center;
      gap: 10px;
      img{
        height: 30px;
        filter: brightness(500%);
      }
    }
  }
}</style>