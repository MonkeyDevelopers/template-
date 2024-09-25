<template>
  <nuxt-layout name="admin" title="Tarefas" description="Tarefas">
    <UIForm @onSubmit="onSubmit" :validation-schema="schema">
      <UIInput
        name="name"
        type="text"
        label="Full Name"
        placeholder="Your Name"
        success-message="Nice to meet you!"
      ></UIInput>
      <KoButton color="primary" @click="save"> Save </KoButton>
    </UIForm>
    <UIDataTable :headers :items="tasks"></UIDataTable>
  </nuxt-layout>
</template>

<script setup>
import * as Yup from "yup";

const headers = [
  {
    key: "id",
    label: "",
  },
  {
    key: "title",
    label: "Task",
  },
];
const tasks = ref();
const task = ref("");

function onSubmit(values) {
  alert(JSON.stringify(values, null, 2));
}

const schema = Yup.object().shape({
  name: Yup.string().required(),
});

const save = async () => {
  tasks.value.push({ id: tasks.value.length + 1, title: task.value });
};

const fetchTasksFromServerRoute = async () => {
  const data = await $fetch("/api/tasks");
  tasks.value = data;
};

onMounted(() => {
  fetchTasksFromServerRoute();
});
</script>
