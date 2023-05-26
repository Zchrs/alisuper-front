<template>
  <div class="loginbox">
    <div class="loginbox-subloginbox">
      <img class="loginbox-img" :src="getFile('img/icons', `${icon}`, 'svg')">
      <img class="loginbox__img" :src="getFile('img/icons', `arrow-down`, 'svg')">
    </div>
    <div class="loginbox__box">
      <h2>{{ title }}</h2>
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
  icon: {
    type: String,
  },
  link: {
    type: String,
  },
});
</script>

<style lang="scss" scoped>
.loginbox {
  position: relative;
  cursor: pointer;

    &-img{
        height: 18px;
    }
    &__img{
      display: block;
      height: 6px;
      transition: all ease .3s;
    }

    &:hover &__img{
        transform: rotateZ(180deg);
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
    text-align: center;
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