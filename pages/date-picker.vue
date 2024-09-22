<template>
   <nuxt-layout name="admin" title="Início" description="Dashboard Inicial">
      <UIDatePicker v-model="date" placeholder="E o parabens vai ser quando?" />
      <h2>data selecionada: {{ date }}</h2>
      <br><br><br><br><br><br><br>
      <br><br><br><br><br><br><br>
      <br><br><br><br><br><br><br>
      

   </nuxt-layout>
</template>

<script setup>

const date = ref('2025-03-03');
const date2 = ref('');
const date3 = ref('');

</script>

<style scoped></style>