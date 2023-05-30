<template>
  <section class="product">
    <div class="product-contain">
      <img :src="getFile('img/images', `${img}`, 'jpg')">
    </div>
    <p class="product__p"> {{ description }} </p>
    <p class="product__p"> {{ title }} </p>
    <h2 class="product__h2"> {{ price }} </h2>
    <p class="product__p2"> {{ previousPrice }} <span> {{ discount }} </span> </p>
    <p class="product__p3"> {{ member }} </p>
  </section>
</template>

<script setup>
const productProps = defineProps({
  title: {
    type: String,
  },
  subtitle: {
    type: String,
  },
  description: {
    type: String,
  },
  member: {
    type: String,
  },
  img: {
    type: String,
  },
  price: {
    type: Number,
  },
  previousPrice: {
    type: Number,
  },
  discount: {
    type: Number,
  },
})
</script>

<style lang="scss" scoped>
.product{
  display: grid;
  border-radius: 8px;
  box-shadow: rgb(184, 182, 182) -1px 1px 5px;
  gap: 6px;
  padding: 10px 8px;

  &__p{
    font-size: 16px;
    font-weight: 500;
  }
  &__p2{
    text-decoration: line-through;
  
    span{
      color: #EC3337;
      text-decoration: none;
    }
  }
  
  &__p3{
    font-size: 12px;
    color: #EC3337;
  }
  &__h2{
    font-size: 15px;
    font-weight: 700;
  }

  &-contain{
    display: grid;
    place-items: center;
    img{
      width: 100%;
      margin: auto;
    }
  }
}
</style>