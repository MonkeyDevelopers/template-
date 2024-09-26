<template>
  <div>
    <p>
      Redirecting...
    </p>
  </div>
</template>

<script setup lang="ts">
const user = useSupabaseUser()
const { auth } = useSupabaseClient();

const fetchUser = async () => {
  const { data, error } = await auth.getUser();
  if (error) {
    console.error('Error fetching user:', error);
  } else {
    user.value = data.user;
  }
};


watch(user, () => {
  if (user.value) {
    return navigateTo('/')
  }
}, { immediate: true })

onMounted(() => {
  fetchUser();
});
</script>

<style scoped>
p {
  color: white;
}
</style>