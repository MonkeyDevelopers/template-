<template>
  <a
    v-for="option in miniOptions"
    :href="option.link"
    class="item"
    :class="{ item_active: useRoute().name == option.active }"
    :style="{
      '--color': $colors.primary,
    }"
  >
    <icon class="item_icon" :name="option?.icon" />
    <span>{{ option.name }}</span>
  </a>
  <div class="item" @click="mobileMenuStore.changeMobileMenu(true)">
    <icon class="item_icon" name="ph:text-align-right-light" />
    <span>Menu</span>
  </div>
  <UISidebarMobile :options exclusive />
</template>

<script setup>
const mobileMenuStore = useMobileMenu();
const { mobileMenu } = storeToRefs(mobileMenuStore);

const props = defineProps({
  options: { type: Object, default: {}, required: true },
});

const miniOptions = computed(() => {
  return props.options.filter((option) => option.mini).slice(0, props.size);
});
</script>

<style scoped>
.item {
  padding: 6px;
  border-radius: 8px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: 0.3s;
}

.item:hover {
  background: #171717;
}

.item:hover span {
  color: white;
}

.item:hover .item_icon {
  color: white;
}

.item_active {
  background: var(--color) !important;
}

.item_active span {
  color: white !important;
  font-weight: 300;
}

.item_active .item_icon {
  color: white !important;
}

.item_icon {
  font-size: 18px !important;
  color: #959595;
  transition: 0.3s !important;
}

.item span {
  white-space: nowrap;
  font-size: 13px;
  color: #959595;
  transition: 0.3s;
}
</style>
