<template>
  <Form
    class="form container"
    @submit="onSubmit"
    :validation-schema="schema"
    @invalid-submit="onInvalidSubmit"
  >
    <slot></slot>
  </Form>
</template>
<script setup>
import { Form } from "vee-validate";
import { defineEmits } from "vue";

const emit = defineEmits(["onSubmit", "onInvalidSubmit"]);

const onSubmit = () => {
  emit("onSubmit");
};

const onInvalidSubmit = () => {
  emit("onInvalidSubmit");
};

const props = defineProps({
  schema: {
    type: Object,
    required: false,
  },
});
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #0e0e0e;
  border: 2px solid #171717;
  border-radius: 8px;
  padding: 20px;
  row-gap: 20px;
}

.form {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>
