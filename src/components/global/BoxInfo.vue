import { default } from './global/form/Alert.vue';
<template>
  <div class="loginbox">
    <div class="loginbox-subloginbox">
      <img class="loginbox-img" :src="getFile('img/icons', `${icon}`, 'svg')">
      <img v-if="arrow" class="loginbox__img" :src="getFile('img/icons', `arrow-down-reed`, 'svg')">
    </div>
    <div class="loginbox__box">
      <div class="loginbox-empty" v-if="emptyCart">
        <img :src="getFile('img/images', `${img}`, 'svg')">
        <h2 class="loginbox__h2">{{ title }}</h2>
      </div>
      <div v-if="texts" class="loginbox__container">
        <h2 class="loginbox__h4"> {{ titleA }} </h2>
        <div v-if="textB" class="loginbox-texts">
          <a class="loginbox__a" href="" >{{ text }}</a> &nbsp;
          <p class="loginbox__p">{{ textA }} </p>
           &nbsp; <a class="loginbox__a" href="" >{{ textB }}</a>
        </div>
        <div v-if="textC"  class="loginbox-textsa">
          <p class="loginbox__p">{{ textC }} </p>
        </div>
          <BaseButton v-if="btnlogin" label="Iniciar sesión" class="small-outline-red"/>
          
            <p v-if="newUser" class="loginbox__p2"> {{ textD }} </p>
          
      </div>
      <div class="loginbox__buttons" v-if="btns">
          <h3 class="loginbox__h3">{{ title }}</h3>
          <p class="loginbox__p">{{ text }}</p>
          <div class="loginbox__btns">
            <BaseButton label="Iniciar sesión" class="small-outline-red"/>
            <BaseButton label="Registrarme gratis" class="small-red"/>
          </div>
      </div>
      
      <div class="loginbox__social" v-if="social">
        <h4>Continuar con:</h4>
          <div class="loginbox__social-box">
            <img :src="getFile('img/icons', `facebook`, 'svg')">
            <img :src="getFile('img/icons', `twitter`, 'svg')">
            <img :src="getFile('img/icons', `linkedin`, 'svg')">
            <img :src="getFile('img/icons', `instagram`, 'svg')">
          </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
  },
  titleA: {
    type: String,
  },
  subtible: {
    type: String,
  },
  text: {
    type: String,
  },
  textA: {
    type: String,
  },
  textB: {
    type: String,
  },
  textC: {
    type: String,
  },
  textD: {
    type: String,
  },
  icon: {
    type: String,
  },
  img: {
    type: String,
  },
  link: {
    type: String,
  },
  linkA: {
    type: String,
  },
  linkB: {
    type: String,
  },
  emptyCart: {
    type: Boolean,
    default: false,
  },
  texts: {
    type: Boolean,
    default: false,
  },
  btns: {
    type: Boolean,
    default: false,
  },
  social: {
    type: Boolean,
    default: false,
  },
  btnlogin: {
    type: Boolean,
    default: false,
  },
  newUser: {
    type: Boolean,
    default: false,
  },
  arrow: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped>
.loginbox {
  position: relative;
  cursor: pointer;
  transition: all ease .3s;
  z-index: 9999;

  &__container{
    display: grid;
    height: fit-content;
    gap: 8px;
  }

  &__h4{
    font-size: 16px;
    font-weight: 600;
    text-align: center;
  }
  &__h3{
    font-size: 18px;
    font-weight: 400;
  }
  &__h2{
    font-size: 20px;
    font-weight: 800;
  }
  &__p{
    font-size: 14px;
  }
  &__p2{
    text-align: center;
    font-size: 12px;
    padding: 6px;
    height: 50px;
  }
  &__a{
    font-size: 14px;
    text-decoration: none;
    color: #EC3337;

    &:hover{
      text-decoration: underline;
    }
  }

  &-empty{
    display: grid;
    place-items: center;
    opacity: .5;

    h2{
      opacity: .5;
    }
  }
  &-texts{
    display: flex;
    text-align: center;
    justify-content: center;
  }
  &-textsa{
    display: flex;
    text-align: center;
    height: 40px;
  }
  &__buttons{
    display: grid;
    gap: 10px;
  }

  &__btns{
    display: grid;
    gap: 8px;
  }

    &-img{
        height: 18px;
        filter: grayscale(100%);
        transition: all ease .3s;
    }
    &:hover &-img{
      filter: grayscale(0%);
      transition: all ease .3s;
    }
    &__img{
      display: block;
      height: 6px;
      transition: all ease .3s;
      filter: grayscale(100%);
    }

    &:hover &__img{
        transform: rotateZ(180deg);
        filter: grayscale(0%);
        transition: all ease .3s;
    }

  &-subloginbox{
    display: flex;
    gap: 5px;
    align-items: center;
  }
  &__box{
    display: grid;
    gap: 8px;
    z-index: 9999;
    position: absolute;
    background: white;
    cursor: default;
    overflow: hidden;
    border-radius: 0px 0px 10px 10px;
    transition: all ease .5s;
    box-shadow: gray 1px 2px 4px;
    width: 0px;
    height: 0;
    padding: 0px;
    right: 0;

    @media (max-width: 600px) {
      left: -45px;
      z-index: 9999;
    }
  }

  &:hover &__box{
    transition: all ease .5s;
    animation: boxes .5s ease;
    width: 270px;
    height: fit-content;
    padding: 16px;
    z-index: 9999;
    }

    &__social{
      display: grid;
      gap: 10px;
      place-items: center;

      h4{
        opacity: 0.5;
        font-weight: 600;
      }
      &-box{
        display: flex;
        gap: 8px;
        img{
          height: 30px;
        }
      }
    }
}
@keyframes boxes {
  0%{
   width: 1px;
   padding: 0px;
   height: 0px;
  }
  50%{
    width: 1px;
    padding: 0px;
  }
  80%{
    width: 1px;
    padding: 0px;
  }
  100%{
    width: 100%;
    padding: 0px;
  }
}
</style>