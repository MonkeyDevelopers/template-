<template>
   <nuxt-layout name="admin" title="Início" description="Dashboard Inicial">
      {{ test.test }}
      <button @click="test.add"> Add essa caralha +</button>
   </nuxt-layout>
</template>

<script setup>

   useHead({
      title: 'Início - Admin'
   });

   const useTest = () => {
      const test = ref(1110);

      const add = () => {
         test.value++;
      }
      const subtract = () => {
         test.value--;
      }

      return {
         test,
         add,
         subtract
      };
   }

   const test = useTest();

</script>

<style scoped></style>