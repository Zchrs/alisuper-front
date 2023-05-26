import { default } from './global/form/Alert.vue';
<template>
  <div class="loginbox">
    <div class="loginbox-subloginbox">
      <img class="loginbox-img" :src="getFile('img/icons', `${icon}`, 'svg')">
      <img class="loginbox__img" :src="getFile('img/icons', `arrow-down-reed`, 'svg')">
    </div>
    <div class="loginbox__box">
      <div class="loginbox-empty" v-if="emptyCart">
        <img :src="getFile('img/images', `${img}`, 'svg')">
        <h2>{{ title }}</h2>
      </div>
      <a href="" > {{ text }} </a>
      <p> {{ textA }} </p>
      <a href="" > {{ textB }} </a>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
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
  }
});
</script>

<style lang="scss" scoped>
.loginbox {
  position: relative;
  cursor: pointer;
  transition: all ease .3s;

  &-empty{
    display: grid;
    place-items: center;
    opacity: .5;

    h2{
      opacity: .5;
    }
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
    position: absolute;
    background: white;
    cursor: default;
    overflow: hidden;
    border-radius: 0px 0px 10px 10px;
    transition: all ease .3s;
    width: 0px;
    height: 0;
    padding: 0px;
    right: 0;
 
  }

  &:hover &__box{
    transition: all ease .3s;
    animation: boxes .3s ease;
    width: 250px;
    height: fit-content;
    padding: 16px;
    }

}
@keyframes boxes {
  0%{
   transform: scaleX(0);
  }
  50%{
    transform: scaleX(0);
  }
  90%{
    transform: scaleX(0);
  }
  100%{
    transform: scaleX(1);
  }
}
</style>