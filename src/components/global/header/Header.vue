<template>
  <div class="head">
    <div class="head-top">
      <div @click="$router.push({name: 'home'})" class="head-logo">
        <img :src="getFile('img/vector', `logo`, 'svg')">
      </div>
      <div class="head-top__menu">
        <ul>
          <BoxInfo icon="user"/>
          <BoxInfo icon="cart"/>
          <li v-for="({ text }, index) in menuList"
          :key="index"
          
          >{{ text }}<i><img :src="getFile('img/icons', `arrow-down`, 'svg')"></i></li>
          
        </ul>
      </div>
    </div>

    <div class="head-menu">
        <div class="head-menu__container">
          <div>
            <InputSearch class="large" />
          </div>
          <ul>
            <li v-for="({ text, name, }, index) in buttonsList"
            :key="index"
            @click="$router.push({ name })"
            >{{ text }}</li>
          </ul>
        </div>
      </div>
  </div>
</template>

<script setup>
import BoxInfo from '../../BoxInfo.vue';


const menuList = [
  { 
    name: 'login', 
    route: 'auth/login', 
    text: 'Iniciar sesión' 
  },
  { 
    name: 'register', 
    route: 'auth/register', 
    text: 'Registrarme' 
  },
  { 
    name: 'cart', 
    route: 'cart', 
    text: 'Carrito' 
  },
  { 
    name: 'help', 
    route: 'helpcenter', 
    text: 'Ayuda' 
  },
];
const buttonsList = [
  { 
    name: 'home', 
    route: 'home', 
    text: 'Inicio' 
  },
  { 
    name: 'fruits', 
    route: 'products/fruits', 
    text: 'Frutas' 
  },
  { 
    name: 'vegetables', 
    route: 'products/vegetables', 
    text: 'Vegetales' 
  },
  { 
    name: 'grains', 
    route: 'products/grains', 
    text: 'Mercado' 
  },
];
const console = () =>{
  console.log(`Click en ${index}`);
}
</script>

<style lang="scss" scoped>
.head{
display: grid;
width: 100%;
align-items: center;

&-top{
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;

  &__menu{
    display: grid;
    align-items: center;
    ul{
      align-items: center;
      list-style: none;
      display: flex;
      gap: 20px;
      
      li{
        align-items: center;
        display: flex;
        gap: 5px;
        font-size: 1.5rem;
        cursor: pointer;
        color: black;
        font-weight: 500;
        transition: all ease .3s;

        img{
          display: block;
          height: 6px;
          transition: all ease .3s;
        }

        &:hover{
          color: #EC3337;
          transition: all ease .3s;

          img{
            transform: rotateZ(180deg);
            transition: all ease .3s;
          }
        }
      }
    }

  }
}

&-logo{
  cursor: pointer;
  img{
    height: 35px;
  }
}
&-menu{
  display: grid;
  width: 100%;
  margin: 0 auto;
  color: white;
  background: black;
  height: 250px;
  place-items: center;
  padding: 0;

  ul{
    margin-top: 0px;
    padding: 0;
    display: flex;
    list-style: none;
    gap: 20px;
    justify-content: center;

    li{
      display: grid;
      padding: 8px 38px;
      height: 45px;
      border-radius: 10px 10px 0px 0px;
      cursor: pointer;
      place-items: center;
      background: #EC3337;
      font-size: 1.6rem;
    }
  }
  &__container{
    display: grid;
    width: 100%;
    gap: 10px;
    margin-top: 55px;
  }
}
}
</style>