<template>
  <div class="input">
    <label v-if="label" :for="id"><span v-show="required">*</span> {{ label }}</label>
    <input
      v-bind="$attrs"
      :placeholder="placeholder"
      :id="id"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)" />
  </div>
</template>
<style lang="scss" scoped>
.input{

  label{
    display: none;
  }
  &.short{
    border-radius: 12px;
    color: #000626;
    width: 55.67px;
    height: 64px;
  }
  &.normal{
    background: transparent;
    width: 100%;
    height: 40px;
  }
}
</style>
<script setup>
defineProps({
  label: {
    type: Boolean,
    default: false,
  },
  placeholder: {
    type: [String, Number],
    default: 'text',
  },
  id: {
    type: String,
  },
  modelValue: {
    type: [String, Number],
    default: '',
  },
  required: {
    type: Boolean,
    default: false,
  },
});
</script>
