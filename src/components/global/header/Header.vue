import { default } from '../form/Alert.vue';
<template>
  <div class="head">
    <div class="head-top">
      <div @click="$router.push({ name: 'home' })" class="head-logo">
        <img :src="getFile('img/vector', `logo`, 'svg')">
      </div>
      <div class="head-top__menu">
        <ul>
          <BoxInfo 
            arrow="true"
            icon="user-red" 
            btns="true" 
            title="Bienvenido" 
            social="true" />
          <BoxInfo 
            arrow="true"
            icon="cart-red" 
            title="¡Carrito vacío!" 
            text="Inicia sesión" 
            text-a="o" 
            text-b="Regístrate gratis"
            empty-cart="true" 
            img="empty-cart" 
            texts="true" 
          />
          <BoxInfo 
            arrow="true"
            icon="letter" 
            texts="true" 
            title-a="No tienes mensajes sin leér"
            text-c="Aquí encontrarás tus mensajes sin leer. Inicia sesión ahora." 
            btnlogin="true" 
            new-user="true"
            text-d="¿Nuevo en Alisuper? ¡Haz clic en registrarme y comienza a comprar o vender!" 
          />
          <lang />
          <li v-for="({ text, icon, arrow }, index) in menuList" :key="index">{{ text }}
            <i v-if="arrow">
              <img :src="getFile('img/icons', `${icon}`, 'svg')">
            </i>
          </li>

        </ul>
      </div>
    </div>

    <div class="head-menu">
      <div class="head-menu__container">
        <div>
          <InputSearch class="large" />
        </div>
        <ul>
          <li v-for="({ text, name, }, index) in buttonsList" :key="index" @click="$router.push({ name })">{{ text }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import Lang from "../../Lang.vue";
import { ref } from "vue";

const setActive = ref(0);

const i = defineProps({
  arrow: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
  }
})

const menuList = [
  {
    name: 'login',
    route: 'auth/login',
    text: 'Registrarme',
    icon: 'arrow-down-reed',
    // arrow: true,
  },
  {
    name: 'help',
    route: 'helpcenter',
    text: 'Ayuda',
    icon: 'arrow-down-reed',
    // arrow: true,
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
const console = () => {
  console.log(`Click en ${index}`);
}
</script>

<style lang="scss" scoped>
.head {
  display: grid;
  width: 100%;
  align-items: center;


  &-top {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: white;
    width: 100%;
    z-index: 999;
    position: sticky;
    top: 0;


    @media (max-width: 600px) {
      position: fixed;
      top: 0;
      z-index: 999;
      width: 100%;
      display: grid;
      height: 70px;
      border-bottom: rgba(0, 0, 0, 0.559) 1px solid;
    }

    &__menu {
      position: relative;
      display: flex;
      align-items: center;
      width: fit-content;
      background: transparent;
      z-index: 9999;


      @media (max-width: 600px) {
        position: fixed;
        display: none;
        justify-content: center;
        z-index: 10000;
        top: 70px;
        left: 0;
        background: white;
        width: 100%;
        height: 50px;
      }

      ul {
        align-items: center;
        list-style: none;
        display: flex;
        gap: 20px;

        li {
          align-items: center;
          display: flex;
          gap: 5px;
          font-size: 1.5rem;
          cursor: pointer;
          color: black;
          font-weight: 500;
          transition: all ease .3s;

          img {
            display: block;
            height: 6px;
            transition: all ease .3s;
            filter: grayscale(100%);
          }

          &:hover {
            color: #EC3337;
            transition: all ease .3s;

            img {
              transform: rotateZ(180deg);
              transition: all ease .3s;
              filter: grayscale(0%);
            }
          }
        }
      }

    }
  }

  &-logo {
    cursor: pointer;

    img {
      height: 35px;

      @media (max-width: 600px) {
        height: 45px;
      }

      @media (max-width: 399px) {
        height: 30px;
      }
    }
  }

  &-menu {
    display: grid;
    width: 100%;
    margin: 0 auto;
    color: white;
    background: black;
    height: 250px;
    place-items: center;
    padding: 0;

    @media (max-width: 700px) {
      margin-top: 70px;
    }

    ul {
      margin-top: 0px;
      padding: 0;
      display: flex;
      list-style: none;
      gap: 20px;
      margin: 0 auto;
      justify-content: center;

      @media (max-width: 700px) {
        width: 80%;
        gap: 5px;
      }

      li {
        display: grid;
        padding: 8px 38px;
        height: 40px;
        border-radius: 10px 10px 0px 0px;
        cursor: pointer;
        place-items: center;
        background: #EC3337;
        font-size: 1.6rem;

        @media (max-width: 700px) {
          padding: 6px 16px;
          font-size: 1.4rem;
        }

        @media (max-width: 399px) {
          padding: 4px 8px;
          font-size: 1.1rem;
          height: 35px;
        }
      }
    }

    &__container {
      display: grid;
      width: 100%;
      gap: 10px;
      margin-top: 55px;
    }
  }
}

.isactive {
  display: none;
}
</style>