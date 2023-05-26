<template>
  <div class="select">
    <label v-if="label" class="select__label" :for="id">
      <span v-if="required">*</span> {{ label }}
    </label>
    <select
      :value="modelValue"
      class="select__field"
      v-bind="{
        ...$attrs,
        onChange: ($event) => {
          $emit('update:modelValue', $event.target.value);
        },
      }"
      :id="id"
    >
      <option value="" selected>{{ select }}</option>
      <option v-for="option in options" :value="option" :key="option">
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    default: "text",
  },
  id: {
    type: String,
  },
  modelValue: {
    type: [String, Number],
    default: "",
  },
  options: {
    type: Array,
    required: true,
  },
  required: {
    type: Boolean,
    default: false,
  },
  select: {
    type: String,
    default: "Select",
  },
});
</script>

<style lang="scss" scoped>
.select {
  display: grid;
  gap: 8px;
  select {
    padding: 12px 16px;
    background: #f9fafb;
    border: 1px solid #dde4ed;
    border-radius: 12px;
    font-size: 14px;
    font-weight: 300;
    line-height: 20px;
    color: #295170;
    &:focus {
      outline: none;
    }
    &::placeholder {
      font-weight: 300;
    }
  }
  &__label {
    font-size: 17px;
    font-weight: 400;
    line-height: 24px;
    color: #295170;
    span {
      color: red;
      font-weight: 600;
      margin-right: 4px;
    }
  }
  &__field {
    padding: 4px 16px;
    &:focus {
      outline: none;
    }
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
</style>
