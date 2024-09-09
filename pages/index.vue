<template>
   <nuxt-layout
      name="admin"
      title="Início"
      description="Dashboard Inicial"
   >
   
      <div class="container">
         <DropdownOptions title="Menu" :options="actionOptions" mode="modal_compact" />
      </div>
   
   </nuxt-layout>
</template>

<script setup>

   useHead({
      title: 'Início - Admin'
   });
   
   const actionOptions = [
      {
         icon: "ph:gear-fine",
         name: "Configurações",
         action: () => {
            console.log('Configurações');
         }
      },
      {
         icon: "ph:sign-out",
         name: "Sair do Sistema",
         action: () => {
            console.log('Sair');
         }
      },
   ];
   
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