<template>
  <div>
    <vue-tel-input :key="country" @country-changed="changed" :defaultCountry="country" v-model="value" v-bind="bindProps" />
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";

export default {
  components: {},
  props: {
    modelValue: {
      type: [String, Number],
      default: "",
    },
    country: {
      default: "",
    },
  },
  methods: {
    changed (val) {
      this.$emit('country',val)
    }
  },
  data() {
    return {
      bindProps: {
        placeholder: "Enter a phone number",
        required: false,
        dropdownOptions: {
          disabledDialCode: true,
          showFlags: true,
        },
        inputOptions: {
          showDialCode: true,
        },
      },
    };
  },
  setup(props, { emit }) {
    const value = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        emit("update:modelValue", value);
      },
    });
    const phone = ref("0123456789");

    return {
      phone,
      value,
    };
  },
  watch : {
    country: function (val) {
      console.log({ val })
      this.bindProps.defaultCountry = val
    }
  }
};
</script>
<style lang="scss">
.vue-tel-input {
  background: none;
  border: none;
  outline: none;
  box-shadow: none !important;

  div {
    border-radius: 8px;
    border: 1px solid #d9d9d9;
    padding: 9px 16px;
    margin-right: 20px;
    background-color: #fff;
  }
  input {
    border-radius: 8px;
    border: 1px solid #d9d9d9;
    padding: 9px 16px;
    background-color: #fff;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
  }
}
</style>
