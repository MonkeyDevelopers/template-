<template>
   
   <Transition name="fade">
      <div class="form_bg" @click="mobileMenuStore.changeMobileMenu(false)" v-if="mobileMenu"></div>
   </Transition>
   
</template>

<script setup>

   const mobileMenuStore = useMobileMenu();
   const {mobileMenu} = storeToRefs(mobileMenuStore);
   
</script>

<style scoped>

   .form_bg {
      width: 100%;
      height: 100svh;
      position: fixed;
      left: 0;
      top: 0;
      z-index: 20;
      background: rgba(0, 0, 0, 0.213);
      backdrop-filter: blur(2px);
   }
   

   .fade-enter-active,
   .fade-leave-active {
      transition: opacity 0.5s ease;
   }

   .fade-enter-from,
   .fade-leave-to {
      opacity: 0;
   }

</style>