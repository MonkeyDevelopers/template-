<template>
   <div class="drag_and_drop_header">
     <input type="text" @keyup.enter="addItem" placeholder="Adicionar Item" v-model="itemToAdd" />
     <button @click="addItem">Adicionar</button>
   </div>
 
   <div class="drag_container" ref="el">
     <div
       class="drag_item"
        v-for="(item, index) in items"
        :key="item + '_' + index"
     >
       <icon name="ph:dots-six-vertical-bold" class="drag_icon" />
       <span>{{ item }}</span>
       <icon @click="items.splice(index, 1)" name="ph:trash" class="trash_icon" />
     </div>
   </div>
 </template>
 
 <script setup>
  import { useSortable } from '@vueuse/integrations/useSortable'

  const el = ref(null)

  
  const itemToAdd = ref('');
  const items = ref([]);
  
  function addItem() {
    if (itemToAdd.value) {
      items.value.push(itemToAdd.value);
      itemToAdd.value = '';
    }
  }
  
  const { option } = useSortable(el, items, {
    animation: 150,
  })
 
</script>
 
<style scoped>

  .drag_and_drop_header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5px;
  }

  .drag_and_drop_header input {
    flex: 1;
    padding: 9px;
    font-size: 13px;
    border-radius: 4px;
    border: 1px solid #171717;
    transition: 0.3s;
    background: none;
    color: #cecece;
  }
  
  .drag_and_drop_header input:focus {
    border: 1px solid #464646;
  }
  
  .drag_and_drop_header input::placeholder {
    color: #5d5d5d;
  }
  
  .drag_and_drop_header button {
    padding: 9px;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    transition: 0.3s;
    background: #C81F1F;
    color: white;
    cursor: pointer;
  }
  
  .drag_and_drop_header button:hover {
    background: #9e1717;
  }
  
  .drag_container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    margin-top: 15px;
  }

  .drag_item {
    width: 100%;
    user-select: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #171717;
    padding: 5px;
    border-radius: 4px;
    cursor: grab !important;
    transition: background-color 0.3s ease-in-out; /* Transição suave na cor de fundo */
    gap: 5px;
  }
  
  .drag_item:hover {
    border: 1px solid #252525;
  }

  .drag_icon {
    font-size: 18px;
    color: #aaaaaa;
  }
  
  .drag_item span {
    flex: 1;
    font-size: 13px;
    color: #aaaaaa;
  }
  
  .trash_icon {
    padding: 3px;
    border-radius: 2px;
    cursor: pointer;
    font-size: 24px;
    color: #aaaaaa;
    transition: .1s;
  }
  
  .trash_icon:hover {
    color: white;
  }
  
</style>