<template>
  <div class="table_container">
    <div class="table_header">
      <div class="table_input">
        <UIInput :placeholder="'Buscar por Email'" />
      </div>
    </div>
    <div class="table">
      <div class="table_head">
        <div class="table_item item_thin">
          <UICheckbox v-model="selectall" />
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
        <div class="table_row" v-for="item in items">
          <div class="row_item item_thin">
            <UICheckbox />
          </div>
          <slot :name="header.key" :item v-for="header in headers">
            {{ item[header.key] }}
          </slot>
        </div>
      </div>
    </div>
    <div class="table_footer">
      <UIPagination />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  headers: { type: Array, default: [], required: true },
  items: { type: Array, default: [], required: true },
});

const selectall = ref(false);
</script>

<style scoped>
.table_container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 200px;
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
  border-radius: 8px;
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
