<template>
  <nuxt-layout name="admin" title="Tarefas" description="Tarefas">
    <TasksForm v-model="tasks" />
    <br />
    <UIDataTable :headers :items="tasks"></UIDataTable>
  </nuxt-layout>
</template>

<script setup>
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

const fetchTasksFromServerRoute = async () => {
  const data = await $fetch("/api/tasks");
  tasks.value = data;
};

onMounted(() => {
  fetchTasksFromServerRoute();
});
</script>
