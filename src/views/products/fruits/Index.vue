<template>
  <section class="fruits">
    <div class="fruits-header">
      <h2>Frutas</h2>
    </div>
  <div class="fruits-container">
    <CardProducts
    v-for="({
      img,
      title,
      description,
      price,
      previousPrice,
      discount,
      member }, index) in contentProducts"
    
      png="true"
      :key="index"
      :img="img"
      :description="description"
      :title="title"
      :price="price"
      :previous-price="previousPrice"
      :discount="discount"
      :member="member"
    />
  </div>
  </section>
</template>

<script setup>
import CardProducts from '../../../components/CardProducts.vue';
const contentProducts = [
  {
    img: 'default-products',
    title: 'Precio por kilo',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. ',
    price: 'Cop $0.00',
    previousPrice: 'Cop $0.00',
    discount: '0%',
    member: '10% de descuento para miembros premium',
  },
  {
    img: 'default-products',
    title: 'Precio por kilo',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. ',
    price: 'Cop $0.00',
    previousPrice: 'Cop $0.00',
    discount: '0%',
    member: '10% de descuento para miembros premium',
  },
  {
    img: 'default-products',
    title: 'Precio por kilo',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. ',
    price: 'Cop $0.00',
    previousPrice: 'Cop $0.00',
    discount: '0%',
    member: '10% de descuento para miembros premium',
  },
  {
    img: 'default-products',
    title: 'Precio por kilo',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. ',
    price: 'Cop $0.00',
    previousPrice: 'Cop $0.00',
    discount: '0%',
    member: '10% de descuento para miembros premium',
  },
  {
    img: 'default-products',
    title: 'Precio por kilo',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. ',
    price: 'Cop $0.00',
    previousPrice: 'Cop $0.00',
    discount: '0%',
    member: '10% de descuento para miembros premium',
  },
  {
    img: 'default-products',
    title: 'Precio por kilo',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. ',
    price: 'Cop $0.00',
    previousPrice: 'Cop $0.00',
    discount: '0%',
    member: '10% de descuento para miembros premium',
  },
  {
    img: 'default-products',
    title: 'Precio por kilo',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. ',
    price: 'Cop $0.00',
    previousPrice: 'Cop $0.00',
    discount: '0%',
    member: '10% de descuento para miembros premium',
  },
  {
    img: 'default-products',
    title: 'Precio por kilo',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. ',
    price: 'Cop $0.00',
    previousPrice: 'Cop $0.00',
    discount: '0%',
    member: '10% de descuento para miembros premium',
  },
  {
    img: 'default-products',
    title: 'Precio por kilo',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. ',
    price: 'Cop $0.00',
    previousPrice: 'Cop $0.00',
    discount: '0%',
    member: '10% de descuento para miembros premium',
  },
  {
    img: 'default-products',
    title: 'Precio por kilo',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. ',
    price: 'Cop $0.00',
    previousPrice: 'Cop $0.00',
    discount: '0%',
    member: '10% de descuento para miembros premium',
  },
  {
    img: 'default-products',
    title: 'Precio por kilo',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. ',
    price: 'Cop $0.00',
    previousPrice: 'Cop $0.00',
    discount: '0%',
    member: '10% de descuento para miembros premium',
  },
  {
    img: 'default-products',
    title: 'Precio por kilo',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. ',
    price: 'Cop $0.00',
    previousPrice: 'Cop $0.00',
    discount: '0%',
    member: '10% de descuento para miembros premium',
  },
  {
    img: 'default-products',
    title: 'Precio por kilo',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. ',
    price: 'Cop $0.00',
    previousPrice: 'Cop $0.00',
    discount: '0%',
    member: '10% de descuento para miembros premium',
  },
  {
    img: 'default-products',
    title: 'Precio por kilo',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. ',
    price: 'Cop $0.00',
    previousPrice: 'Cop $0.00',
    discount: '0%',
    member: '10% de descuento para miembros premium',
  },
  {
    img: 'default-products',
    title: 'Precio por kilo',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. ',
    price: 'Cop $0.00',
    previousPrice: 'Cop $0.00',
    discount: '0%',
    member: '10% de descuento para miembros premium',
  },

  
]
</script>

<style lang="scss" scoped>
@keyframes smooth {
  0%{
    opacity: 0;
    transform: translateX(50%);
  }
  100%{
    transform: translateX(0%);
    opacity: 1;
  }
}
.fruits{
  display: grid;
  height: fit-content;
  background: rgb(255, 255, 255);
  border-radius: 18px 18px 0px 0px;
  animation: smooth .5s ease;
  

  &-header{
    align-items: center;
    padding: 0 24px;
    display: grid;
    height: 150px;
    border-radius: 18px 18px 0px 0px;
  }

  &-container{
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    
    gap: 20px;
    padding: 24px;

    @media (max-width: 1024px) {
      grid-template-columns: repeat(4, 1fr);
    }
    @media (max-width: 900px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 700px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 300px) {
      grid-template-columns: 1fr;
    }
  }
}
</style>