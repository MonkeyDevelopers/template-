<template>
   <nuxt-layout name="admin" title="Select" description="Selects?">
      <div>
         <Select v-model="selectedOption" :options="options" />
         <br><br><br><br><br>
         <p>Opção selecionada: {{ selectedOption }}</p>
       </div>
   </nuxt-layout>
</template>

<script setup>

   const options = [
      { name: 'Opção com um nome gigantesco e nao cabe no select', id: '1' },
      { name: 'Emidio amigao', id: '2' },
      { name: 'Jocasta mamae', id: '3' },
      { name: 'Opção 4', id: '4' },
      { name: 'Sei la so fiz aqui tmb', id: '5' },
   ];

   const selectedOption = ref(null);


   useHead({
      title: 'Select - Admin'
   });

</script>

<style scoped></style>