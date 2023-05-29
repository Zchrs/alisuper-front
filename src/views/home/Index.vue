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
          <h2></h2>
          <img :src="getFile('img/images', `granos`, 'jpg')">
        </div>
        <div  class="home-header__contain-item3">
          <h2></h2>
          <img :src="getFile('img/images', `canasta-basica`, 'jpg')">
        </div>
      </div>
    </header>
    <div class="home-container">
      <h1>Home</h1>
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
  }
  &-titles-a{
    display: grid;
    gap: 5px;
    padding-left: 0%;

    @media (max-width: 1024px) {
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
    margin-left: -130%; 
  }
  &__p{
    position: relative;
    text-align: left;
    width: 320px;
    z-index: 30;
    transform: skewX(15deg);
    transition: all ease-out .4s;
    margin-left: 140%; 
  }
  &__strong{
    position: relative;
    text-align: center;
    z-index: 30;
  }
  &__h3{
    position: relative;
    font-size: 22px;
    text-align: left;
    z-index: 30;
    transition: all ease-out .4s;
    transform: skewX(15deg);
    margin-left: -230%; 

    @media (max-width: 1024px) {
      font-size: 18px;
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

    &__contain{
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(4, 1fr);
      display: grid;
      width: 100%;
      height: 100%;
      gap: 5px;

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
        img{
          position: absolute;
          width: 120%;
          top: -40px;
          transform: skewX(15deg);
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
        }
        &:hover p{
          transition: all ease-out .4s;
          margin-left: 3%;
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


        img{
          position: absolute;
          width: 120%;
          left: -30px;
          transform: skewX(15deg);
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
        }
        &:hover h4{
          transition: all ease-out .4s;
          margin-left: 3%;
        }
      }
      &-item2{
        grid-row: 3 / 6;
        grid-column: 3 ;
        width: auto ;
        height: auto ;
         transform: skewX(-15deg);
         background: green;
         overflow: hidden;
         border-radius: 15px;

        img{
          position: absolute;
          width: 125%;
          height: 100%;
          left: -30px;
          transform: skewX(15deg);
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
      }
      &-item3{
        grid-row: 3 / 6 ;
        grid-column: 4 ;
        width: auto ;
        height: auto ;
         transform: skewX(-15deg);
         background: palevioletred;
         overflow: hidden;
         border-radius: 15px;

        img{
          position: absolute;
          height: 100%;
          left: -30px;
          transform: skewX(15deg);
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
      }
    }
  }
  &-container{
    display: grid;
    padding: 24px;
  }
}
</style>