<template>
  <div class="checkbox">
    <input
      class="field"
      type="checkbox"
      :checked="modelValue"
      @change="$emit('update:modelValue', $event.target.checked)"
      :id="id"
    />
    <label :for="id">{{ label }}</label>
  </div>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    default: "",
  },
  modelValue: {
    type: Boolean,
    default: false,
  },
  id: {
    type: String,
  },
});
</script>

<style lang="scss" scoped>

</style>
