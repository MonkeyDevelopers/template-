<template>
   <nuxt-layout
      name="admin"
      title="Início"
      description="Dashboard Inicial"
   >
   
   
   </nuxt-layout>
</template>

<script setup>

   useHead({
      title: 'Início - Admin'
   });
   
   
</script>

<style scoped>

   .container {
      width: 100%;
      height: 60svh;
      display: flex;
      justify-content: center;
      align-items: center;
   }
   
   .header_menu_icon {
      color: #dcdcdc;
      font-size: 35px;
      cursor: pointer;
      transition: .3s;
      padding: 5px;
      border-radius: 4px;
   }

   .header_menu_icon:hover {
      background: #242424;
      color: white;
   }

</style>