<template>
   <div class="row_item" :class="{
      'item_thin': size == 'thin',
      'item_light': size == 'light',
      'item_normal': size == 'normal',
      'item_full': size == 'full',
   }">
      <span><slot></slot></span>
   </div>
</template>
 
<script setup>

   const props = defineProps({
      size: {default: 'normal', required: false}
   });

</script>

<style scoped>
.item_thin {
  flex: 0 !important;
  margin-right: 20px;
}

.item_light {
  flex: 0.5 !important;
}

.item_normal {
  flex: 1 !important;
}

.item_full {
  flex: 1.5 !important;
}

.row_item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.row_item span {
  font-size: 13px;
  color: #ebebeb;
  font-weight: 300;
}
</style>
