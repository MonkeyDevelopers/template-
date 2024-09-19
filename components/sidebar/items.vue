<template>
  <a
    v-for="option in options"
    :href="option.link"
    class="item"
    :class="{ item_active: useRoute().name == option.active }"
    :style="{
      '--color': $colors.primary,
    }"
  >
    <icon class="item_icon" :name="option.icon" />
    <span>{{ option.name }}</span>
  </a>
</template>

<script setup>
const props = defineProps({
  options: { type: Object, default: {}, required: true },
});
</script>

<style scoped>
.item {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  border-radius: 6px;
  column-gap: 10px;
  position: relative;
  /* background: red; */
  cursor: pointer;
  transition: 0.3s;
}

.item:hover {
  background: #171717;
}

.item span {
  position: absolute;
  white-space: nowrap;
  left: 55px;
  font-size: 13px;
  color: #959595;
  transition: 0.3s;
}

.item_icon {
  font-size: 20px !important;
  color: #959595;
  transition: 0.3s !important;
}

.item_active {
  background: var(--color)!important;
}

.item_active span {
  color: white !important;
  font-weight: 300;
}

.item_active .item_icon {
  color: white !important;
}

.item:hover span {
  color: white;
}

.item:hover .item_icon {
  color: white;
}
</style>
