<template>
  <nuxt-layout name="admin" title="Tarefas" description="Tarefas">
    {{ tasksFromServer }}
    {{ tasks }}

    {{ user.id }}
    <KoButton color="primary" @click="fetchTasksFromServerRoute"
      >Fetch Tasks From Server</KoButton
    >
    <KoButton color="secondary" @click="fetchTasks">Fetch Tasks</KoButton>
  </nuxt-layout>
</template>

<script setup>
const T = useSupabaseClient();
const user = useSupabaseUser();
const tasksFromServer = ref();
const tasks = ref();

const fetchTasks = async () => {
  const { data } = await client
    .from("tasks")
    .select("id, title")
    .eq("uuid", user.id)
    .order("created_at");

  return data;
};

const fetchTasksFromServerRoute = async () => {
  const data = await $fetch("/api/tasks", {
    headers: useRequestHeaders(["cookie"]),
    key: "tasks-from-server",
  });
  tasksFromServer.value = data;
};

onMounted(() => {
  fetchTasksFromServerRoute();
});
</script>
