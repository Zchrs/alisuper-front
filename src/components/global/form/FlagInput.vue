<template>
  <div class="flag">
    <label for="">{{ label }}</label>
    <vue-tel-input v-model="value" v-bind="bindProps"></vue-tel-input>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";
export default {
  components: {},
  props: {
    label: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
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
    const bindProps = {
      defaultCountry: "CO",
      placeholder: "Enter a phone number",
      required: false,
      preferredCountries: ["CO", "BR"],
      name: "telephone",
      dropdownOptions: {
        disabledDialCode: true,
        showFlags: true,
      },
      inputOptions: {
        showDialCode: true,
      },
    };
    return {
      value,
      phone,
      bindProps,
    };
  },
};
</script>
<style lang="scss">
.flag {
  display: grid;
  gap: 4px;
  label {
    font-size: 17px;
    font-weight: 400;
    line-height: 24px;
    color: #295170;
  }
  &.form {
    display: grid;
    grid-template-columns: 20% 1fr;
    align-items: center;
    gap: 8px;
    @media (max-width:950px) {
      grid-template-columns:30% 1fr;
    }
    @media (max-width:600px) {
      grid-template-columns:1fr;
    }
  }
}
.vue-tel-input {
  background: #f9fafb;
  border: 1px solid #dde4ed;
  outline: none;
  box-shadow: none !important;
  padding: 12px 16px;
  border-radius: 12px !important;
  &:focus-within {
    border: 1px solid #dde4ed;
  }
}
.vti {
  &__dropdown {
    padding: 0;
  }
  &__flag {
    border-radius: 14px;
    margin: 0;
    width: 14px;
  }
  &__input {
    background: transparent;
    font-size: 14px;
    font-weight: 300;
    line-height: 20px;
    color: #295170;
  }
}
</style>
