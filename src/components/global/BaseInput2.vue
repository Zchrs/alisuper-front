<template>
  <div class="inputs">
    <label :for="id"><span v-show="required">*</span> </label>
    <input v-bind="$attrs" :placeholder="placeholder" :id="id" :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)" />
    
  </div>
</template>
<style lang="scss" scoped>
.inputs {
  display: grid;
  margin: 0;
  padding: 0;
  gap: 4px;

  &.normal {
    color: #F9FAFB;
    width: 100%;


    input{
      display: grid;
      background: transparent;
      border: #575757 1px solid;
      padding: 12px 16px;
      color: #F9FAFB;
      font-size: 18px;
      font-weight: 500;
      letter-spacing: 1px;
    }
  }

  label {

    font-weight: 400;
    font-size: 14px;
    line-height: 140%;
    color: #295170;

    span {
      color: red;
      font-weight: 700;
      margin-right: 4px;
    }
  }

  input {

    padding: 12px 16px;
    background: #F9FAFB;
    border: 1px solid #DDE4ED;
    border-radius: 12px;
    font-size: 14px;
    font-weight: 700;


    &:focus {
      outline: none;
    }

    &::placeholder {
      font-weight: 300;
      font-size: 14px;
      line-height: 140%;
      font-weight: 200;
      color: #6e6e6e;
    }
  }
}
</style>
<script setup>
defineProps({
  label: {
    type: String,
    default: 'text',
  },
  placeholder: {
    type: [ String, Number ],
    default: 'text',
  },
  id: {
    type: String,
  },
  modelValue: {
    type: [ String, Number ],
    default: '',
  },
  required: {
    type: Boolean,
    default: false,
  },
});
</script>
