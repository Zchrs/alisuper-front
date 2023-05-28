<template>
  <section class="home">
    <header class="home-header">
      <div class="home-header__contain">
        <div  class="home-header__contain-item">
          <img :src="getFile('img/images', `vegetales`, 'jpg')">
        </div>
        <div  class="home-header__contain-item1">
          <img :src="getFile('img/images', `frutas`, 'jpg')">
        </div>
        <div  class="home-header__contain-item2">
          <img :src="getFile('img/images', `granos`, 'jpg')">
        </div>
        <div  class="home-header__contain-item3">
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
      }
      &-item1{
        grid-row: 1 / 3;
        grid-column: 3 / 5 ;
        margin-left: 54px;
        width: auto ;
        height: auto ;
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
      }
    }
  }
  &-container{
    display: grid;
    padding: 24px;
  }
}
</style>