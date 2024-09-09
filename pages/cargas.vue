<template>
   <nuxt-layout
      name="admin"
      title="Cargas"
      description="Gerenciamento de Cargas/Entregas"
   >
   
      <div class="truck_body">
         
         <truckage-card />
         <truckage-card />
         <truckage-card />
         <truckage-card />
         <truckage-card />
         
      </div>
   
   </nuxt-layout>
</template>

<script setup>
   useHead({
      title: 'Cargas - Admin'
   })

</script>

<style scoped>

   .truck_body {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      row-gap: 10px;
   }

</style>