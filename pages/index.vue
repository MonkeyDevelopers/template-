<template>
   <nuxt-layout name="admin" title="Início" description="Dashboard Inicial">

      {{ group.obj }}
      <Toggle v-model="group.obj" :items="items" value="id" />

   </nuxt-layout>
</template>

<script setup>

useHead({
   title: 'Início - Admin'
});

const group = ref({
   obj: []
});

const items = [
   {
      id: 1,
      name: "Direção",
      "_id": 123
   },
   {
      id: 2,
      name: "Gerenciar Usuarios",
      "_id": 456
   },
   {
      id: 3,
      name: "Gerenciar Usuários",
      "_id": 789
   }
];

</script>

<style scoped></style>