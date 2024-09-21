<template>
  <p>
    {{ user?.id }}
  </p>
  <p>
    {{ user?.user_metadata?.full_name }}
  </p>
  <p>
    {{ user?.user_metadata?.email }}
  </p>
</template>

<script setup>
const user = useSupabaseUser();
</script>