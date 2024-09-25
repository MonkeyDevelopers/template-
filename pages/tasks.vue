<template>
  <nuxt-layout name="admin" title="Tarefas" description="Tarefas">
    <UIForm>
      <UIInput
        label="Task Name"
        v-model="task"
        placeholder="Input your Task"
      ></UIInput>
      <KoButton color="primary" @click="save"> Save </KoButton>
    </UIForm>
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
const task = ref("");

const save = async () => {
  tasks.value.push({ id: tasks.value.length + 1, title: task.value });
  // await $fetch("/api/tasks", {
  //   method: "POST",
  //   body: JSON.stringify({ task: task.value }),
  // });
  // fetchTasksFromServerRoute();
};

const fetchTasksFromServerRoute = async () => {
  const data = await $fetch("/api/tasks");
  tasks.value = data;
};

onMounted(() => {
  fetchTasksFromServerRoute();
});
</script>
