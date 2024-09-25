<template>
  <div class="table_container">
    <div class="table">
      <div class="table_head">
        <div v-if="hasToggle" class="table_item item_thin">
          <UICheckbox @click="toggleAllItems()" v-model="selectall" />
        </div>
        <div
          v-for="header in headers"
          class="table_item"
          :class="'item_' + header.size"
        >
          <span> {{ header.label }}</span>
        </div>
      </div>
      <div class="table_body">
        <div class="table_row" :class="item.selected ? 'row_selected' : ''" v-for="item in items">
          <div v-if="hasToggle" class="row_item item_thin">
            <UICheckbox @click="toggleItem(item)" v-model="item.selected" />
          </div>
          <slot :name="header.key" :item v-for="header in headers">
            <UIDataTableRowItem>
              {{ item[header.key] }}
            </UIDataTableRowItem>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

const selectedItems = defineModel({ default: [], required: false });

const props = defineProps({
  headers: { type: Array, default: [], required: true },
  items: { type: Array, default: [], required: true },
  hasToggle: { type: Boolean, default: false, required: false }
});

const selectall = ref(false);
const localItems = reactive([...props.items]);

// watch(selectall, (newValue) => {
//   localItems.forEach(item => {
//     toggleItem(item)
//   });
// });

// watch(selectedItems, (newValue) => {
//   if(selectedItems.value.length == 0) {
//     selectall.value = false;
//     return;
//   }
  
//   if(selectedItems.value.length == localItems.length) {
//     selectall.value = true;
//   }
  
// });

function toggleItem(item) {
  
  const itemIndex = selectedItems.value.indexOf(item);
  
  if(itemIndex != -1) {
    selectedItems.value.splice(itemIndex, 1);
    item.selected = false;
    if(selectedItems.value.length == 0) {
      selectall.value = false;
    }
    selectall.value = false;
  } else {
    selectedItems.value.push(item);
    item.selected = true;
    if(selectedItems.value.length == localItems.length) {
      selectall.value = true;
    }
  }
    
}

function toggleAllItems() {
  
  if(selectall.value) {
    localItems.forEach(item => {
      selectedItems.value.push(item)
      item.selected = true;
    });
  } else {
    selectedItems.value = [];
    localItems.forEach(item => {
      item.selected = false;
    });
  }

}


</script>

<style scoped>
.table_container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.table_input {
  width: 300px;
}

.table_select {
  width: 250px;
}

.table_header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

.table {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #27262b;
  overflow: hidden;
  border-radius: 5px;
}

.table_head {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  padding: 15px 20px;
  transition: 0.3s;
}

.table_head:hover {
  background: #212121;
}

.table_item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

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

.table_item span {
  font-size: 13px;
  color: #ebebeb;
  font-weight: 300;
}

.table_body {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.table_row {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  padding: 25px 20px;
  transition: 0.3s;
  border-top: 1px solid #27262b;
}

.table_row:hover {
  background: #212121;
}

.row_selected {
  background: #161616;
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

.table_footer {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
