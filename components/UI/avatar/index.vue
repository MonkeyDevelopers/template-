<template>
   
   <div class="avatar"
      :style="{
         '--color': useColor().setColor(color),
         '--shadow-color': useColor().setColor(color) + '99',
         '--font-size': (size / 3) + 'px',
         '--size': size + 'px',
         '--radius': radius == 'rounded' ? '50%' : radius + 'px'
      }"
   >
      <img v-if="imageExists" :src="src" alt="">
      <span v-if="name && !imageExists">{{ getInitialChars(name) }}</span>
      <span v-if="!name && !imageExists"><slot>USR</slot></span>
   </div>

</template>

<script setup>

   const props = defineProps({
      color: { type: String, default: 'primary' },
      src: {type: String, default: ''},
      name: {type: String, default: ''},
      size: {type: String, default: '50'},
      radius: {type: String, default: '4'}
   });
   
   const imageExists = ref(false);

   const checkImageExists = (url) => {
      const img = new Image();
      img.onload = () => imageExists.value = true;
      img.onerror = () => imageExists.value = false;
      img.src = url;
   };
   
   const getInitialChars = (name) => {
      const nameParts = name.trim().split(' ');

      if (nameParts.length === 1) {
         return nameParts[0].slice(0, 2).toUpperCase();
      } else {
         const firstInitial = nameParts[0][0].toUpperCase();
         const lastInitial = nameParts[1][0].toUpperCase();
         return firstInitial + lastInitial;
      }
   }
   
   onMounted(() => {
      if (props.src) {
         checkImageExists(props.src);
      }
   });
   
</script>

<style scoped>

   .avatar {
      width: var(--size);
      height: var(--size);
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      border-radius: var(--radius);
      border: 1px solid var(--color);
   }
   
   .avatar img {
      width: 100%;
      height: 100%;
      object-fit: cover;
   }
   
   .avatar span {
      font-size: var(--font-size)
   }

</style>