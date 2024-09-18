<template>
  <button @click="handleClick">
	<slot></slot>
  </button>
</template>

<script setup>
const emit = defineEmits(['click']);

const handleClick = () => {
  emit('click');
};
</script>
<style scoped>
button {
  width: 100%;
  padding: 9px;
  border-radius: 4px;
  margin-top: 25px;
  font-size: 13px;
  font-weight: 400;
  cursor: pointer;
  transition: 0.3s;
  background: #c51b1b;
  color: #ffffff;
}

button:hover {
  background: #971616;
}
</style>
