<template>
  <div>
    <p>
      Redirecting...
      {{user}}
    </p>
  </div>
</template>

<script setup lang="ts">
const user = useSupabaseUser()

watch(user, () => {
  if (user.value) {
    return navigateTo('/')
  }
}, { immediate: true })
</script>

<style scoped>
p {
  color: white;
}
</style>