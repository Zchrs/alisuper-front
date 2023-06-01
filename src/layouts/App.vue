<template>
    <section class="layout">
        <section class="layout__container">
            <header class="layout-header">
                <div class="layout-header__container">
                    <Header />
                </div>
            </header>
            <section class="layout-container">
                <div class="layout-container__contain">
                    <router-view></router-view>
                </div>
            </section>
            <footer class="layout-footer">
                <Footer />
            </footer>
        </section>
    </section>
</template>

<script setup>
import Footer from '../components/global/footer/Footer.vue';
</script>

<style lang="scss">
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html {
    scroll-behavior: smooth;
  }
.layout{
    display: grid;
    width: 100%;
    min-height: 100vh;
    height: 100%;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
   
    &__container{
        width: 100%;
        max-width: 1920px;
        margin: 0 auto;
    }
    &-header{
        display: grid;
        width: 100%;
        height: fit-content;
    }

    &-container{
        display: grid;
        height: fit-content;
        width: 100%;
        padding: 0 5%;
        margin-top: -50px;

        &__contain{
            width: 100%;
            display: grid;
            margin: 0 auto;
            max-width: 1920px;
        }
    }
    &-footer{
        display: grid;
        width: 100%;
        height: fit-content;
        color: white;
    }
}
</style>