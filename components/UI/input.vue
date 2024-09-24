<template>
  <p class="label" v-if="label">{{ label }}</p>
  <p class="label" v-if="!label"><slot></slot></p>

  <input :type :placeholder v-model="value" />
</template>

<script setup>
defineProps({
  label: {
    type: String,
    default: "",
    required: false,
  },
  type: {
    type: String,
    default: "text",
    required: false,
  },
  placeholder: {
    type: String,
    default: "",
    required: false,
  },
});

const value = defineModel({ required: false, default: "" });
</script>

<style scoped>
.label {
  font-size: 14px;
  font-weight: 400;
  color: #5d5d5d;
  margin-bottom: -8px;
}

input {
  width: 100%;
  padding: 9px;
  font-size: 12px;
  border-radius: 4px;
  border: 1px solid #171717;
  transition: 0.3s;
  background: none;
  color: #cecece;
}

input:focus {
  border: 1px solid #464646;
}

input::placeholder {
  color: #5d5d5d;
}
</style>
