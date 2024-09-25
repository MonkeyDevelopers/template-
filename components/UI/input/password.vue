<template>
  <UIInput
    :name
    :label
    :placeholder="view ? '*********' : placeholder"
    :successMessage
    :type="view? 'text' : 'password'"
    v-model="password"
  >
    <template #prepend v-if="position === 'left'">
      <div class="lock_icon">
        <Icon @click="view = !view" name="ph:eye" v-if="view"  />
        <Icon @click="view = !view" name="ph:eye-slash" v-else />
      </div>
    </template>
    <template #append v-if="position === 'right'">
      <div class="lock_icon">
        <Icon @click="view = !view" name="ph:eye" v-if="view"  />
        <Icon @click="view = !view" name="ph:eye-slash" v-else />
      </div>
    </template>
  </UIInput>
</template>

<script setup>
const password = defineModel({ required: true, default: "" });
const view = ref(false);
const props = defineProps({
  name: {
    type: String,
    required: false,
  },
  label: {
    type: String,
    required: false,
  },
  placeholder: {
    type: String,
    default: "",
    required: false,
  },
  successMessage: {
    type: String,
    default: "",
    required: false,
  },
  position: {
    type: String,
    default: "none",
    required: false,
  },
});
</script>

<style scoped>
.lock_icon {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 10px;
  font-size: 1.5rem;
}
</style>
