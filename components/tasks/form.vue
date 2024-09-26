<template>
  <UIForm @onSubmit="onSubmit" :validation-schema="schema">
    <UIInput
      name="name"
      type="text"
      label="Full Name"
      placeholder="Your Name"
      v-model="task"
    />
    <KoButton color="primary" type="submit"> Save </KoButton>
  </UIForm>
</template>

<script setup>
import * as Yup from "yup";
const tasks = defineModel({required: true, default: []});
const task = ref("");

function onSubmit() {
  tasks.value.push({ id: tasks.value.length + 1, title: task.value });
  task.value = "";
}

const schema = Yup.object().shape({
  name: Yup.string().required("Nome é obrigatório"),
});
</script>
