<template>
  <input
    :value="modelValue"
    v-bind="$attrs"
    @input="$emit('update:modelValue', $event.target.value)"
    placeholder="Busca tu producto"
  />

</template>

<script>
export default {
  props: {
    modelValue: {
      type: [String, Number],
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
input {
  background-image: url("../../../assets/img/icons/searchInput.svg");
  background-repeat: no-repeat;
  background-position: 16px center;
  padding: 8px 45px 10px;
  border-radius: 6px;
  color: #000626;
  background-color: #ffffff;
  border: 1px solid #ebebeb;
  outline: none;

  @media (max-width: 500px) {
    width: 100%;
    min-width: unset;
  }

  &::placeholder {
    font-weight: 300;
    font-size: 16px;
    line-height: 140%;
    color: #9c9c9e;
  }
  &.short {
    background: url("../../../assets/img/icons/searchInput.svg") no-repeat, #f9fafb;
    background-position: 16px center;
    max-width: 300px;
    border: 1px solid #dde4ed;
    border-radius: 12px;
    padding: 10px 45px 10px;
    color: #000626;
    @media (max-width: 400px) {
      width: 100%;
    }
    
  }
  &.large {
    display: grid;
    font-size: 20px;
    background: url("../../../assets/img/icons/searchInput.svg") no-repeat, #f9fafb;
    background-position: 16px center;
    margin: auto;
    width: 60%;
    padding: 10px 45px 10px;
    height: 45px;
    border-radius: 100px;
    color: black;
  }
  // &.adjust{
  //   background: url("@/assets/images/searchInput.svg") no-repeat, #F9FAFB;
  //   background-position: 16px center;
  //   min-width: 100%;
  //   border: 1px solid #DDE4ED;
  //   border-radius: 12px;
  //   padding: 10px 45px 10px;
  //   color: #000626;
  // }
}
</style>
