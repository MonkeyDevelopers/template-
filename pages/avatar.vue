<template>
   <nuxt-layout
      name="admin"
      title="Avatar"
      description="Avatars?!"
   >
   
      <h2>Avatar</h2>
      <br><br><br><br><br>
      <UIAvatar
         size="100"
         name="nao quero mais"
         src="avatar.jpg"
         radius="10"
      ></UIAvatar>
      
   </nuxt-layout>
</template>

<script setup>

   useHead({
      title: 'Avatar - Admin'
   })

</script>