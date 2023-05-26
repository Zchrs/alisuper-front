<template>
  <div class="input">
    <label :for="id"><span v-show="required">*</span> {{ label }}</label>
    <input
      v-bind="$attrs"
      :placeholder="placeholder"
      :id="id"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)" />
  </div>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    default: 'text',
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
