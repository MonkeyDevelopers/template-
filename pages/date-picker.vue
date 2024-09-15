<template>
   <nuxt-layout name="admin" title="Início" description="Dashboard Inicial">
      <UIDatePicker v-model="date" placeholder="E o parabens vai ser quando?" />
      <h2>data selecionada: {{ date }}</h2>
      <UIDatePicker v-model="date2" placeholder="E o parabens vai ser quando?" />
      <h2>data selecionada: {{ date2 }}</h2>
      <UIDatePicker v-model="date3" placeholder="E o parabens vai ser quando?" />
      <h2>data selecionada: {{ date3 }}</h2>
      

   </nuxt-layout>
</template>

<script setup>

const date = ref('2025-03-03');
const date2 = ref('');
const date3 = ref('');

</script>

<style scoped></style>