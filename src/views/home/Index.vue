<template>
  <section class="home">
    <header class="home-header">
      <div class="home-header__contain">
        <div  class="home-header__contain-item">
          <img :src="getFile('img/images', `vegetales`, 'jpg')">
          <div class="home-titles">
            <h2 class="home__h2">
              Date un vistazo por nuestra sección vegetales.
            </h2>
            <p class="home__p">
              Nuestros vegetales 100% orgánicos y duraderos, son
              cultivados mediante procesos hydropóndicos.
              <strong class="home__strong"><a href="">Leer más</a></strong>
            </p>
          </div>
        </div>
        <div  class="home-header__contain-item1">
          <img :src="getFile('img/images', `frutas`, 'jpg')">
          <div class="home-titles-a">
            <h3 class="home__h3">
              Date un vistazo por nuestra sección de frutas.
            </h3>
            <h4 class="home__h4">
              Nuestros vegetales 100% orgánicas y duraderas, son
              cultivadas mediante procesos hydropóndicos.
              <strong class="home__strong"><a href="">Leer más</a></strong>
            </h4>
          </div>
        </div>
        <div  class="home-header__contain-item2">
          <img :src="getFile('img/images', `granos`, 'jpg')">
          <div class="home-titles-b">
            <h5 class="home__h5">
              Disfruta de nuestra gran variedad
            </h5>
            <h6 class="home__h6">
              El 80% de nuestros granos 100% orgánicos y duraderos, son
              cultivados mediante procesos hydropóndicos.
              <strong class="home__strong"><a href="">Leer más</a></strong>
            </h6>
          </div>
        </div>
        <div  class="home-header__contain-item3">
          <img :src="getFile('img/images', `canasta-basica`, 'jpg')">
          <div class="home-titles-b">
            <h7 class="home__h5">
              Estamos trabajando en esta sección
            </h7>
            <h8 class="home__h6">
              El 80% de nuestros granos 100% orgánicos y duraderos, son
              cultivados mediante procesos hydropóndicos.
              <strong class="home__strong"><a href="">Leer más</a></strong>
            </h8>
          </div>
        </div>
      </div>
    </header>
    <div class="home__container">
      <h2>Legumbres</h2>
      <div class="home__container-contain">
        <CardProducts
          img="tomates"
          description="Tomates frescos de la más alta calidad, 100% orgánicos."
          title="Precio por 1kg"
          price="Cop $3.990 "
          previous-price="Cop $4.200"
          discount="5%"
          member="10% de descuento para miembros premium"
          jpg="true"
        />
        <CardProducts
          img="cebolla"
          description="cebolla fresca de la más alta calidad, 100% orgánica."
          title="Precio por 1kg"
          price="Cop $1.365"
          previous-price="Cop $1.440"
          discount="5%"
          member="10% de descuento para miembros premium"
          jpg="true"
        />
        <CardProducts
          img="cebolla-larga"
          description="Cebolla larga fresca de la más alta calidad, 100% orgánica."
          title="Precio por 1kg"
          price="Cop $2.850 "
          previous-price="Cop $3.000"
          discount="5%"
          member="10% de descuento para miembros premium"
          jpg="true"
        />
        <CardProducts
          img="ajo"
          description="Ajo fresco de la más alta calidad, 100% orgánico."
          title="Precio por 50gr"
          price="Cop $2.094"
          previous-price="Cop $2.250"
          discount="5%"
          member="10% de descuento para miembros premium"
          jpg="true"
        />
        <CardProducts
          img="pimenton"
          description="Pimenton rojo fresco de la más alta calidad, 100% orgánico."
          title="Precio por 1kg"
          price="Cop $2.280"
          previous-price="Cop $2.400"
          discount="5%"
          member="10% de descuento para miembros premium"
          jpg="true"
        />
      </div>
    </div>
    <div class="home__container">
      <h2>Frutas</h2>
      <div class="home__container-contain">
      <CardProducts
        img="manzana"
        description="Manzana roja de la más alta calidad, 100% orgánicas."
        title="Precio por 1kg"
        price="Cop $11.384"
        previous-price="Cop $11.984"
        discount="5%"
        member="10% de descuento para miembros premium"
        jpg="true"
      />
      <CardProducts
        img="banano"
        description="Bananos nacionales de la más alta calidad, 100% orgánicas."
        title="Precio por 1kg"
        price="Cop $2.850"
        previous-price="Cop $3.000"
        discount="5%"
        member="10% de descuento para miembros premium"
        jpg="true"
      />
      <CardProducts
        img="mora"
        description="Mora en bolsa nacional de la más alta calidad, 100% orgánicas."
        title="Precio por 1kg"
        price="Cop $12.144"
        previous-price="Cop $12.784"
        discount="5%"
        member="10% de descuento para miembros premium"
        jpg="true"
      />
      <CardProducts
        img="uvas"
        description="Uva nacional de la más alta calidad, 100% orgánicas."
        title="Precio por 1kg"
        price="Cop $6.840"
        previous-price="Cop $7.200"
        discount="5%"
        member="10% de descuento para miembros premium"
        jpg="true"
      />
      <CardProducts
        img="mango"
        description="Mango nacional de la más alta calidad, 100% orgánicos."
        title="Precio por 1kg"
        price="Cop $3.325"
        previous-price="Cop $3.500"
        discount="5%"
        member="10% de descuento para miembros premium"
        jpg="true"
      />
      </div>
    </div>
    <div class="home__container">
      <h2>Granos</h2>
      <div class="home__container-contain">
      <CardProducts
        img="frijol"
        description="Frijol rojo nacional de la más alta calidad, 100% orgánicos."
        title="Precio por 1kg"
        price="Cop $11.384"
        previous-price="Cop $11.984"
        discount="5%"
        member="10% de descuento para miembros premium"
        jpg="true"
      />
      <CardProducts
        img="garbanzo"
        description="Garbanzo nacionale de la más alta calidad, 100% orgánicos."
        title="Precio por 1kg"
        price="Cop $2.850"
        previous-price="Cop $3.000"
        discount="5%"
        member="10% de descuento para miembros premium"
        jpg="true"
      />
      <CardProducts
        img="lenteja"
        description="Lenteja en bolsa nacional de la más alta calidad, 100% orgánicas."
        title="Precio por 1kg"
        price="Cop $12.144"
        previous-price="Cop $12.784"
        discount="5%"
        member="10% de descuento para miembros premium"
        jpg="true"
      />
      <CardProducts
        img="arveja"
        description="Arveja nacional de la más alta calidad, 100% orgánica."
        title="Precio por 1kg"
        price="Cop $6.840"
        previous-price="Cop $7.200"
        discount="5%"
        member="10% de descuento para miembros premium"
        jpg="true"
      />
      <CardProducts
        img="maiz"
        description="Maíz nacional de la más alta calidad, 100% orgánicos."
        title="Precio por 1kg"
        price="Cop $3.325"
        previous-price="Cop $3.500"
        discount="5%"
        member="10% de descuento para miembros premium"
        jpg="true"
      />
      </div>
    </div>
  </section>
</template>

<script setup>
import CardProducts from "../../components/CardProducts.vue";


</script>

<style lang="scss" scoped>
@keyframes smooth {
  0%{
    opacity: 0;
    transform: translateX(50%);
  }
  100%{
    transform: translateX(0%);
    opacity: 1;
  }
}
.home{
  animation: smooth .5s ease;
  display: flex;
  flex-direction: column;
  gap: 24px;
  height: fit-content;
  border-radius: 18px 18px 0px 0px;

  &-titles{
    display: grid;
    gap: 5px;
    padding-left: 13%;

    @media (max-width: 1024px) {
      padding-left: 20%;
    }
    @media (max-width: 920px) {
      padding-left: 5%;
    }
  }
  &-titles-a{
    display: grid;
    gap: 5px;
    padding-left: 0%;

    @media (max-width: 1024px) {
      padding-left: 5%;
    }
    @media (max-width: 920px) {
      padding-left: 0%;
    }
  }
  &-titles-b{
    display: grid;
    gap: 5px;
    padding-left: 8%;

    @media (max-width: 1024px) {
      padding-left: 5%;
    }
    @media (max-width: 920px) {
      padding-left: 2%;
    }
  }
  &-titles-c{
    display: grid;
    gap: 5px;
    padding-left: 8%;

    @media (max-width: 920px) {
      padding-left: 5%;
    }
  }

  &__container{
    display: grid;
    padding: 8px;
    gap: 18px;

    &-contain{
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 20px;

      @media (max-width: 1024px) {
        grid-template-columns: repeat(4, 1fr);
      }
      @media (max-width: 900px) {
        grid-template-columns: repeat(3, 1fr);
      }
      @media (max-width: 700px) {
        grid-template-columns: repeat(2, 1fr);
      }
      @media (max-width: 300px) {
        grid-template-columns: 1fr;
      }
    }
  }

  &__h2{
    position: relative;
    font-size: 22px;
    text-align: left;
    z-index: 30;
    transition: all ease-out .4s;
    transform: skewX(15deg);
    margin-left: -150%; 

    @media (max-width: 920px) {
      transform: skewX(0deg);
      margin-left: -170%; 
    }
    @media (max-width: 399px) {
      transform: skewX(0deg);
      width: 270px;
    }
  }
  &__p{
    position: relative;
    text-align: left;
    width: 320px;
    z-index: 30;
    transform: skewX(15deg);
    transition: all ease-out .4s;
    margin-left: 140%; 
    @media (max-width: 1024px) {
      transform: skewX(15deg);
    }
    @media (max-width: 920px) {
      transform: skewX(0deg);
    }
    @media (max-width: 399px) {
      transform: skewX(0deg);
      width: 270px;
    }
  }
  &__strong{
    position: relative;
    text-align: center;
    z-index: 30;
  }
  &__h3{
    position: relative;
    font-size: 20px;
    text-align: left;
    z-index: 30;
    transition: all ease-out .4s;
    transform: skewX(15deg);
    margin-left: -230%; 

    @media (max-width: 1024px) {
      font-size: 18px;
    }

    @media (max-width: 920px) {
      transform: skewX(0deg);
    }
        @media (max-width: 399px) {
      transform: skewX(0deg);
      width: 270px;
    }
  }
  &__h4{
    position: relative;
    text-align: left;
    width: 320px;
    z-index: 30;
    transform: skewX(15deg);
    transition: all ease-out .4s;
    margin-left: 140%; 
    font-weight: 400;

    @media (max-width: 920px) {
      transform: skewX(0deg);
      width: 400px;
    }
    @media (max-width: 650px) {
      transform: skewX(0deg);
      width: 360px;
    }
        @media (max-width: 399px) {
      transform: skewX(0deg);
      width: 270px;
    }
  }
  &__h5{
    position: relative;
    font-size: 20px;
    text-align: left;
    z-index: 30;
    transition: all ease-out .4s;
    transform: skewX(15deg);
    margin-left: -230%; 

    @media (max-width: 1024px) {
      font-size: 16px;
    }

    @media (max-width: 920px) {
      transform: skewX(0deg);
      width: 400px;
    }
    @media (max-width: 650px) {
      transform: skewX(0deg);
      width: 180px;
    }
    @media (max-width: 399px) {
      width: 120px;
    }
  }
  &__h6{
    position: relative;
    text-align: left;
    width: 250px;
    z-index: 30;
    transform: skewX(15deg);
    transition: all ease-out .4s;
    margin-left: 140%; 
    font-weight: 400;
    font-size: 14px;
    @media (max-width: 1024px) {
      font-size: 12px;
      width: 200px;
    }

    @media (max-width: 920px) {
      transform: skewX(0deg);
      width: 300px;
    }
    @media (max-width: 650px) {
      transform: skewX(0deg);
      width: 200px;
    }
    @media (max-width: 399px) {
      width: 120px;
      padding: 10px 0;
    }
  }
  &__h7{
    position: relative;
    font-size: 20px;
    font-weight: 700;
    text-align: left;
    z-index: 30;
    transition: all ease-out .4s;
    transform: skewX(15deg);
    margin-left: -230%; 

    @media (max-width: 1024px) {
      font-size: 16px;
    }
    @media (max-width: 920px) {
      transform: skewX(0deg);
    }
  }
  &__h8{
    position: relative;
    text-align: left;
    width: 250px;
    z-index: 30;
    transform: skewX(15deg);
    transition: all ease-out .4s;
    margin-left: 140%; 
    font-weight: 400;
    font-size: 14px;
    @media (max-width: 1024px) {
      font-size: 12px;
      width: 200px;
    }
    @media (max-width: 920px) {
      transform: skewX(0deg);
    }
  }
  
  &-header{
    display: grid;
    height: 400px;
    overflow: hidden;
    border-radius: 18px;

    @media (max-width: 920px) {
      height: 800px;
      overflow: visible;
    }

    &__contain{
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(4, 1fr);
      display: grid;
      width: 100%;
      height: 100%;
      gap: 5px;

      @media (max-width: 920px) {
        grid-template-rows: repeat(5, 1fr);
        overflow: visible;
      }
   

      &-item{
        display: grid;
        place-items: center;
        grid-row: 1 / 6 ;
        grid-column: 1 / 3 ;
        width: 120% ;
        height: 100% ;
        transform: skewX(-15deg);
        margin-left: -17%;
        overflow: hidden;
        border-radius: 15px;

        @media (max-width: 920px) {
          transform: skewX(0deg);
          width: 100% ;
          margin-left: 0%;
          grid-column: 1 / 6 ;
          grid-row: 1 / 3 ;
        }

        img{
          position: absolute;
          width: 120%;
          top: -40px;
          transform: skewX(15deg);

          @media (max-width: 920px) {
            transform: skewX(0deg);
            top: 0px;
            width: 100%;
            height: 100%;
          }
        }
        &::before{
          content: "";
          transition: all ease .4s;
          position: absolute;
          width: 100%;
          height: 100%;
          z-index: 10;
          left: 0;
        }
        
        &:hover::before{
          z-index: 10;
          transition: all ease .4s;
          background: rgba(255, 255, 255, 0.541);
          backdrop-filter: blur(2px);
        }
        &:hover h2{
          transition: all ease-out .4s;
          margin-left: 0%;
          font-weight: 600;
        }
        &:hover p{
          transition: all ease-out .4s;
          margin-left: 3%;

          @media (max-width: 1024px) {
            margin-left: 4%;
          }
          @media (max-width: 920px) {
            margin-left: 0%;
          }
        }
      }
      &-item1{
        display: grid;
        place-items: center;
        grid-row: 1 / 3;
        grid-column: 3 / 5 ;
        margin-left: 54px;
        width: auto ;
        height: auto ;
        transition: all ease .4s;
         transform: skewX(-15deg);
         background: rebeccapurple;
         overflow: hidden;
         border-radius: 15px;

         @media (max-width: 920px) {
          grid-row: 3 / 5;
          grid-column: 1 / 6 ;
          margin-left: 0;
          transform: skewX(0deg);
        }

        img{
          position: absolute;
          width: 120%;
          left: -30px;
          transform: skewX(15deg);

          @media (max-width: 920px) {
            transform: skewX(0deg);
            height: 100%;
          }
        }

        &::before{
          content: "";
          transition: all ease .4s;
          position: absolute;
          width: 100%;
          height: 100%;
          z-index: 10;
          left: 0;
        }
        
        &:hover::before{
          z-index: 10;
          transition: all ease .4s;
          background: rgba(255, 255, 255, 0.541);
          backdrop-filter: blur(2px);
        }
        &:hover h3{
          transition: all ease-out .4s;
          margin-left: 0%;

          @media (max-width: 700px) {
            margin-left: 2%;
          }
        }
        &:hover h4{
          transition: all ease-out .4s;
          margin-left: 3%;

          @media (max-width: 1024px) {
            margin-left: 4%;
          }
          @media (max-width: 920px) {
            margin-left: 0%;
          }
          @media (max-width: 700px) {
            margin-left: 2%;
          }
        }
      }
      &-item2{
        display: grid;
        place-items: center;
        grid-row: 3 / 6;
        grid-column: 3 ;
        width: auto ;
        height: auto ;
         transform: skewX(-15deg);
         background: green;
         overflow: hidden;
         border-radius: 15px;

         @media (max-width: 920px) {
          transform: skewX(0deg);
          grid-row: 5 / 8;
          grid-column: 1 / 3 ;
        }

        img{
          position: absolute;
          width: 125%;
          height: 100%;
          left: -30px;
          transform: skewX(15deg);

          @media (max-width: 920px) {
            transform: skewX(0deg);
          }
        }
                &::before{
          content: "";
          transition: all ease .4s;
          position: absolute;
          width: 100%;
          height: 100%;
          z-index: 10;
          left: 0;
        }
        
        &:hover::before{
          z-index: 10;
          transition: all ease .4s;
          background: rgba(255, 255, 255, 0.541);
          backdrop-filter: blur(2px);
        }
        &:hover h5{
          transition: all ease-out .4s;
          margin-left: -3%;

          @media (max-width: 1024px) {
            margin-left: 2%;
          }
        }
        &:hover h6{
          transition: all ease-out .4s;
          margin-left: 4%;

          @media (max-width: 1024px) {
            margin-left: 8%;
          }
          
          @media (max-width: 920px) {
            margin-left: 2%;
          }
        }
      }
      &-item3{
        
        display: grid;
        place-items: center;
        grid-row: 3 / 6 ;
        grid-column: 4 ;
        width: auto ;
        height: auto ;
         transform: skewX(-15deg);
         background: palevioletred;
         overflow: hidden;
         border-radius: 15px;

         @media (max-width: 920px) {
          transform: skewX(0deg);
          grid-row: 5 / 8;
          grid-column: 3 / 5 ;
        }

        img{
          position: absolute;
          height: 100%;
          left: -30px;
          transform: skewX(15deg);

          @media (max-width: 920px) {
            width: 100%;
            transform: skewX(0deg);
            left: 0px;
          }
        }
                &::before{
          content: "";
          transition: all ease .4s;
          position: absolute;
          width: 100%;
          height: 100%;
          z-index: 10;
          left: 0;
        }
        
        &:hover::before{
          z-index: 10;
          transition: all ease .4s;
          background: rgba(255, 255, 255, 0.541);
          backdrop-filter: blur(2px);
        }

        &:hover::before{
          z-index: 10;
          transition: all ease .4s;
          background: rgba(255, 255, 255, 0.541);
          backdrop-filter: blur(2px);
        }
        &:hover h7{
          transition: all ease-out .4s;
          margin-left: -3%;

          @media (max-width: 1024px) {
            margin-left: 2%;
          }
        }
        &:hover h8{
          transition: all ease-out .4s;
          margin-left: 4%;

          @media (max-width: 1024px) {
            margin-left: 8%;
          }
          
          @media (max-width: 920px) {
            margin-left: 2.2%;
          }
        }
      }
    }
  }
}
</style>