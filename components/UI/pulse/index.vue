<template>
   
   <div :style="badgeStyle" class="pulse"></div>
   
</template>

<script setup>

   const props = defineProps({
      color: {
         type: String,
         default: "#202020"
      }
   });

   const UseColor = useColor(props.color);

   const badgeStyle = computed(() => ({
      '--badge-color': UseColor.setColor(props.color),
      '--badge-shadow-color': UseColor.setColor(props.color) + '99'
   }));

</script>

<style scoped>

   .pulse {
      background: var(--badge-color);
      border-radius: 50%;
      height: 13px;
      width: 13px;
      position: absolute;
      top: -10%;
      left: -10%;
      /* box-shadow: 0 0 0 0 rgba(0, 0, 0, 1); */
      transform: scale(1);
      animation: pulse 2s infinite;
      /* background-color: #484848; */
   }

   @keyframes pulse {
      0% {
         transform: scale(0.95);
         box-shadow: 0 0 0 0 var(--badge-shadow-color);
      }

      70% {
         transform: scale(1);
         box-shadow: 0 0 0 7px rgba(0, 0, 0, 0);
      }

      100% {
         transform: scale(0.95);
         box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
      }
   }

</style>