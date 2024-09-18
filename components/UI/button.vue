<template>
  <button
    @click="handleClick"
    :style="{
      '--color': UseColor.setColor(color),
      '--shadow-color': UseColor.setColor(color) + '99',
    }"
  >
    <slot></slot>
  </button>
</template>

<script setup>
const emit = defineEmits(["click"]);

const props = defineProps({
  color: { type: String },
});

const UseColor = useColor(props.color);
const handleClick = () => {
  emit("click");
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
  color: #ffffff;
  background-color: var(--color);
}

button:hover {
  background-color: var(--shadow-color);
}
</style>
