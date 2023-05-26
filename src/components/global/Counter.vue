<template>
    <h1>{{ counter }}</h1>

    <div class="card">
      <button type="button" @click="incr">
        count +
      </button>
      &nbsp;
      <button type="button" @click="decr">
        count -
      </button>
      <p>
        Edit
        <code>components/HelloWorld.vue</code> to test HMR
      </p>
    </div>
</template>


<script>
import { ref } from 'vue';

export default {
  name: "Counter",
  props: {},
  emits: [],

  setup() {
    const counter = ref(0);

    // const incr = () => {
    //   counter.value++
    // }

    // const decr = () => {
    //   if (counter.value === 0) {
    //     return
    //   }else{
    //     counter.value--
    //   }
    // }

        return {
            counter,
            
            incr: () => counter.value++,
            decr: () => {
                if (counter.value === 0) {
                    return
                } else {
                    counter.value--
                }
            },
        }
  },
}
</script>

<style scoped>
</style>