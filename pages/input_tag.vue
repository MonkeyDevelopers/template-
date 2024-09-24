<template>
   <nuxt-layout name="admin" title="Input Tag" description="Input Tags?">
      <div class="test_container">
         <!-- <UITagInput /> -->
          <UIDragInput />
      </div>
   </nuxt-layout>
</template>

<script setup>

   useHead({
      title: 'Input Tag - Admin'
   });

</script>

<style scoped>

   .test_container {
      width: 100%;
   }

</style>