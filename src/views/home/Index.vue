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
    <div class="home-container">
      <h2>Compra por categoría</h2>
    </div>
  </section>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.home{
  background: rgb(241, 237, 237);
  border-radius: 18px 18px 0px 0px;
  overflow: hidden;

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
  &__strong{
    position: relative;
    text-align: center;
    z-index: 30;
  }
  
  &-header{
    display: grid;
    height: 400px;
    overflow: hidden;

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
  &-container{
    display: grid;
    padding: 24px;
  }
}
</style>