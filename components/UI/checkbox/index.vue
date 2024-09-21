<template>
   <icon 
     @click="toggleSelection" 
     :name="modelValue ? 'ph:check-square-fill' : 'ph:square'" 
     class="checkbox_icon" 
   />
</template>

<script setup>
   
   const props = defineProps({
     modelValue: {
       type: Boolean,
       default: false,
     }
   });

   const emit = defineEmits(['update:modelValue']);
   
   const toggleSelection = () => {
      emit('update:modelValue', !props.modelValue);
   }

</script>

<style scoped>
   .checkbox_icon {
      font-size: 18px;
      cursor: pointer;
      transition: .1s;
      margin: 0;
      color: #ebebeb;
   }
</style>