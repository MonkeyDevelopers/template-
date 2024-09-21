<template>
  <div>
    <p>{{ label }}</p>
    <p v-if="!label"><slot></slot></p>
    <input :type :placeholder v-model="value" />
  </div>
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
p {
  font-size: 13px;
  font-weight: 400;
  color: #5d5d5d;
  margin-bottom: 3px;
}

input {
  width: 100%;
  padding: 9px;
  font-size: 12px;
  border-radius: 4px;
  border: 1px solid #1e1e1e;
  background: #131313;
  transition: 0.3s;
  color: #cecece;
}

input:first-child {
  margin-top: 50px !important;
}

input:focus {
  border: 1px solid #282828;
  background: #191919;
}

input::placeholder {
  color: #5d5d5d;
}
</style>
