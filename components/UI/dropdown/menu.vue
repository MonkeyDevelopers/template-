<template>
  <div
    class="modal_relative"
    :style="{
      '--color': color,
    }"
  >
    <div @click="openModal()">
      <slot></slot>
    </div>

    <Transition name="fade">
      <div
        class="koro_modal"
        :class="setDirection(), setModalMode()"
        v-if="action"
        ref="modal_ref"
      >
        <h2 v-if="title">{{ title }}</h2>
        <hr v-if="title" />
        <div
          class="modal_item"
          v-for="option in options"
          @click="option.action"
        >
          <slot name="option" :option></slot>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { defineProps, ref } from "vue";
import { onClickOutside } from "@vueuse/core";

const action = ref(false);

function setDirection() {
  if (!props.direction) {
    return "bottom-left";
  }
  return props.direction;
}

function setModalMode() {
  return props.compact ? "modal_compact" : "modal_default";
}

function openModal() {
  if (action.value) {
    action.value = false;
  } else {
    action.value = true;
  }
}

const props = defineProps({
  title: { type: String, default: "", required: false },
  options: { type: Array, default: [], required: false },
  direction: { type: String, default: "bottom-left", required: false },
  compact: { type: Boolean, default: false, required: false },
  color: { type: String, default: "", required: false },
});

const color =
  props.color || useColor().setColor("primary");

const modal_ref = ref(null);
onClickOutside(modal_ref, (event) => {
  if (action.value == true) {
    action.value = false;
  }
});
</script>

<style scoped>
/* koro_modal */

.modal_relative {
  position: relative;
}

.koro_modal {
  background: #0e0e0e;
  border: 2px solid #171717;
  border-radius: 6px;
  z-index: 5;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  user-select: none;
}

.koro_modal h2 {
  color: #dcdcdc;
  font-weight: 400;
}

.koro_modal hr {
  width: 100%;
  background: #171717;
}

.modal_item {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  cursor: pointer;
  transition: 0.3s;
}

.modal_item:hover {
  background: #171717;
}

.modal_item span {
  color: #959595;
  transition: 0.3s;
}

.modal_icon {
  color: #959595;
  transition: 0.05s !important;
}

.modal_item:hover span {
  color: var(--color);
}

.modal_item:hover .modal_icon {
  color: var(--color);
}

/* koro_modal default */

.modal_default {
  width: 230px;
  padding: 15px;
}

.modal_default hr {
  height: 2px;
  margin: 10px 0px;
  font-size: 15px;
}

.modal_default h2 {
  font-size: 14px;
}

.modal_default .modal_item {
  padding: 8px;
  border-radius: 6px;
  column-gap: 10px;
}

.modal_default .modal_item span {
  font-size: 12px;
}

.modal_default .modal_icon {
  font-size: 20px !important;
}

/* koro_modal compact */

.modal_compact {
  width: 160px;
  padding: 8px;
}

.modal_compact h2 {
  padding: 5px;
  font-size: 13px;
  color: #dcdcdc;
  font-weight: 400;
}

.modal_compact hr {
  height: 1px;
  margin: 5px 0px;
  font-size: 15px;
}

.modal_compact .modal_item {
  padding: 5px;
  border-radius: 4px;
  column-gap: 8px;
}

.modal_compact .modal_item span {
  font-size: 12px;
}

.modal_compact .modal_icon {
  font-size: 17px !important;
}

/* koro_modal positions */

.top-right {
  position: absolute;
  bottom: 110%;
  left: 0;
}

.top-left {
  position: absolute;
  bottom: 110%;
  right: 0;
}

.bottom-right {
  position: absolute;
  top: 110%;
  left: 0;
}

.bottom-left {
  position: absolute !important;
  top: 110% !important;
  right: 0 !important;
}

/* transition */

.fade-enter-active {
  transition: all 0.2s;
}

.fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 1;
  opacity: 0;
}
</style>
