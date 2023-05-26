<template>
  <div class="otp">
    <input type="text" maxlength="1" pattern="\d" placeholder="-" />
    <input type="text" maxlength="1" pattern="\d" placeholder="-" />
    <input type="text" maxlength="1" pattern="\d" placeholder="-" />
    <input type="text" maxlength="1" pattern="\d" placeholder="-" />
    <input type="text" maxlength="1" pattern="\d" placeholder="-" />
    <input type="text" maxlength="1" pattern="\d" placeholder="-" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
const inputs = ref([]);

onMounted(() => {
  inputs.value = document.querySelectorAll('.otp input');
  inputs.value.forEach((input, index) => {
    input.dataset.index = index;
    input.addEventListener('paste', handleOtpPaste);
    input.addEventListener('keyup', handleOtp);
  });
});

function handleOtpPaste(e) {
  const data = e.clipboardData.getData('text');
  const value = data.split('');
  if (value.length === inputs.value.length) {
    inputs.value.forEach((input, index) => {
      input.value = value[index];
      input.dispatchEvent(new Event('input'));
    });
    submit();
  }
}

function handleOtp(e) {
  const input = e.target;
  let value = input.value;
  input.value = '';
  input.value = value ? value[0] : '';

  let fieldIndex = input.dataset.index;
  if (value.length > 0 && fieldIndex < inputs.value.length - 1) {
    input.nextElementSibling.focus();
  }

  if (e.key === 'Backspace' && fieldIndex > 0) {
    input.previousElementSibling.focus();
  }

  if (fieldIndex == inputs.value.length - 1) {
    submit();
  }
}



function submit() {
  console.log('Enviando...');
  let otp = '';
  inputs.value.forEach((input) => {
    otp += input.value;
    input.disabled = true;
    input.classList.add('disabled');
  });
  console.log(otp);
}
</script>
<style lang="scss" scoped>
.otp {
  display: flex;
  gap: 16px;
  input {
    width: 100%;
    height: 6.4rem;
    background: #f9fafb;
    border: 1px solid #dde4ed;
    border-radius: 12px;
    outline: none;
    font-family: Playfair Display;
    font-size: 24px;
    font-weight: 900;
    line-height: 34px;
    color: #295170;
    text-align: center;
    transition: all 0.1s;
  }
}

.disabled {
  opacity: 0.5;
}
</style>
