<template>
  <footer class="footer">
    <div class="footer-up">
      <a class="footer-up__a" href="#">Volver arriba</a>
    </div>
    <div class="footer-middle">
      <div class="footer-middle__links">
        <h2>Alisuper</h2>
        <a href="">link footer</a>
        <a href="">link footer</a>
        <a href="">link footer</a>
        <a href="">link footer</a>
      </div>
      <div class="footer-middle__links">
        <h2>Gana dinero con Alisuper</h2>
        <a href="">link footer</a>
        <a href="">link footer</a>
        <a href="">link footer</a>
        <a href="">link footer</a>
      </div>
      <div class="footer-middle__links">
        <h2>Membresías</h2>
        <a href="">link footer</a>
        <a href="">link footer</a>
        <a href="">link footer</a>
        <a href="">link footer</a>
      </div>
      <div class="footer-middle__links">
        <h2>Centro de ayuda</h2>
        <a href="">link footer</a>
        <a href="">link footer</a>
        <a href="">link footer</a>
        <a href="">link footer</a>
      </div>
    </div>
    <div class="footer-down">
      <h1>Footer</h1>
    </div>
  </footer>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.footer{
  margin-top: 50px;
  &-up{
    display: grid;
    padding: 20px 0;
    place-items: center;
    background: #727376;

    &__a{
      text-decoration: none;
      color: white;
      font-size: 18px;
      font-weight: 600;
    }
  }
  &-middle{
    display: grid;
    place-items: center;
    grid-template-columns: repeat(4, 1fr);
    background: #4c4747;
    height: fit-content;

    @media (max-width: 700px) {
      grid-template-columns: repeat(2, 1fr);
    }

    &__links{
      display: grid;
      padding: 12px;
      gap: 10px;
      a{
        color: white;
        text-decoration: none;
        font-size: 16px;
        font-weight: 300;
      }
      h2{
        font-weight: 500;
        font-size: 18px;
      }
    }
  }
  &-down{
    background: black;
  }
}
</style>