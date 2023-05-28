<template>
    <button class="button">
        <span class="button__span"><i v-if="img"><img :src="`src/assets/images/${icon}.svg`" alt="" /></i>
            <a class="button__a" v-if="link" :href="link" target="_blank">{{ label }}</a>
            <p class="button__p" v-else>{{ label }}</p>
        </span>
    </button>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
  },
  icon: {
    type: String,
  },
  link: {
    type: String,
  },
  img: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped>
.button {
  background: transparent;
  cursor: pointer;
  outline: none;
  border: none;
  margin: 0;
  padding: 0;

  &.little-red-md {
    display: flex;
    width: fit-content;
    height: fit-content;
    background: #EC3337;
    border-radius: 10px;
    color: white;
    padding: 8px 16px;
    font-weight: 800;
    font-size: 17px;
    line-height: 120%;
  }
  &.little-red {
    display: flex;
    width: fit-content;
    height: fit-content;
    background: #EC3337;
    border-radius: 10px;
    color: white;
    padding: 16px;
    font-weight: 800;
    font-size: 17px;
    line-height: 120%;
  }
  &.little-red-pq {
    display: flex;
    width: fit-content;
    height: fit-content;
    background: #EC3337;
    border-radius: 10px;
    color: white;
    padding: 5px 16px;
    font-weight: 800;
    font-size: 17px;
    line-height: 120%;
  }
  &.little-red-md {
    display: flex;
    width: fit-content;
    height: fit-content;
    background: #EC3337;
    border-radius: 10px;
    color: white;
    padding: 9px 16px;
    font-weight: 800;
    font-size: 17px;
    line-height: 120%;
  }
  &.mini-red {
    display: flex;
    width: fit-content;
    height: fit-content;
    background: #EC3337;
    border-radius: 10px;
    color: white;
    padding: 12px;
    font-weight: 700;
    font-size: 17px;
    line-height: 120%;
  }
  &.full-red {
    display: grid;
    justify-content: center;
    width: 100%;
    height: fit-content;
    background: #EC3337;
    border-radius: 10px;
    color: white;
    padding: 16px;
    font-weight: 800;
    font-size: 17px;
    line-height: 120%;
  }

  &.full-outline {
    display: grid;
    justify-content: center;
    width: 100%;
    height: fit-content;
    background: transparent;
    border: #621415 1px solid;
    color: #EC3337;
    border-radius: 10px;
    padding: 16px;
    font-weight: 800;
    font-size: 17px;
    line-height: 120%;
  }
  &.full-outline-soft {
    display: grid;
    width: 100%;
    height: fit-content;
    background: transparent;
    border: #621415 1px solid;
    color: #EC3337;
    border-radius: 10px;
    font-weight: 800;
    font-size: 17px;
    line-height: 120%;
    gap: 8px;
    padding: 8px;
    margin: 0;

    img {
      margin: 0;
      padding: 0;
    }
  }
  &.outline-soft {
    display: grid;
    width: fit-content;
    height: fit-content;
    background: transparent;
    border: #621415 1px solid;
    color: #EC3337;
    border-radius: 10px;
    font-weight: 800;
    font-size: 17px;
    line-height: 120%;
    gap: 8px;
    padding: 16px;
    margin: 0;
  }
  &.small-outline-a {
    display: grid;
    justify-content: center;
    width: fit-content;
    height: fit-content;
    background: transparent;
    border: 1px solid #EC3337;
    color: #EC3337;
    border-radius: 10px;
    font-weight: 800;
    font-size: 17px;
    line-height: 120%;
    padding: 16px;
  }
  &.small-outline-pq {
    display: grid;
    justify-content: center;
    width: fit-content;
    height: fit-content;
    background: transparent;
    border: 1px solid #EC3337;
    color: #EC3337;
    border-radius: 10px;
    font-weight: 800;
    font-size: 17px;
    line-height: 120%;
    padding: 4px 16px;
  }
  &.mini-outline {
    display: grid;
    justify-content: center;
    width: fit-content;
    height: fit-content;
    background: transparent;
    border: 1px solid #EC3337;
    color: #EC3337;
    border-radius: 10px;
    font-weight: 700;
    font-size: 17px;
    line-height: 120%;
    padding: 12px;
  }
  &.small-outline {
    display: grid;
    justify-content: center;
    width: fit-content;
    height: fit-content;
    background: transparent;
    border: 1px solid #EC3337;
    color: #621415;
    border-radius: 10px;
    font-weight: 800;
    font-size: 17px;
    line-height: 120%;
    padding: 16px;
  }
  &.small-outline-md {
    display: grid;
    justify-content: center;
    width: fit-content;
    height: fit-content;
    background: transparent;
    border: #EC3337 1px solid;
    color: #EC3337;
    border-radius: 10px;
    font-weight: 800;
    font-size: 17px;
    line-height: 120%;
    padding: 8px 16px;
  }

  &.no-border {
    border: none;
    width: fit-content;
    height: fit-content;
    background: transparent;
    color: #EC3337;
    font-weight: 800;
    font-size: 17px;
    line-height: 120%;
    padding: 16px;
  }

  &.no-border-font {
    border: none;
    width: fit-content;
    height: fit-content;
    background: transparent;
    color: #EC3337;
    font-weight: 800;
    font-size: 17px;
    line-height: 120%;
  }
  &.green {
    background: linear-gradient(0deg, #007a5a, #007a5a), #20b556;
    border-radius: 10px;
    padding: 8px;
    gap: 4px;
    color: white;
    width: fit-content;
    height: fit-content;
    font-weight: 500;
    line-height: 140%;
    font-size: 14px;
    display: grid;
    align-items: center;
    cursor: default;

    img {
      margin-top: -2px;
    }
  }

  &.red {
    justify-content: center;
    display: grid;
    align-items: center;
    width: 100%;
    text-align: center;
    padding: 16px;
    gap: 8px;
    background: #ffffff;
    border: 1px solid #9d153f;
    border-radius: 10px;
    color: #9d153f;
    font-weight: 800;
    font-size: 17px;
    line-height: 120%;
  }
  &.small-red {
    display: grid;
    place-items: center;
    gap: 4px;
    width: 135px;
    height: 40px;
    background: #EC3337;
    border-radius: 10px;
    padding: 5px 16px;
    color: white;
    width: 100%;
    height: fit-content;
    font-weight: 400;
    font-size: 15px;
    line-height: 140%;
    img {
      margin-top: -2px;
    }
  }
  &.small-outline-red {
    display: grid;
    place-items: center;
    gap: 4px;
    width: 135px;
    height: 40px;
    background: transparent;
    border-radius: 10px;
    padding: 5px 16px;
    color: #EC3337;
    border: 1px solid #EC3337;
    width: 100%;
    height: fit-content;
    font-weight: 400;
    font-size: 15px;
    line-height: 140%;
    img {
      margin-top: -2px;
    }
  }
  &.small {
    align-items: center;
    gap: 8px;
    width: 121px;
    height: 48px;
    background: #f6f8fa;
    border-radius: 100px;
    padding: 8px 12px 8px 8px;
    color: #1f3e56;
    width: fit-content;
    height: fit-content;
    font-weight: 400;
    font-size: 14px;
    line-height: 140%;
  }
  &.little-red-t {
    align-items: center;
    padding: 0px 12px;
    gap: 8px;
    background: #EC3337;
    border-radius: 1000px;
    font-weight: 800;
    font-size: 13px;
    line-height: 140%;
    color: white;
    width: 97px;
    height: 40px;
  }
  &.little-outline {
    align-items: center;
    text-align: center;
    padding: 8px 12px;
    gap: 8px;
    border: #621415 1px solid;
    color: #EC3337;
    border-radius: 1000px;
    font-weight: 800;
    font-size: 17px;
    line-height: 120%;
    width: fit-content;
    height: fit-content;
  }
  &.rounded {
    background: url(@/assets/images/icon-arrow-down-white.svg);
    width: 40px;
    height: 40px;
  }
  &__span {
    color: inherit;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  &__p {
    color: inherit;
    text-align: center;
  }
  &__a {
    color: inherit;
  }

  &.little-red-xl {
    display: flex;
    width: 100%;
    height: fit-content;
    background: #EC3337;
    border-radius: 10px;
    color: white;
    padding: 9px 16px;
    font-weight: 800;
    font-size: 17px;
    line-height: 120%;
    justify-content: center;
  }
  &.small-outline-xl {
    display: grid;
    justify-content: center;
    width: 100%;
    height: fit-content;
    background: transparent;
    border: #621415 1px solid;
    color: #EC3337;
    border-radius: 10px;
    font-weight: 800;
    font-size: 17px;
    line-height: 120%;
    padding: 8px 16px;
    justify-content: center;
  }
}
</style>
