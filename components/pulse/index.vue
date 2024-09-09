<template>
   
   <div :style="badgeStyle" class="pulse"></div>
   
</template>

<script setup>

   const props = defineProps({
      color: {
         type: String,
         default: '#484848'
      }
   });
   
   function setColor() {
      
      const colors = {
         success: '#11ff9c',
         warning: '#ff8811',
         danger: '#ff1111',
         info: '#0048ff',
         disabled: '#202020'
      };
      
      if(!props.color) {
            return disabled;
        }

        if (props.color.startsWith('#')) {
            return props.color;
        }

        switch (props.color) {
            case 'success':
                return colors.success;
            case 'warning':
                return colors.warning;
            case 'danger':
                return colors.danger;
            case 'info':
                return colors.info;
            default:
                return colors.disabled;
        }
   }
   
   const badgeStyle = computed(() => ({
      '--badge-color': setColor(),
      '--badge-shadow-color': setColor() + '99'
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