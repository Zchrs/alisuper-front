<template>
  <section class="lang">
    <div class="lang-box__select">
      <label for="lang">
        <img :src="getImageUrl(defaulted)" alt="" />
      </label>
      <select
        class="lang-box-lang lang__text"
        name="lang"
        id="lang"
        v-model="defaulted"
        @change="handleChange($event)">
        <option class="lang__textop" value="en">EN</option>
        <option class="lang__textop" value="es">ES</option>
      </select>
    </div>
  </section>
</template>

<script setup>
function getImageUrl(name) {
  return new URL(`/src/assets/img/icons/${name}.svg`, import.meta.url).href;
}
</script>

<script>
import { mapActions, mapState } from 'vuex';
export default {
  data() {
    return {
      defaulted: 'es',
    };
  },
  methods: {
    ...mapActions('auth', ['logout']),
    ...mapActions('user', ['chageLang']),
    handleChange(event) {
      let form = { lang: event.target.value };
      console.log({ form })
      this.chageLang(form).then(() => {
        window.location.reload();
      });
    },
    close() {
      this.logout().then(() => {
        this.$router.push({ name: 'Login' });
      });
    },
  },
  created() {
    this.defaulted = this.lang ? this.lang : 'es';
  },
  computed: {
    ...mapState('user', ['lang']),
  },
};
</script>

<style lang="scss" scoped>
.lang {
  background: #f6f8fa;
  display: flex;

  @media (max-width: 700px) {
        display: none;
      }
  &.white {
    .lang__text {
      color: #fff;
      @media (max-width: 900px) {
        color: #000;
      }
    }
    .lang__textop {
      color: black;
    }
  }
  &__text {
    font-size: 12px;
    font-weight: 500;
    line-height: 24px;
    text-align: left;
    color: #000;
  }
  &__subtitle {
    text-transform: none;
  }
  &-box {
    display: flex;
    gap: 8px;
    align-items: center;
    &__select {
      display: flex;
      align-items: center;
      gap: 2px;
      background: transparent;
      border-radius: 12px;
    }
    &-lang {
      border: none;
      outline: none;
      background: transparent;
    }
  }
  &__user {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px;
    background: #f6f8fa;
    border-radius: 8px;
    &-img {
      background-color: black;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      padding: 4px;
    }
  }
  label{
    img{
      width: 18px;
      height: 18px;
    }
  }
}
</style>
