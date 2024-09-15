<template>
   <nuxt-layout name="admin" title="Início" description="Dashboard Inicial">
      <DatePicker v-model="date" />
      <h2>data selecionada: {{ date }}</h2>
      <br><br><br><br><br><br><br>
      <br><br><br><br><br><br><br>
      <br><br><br><br><br><br><br>
   </nuxt-layout>
</template>

<script setup>
   
   const date = ref('');

</script>

<style scoped>



</style>