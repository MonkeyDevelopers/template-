<template>
  <div class="idk">
    <div>
      <div>
        <KoBadge color="success">Badge</KoBadge>
        <KoBadge color="info">Badge</KoBadge>
        <KoBadge color="danger">Badge</KoBadge>
        <KoBadge color="warning">Badge</KoBadge>
        <KoBadge color="disabled">Badge</KoBadge>
        <KoBadge color="#fb0ebe">Badge</KoBadge>
      </div>
      <div>
        <KoButton color="success">Button</KoButton>
        <KoButton color="info">Button</KoButton>
        <KoButton color="danger">Button</KoButton>
        <KoButton color="warning">Button</KoButton>
        <KoButton color="disabled">Button</KoButton>
        <KoButton color="#fb0ebe">Button</KoButton>
      </div>
    </div>
    <div>
      <div>
        <KoDropdownMenu :options="actionOptions" compact>
          <template #default>
            <KoBadge class="success"> Menu </KoBadge>
          </template>
          <template #option="{ option }" class="modal_item">
            <span>
              {{ option.name }}
            </span>
          </template>
        </KoDropdownMenu>
        <KoDropdownOptions :options="actionOptions" compact>
          <template #default>
            <KoBadge class="success"> Options </KoBadge>
          </template>
          <template #option="{ option }" class="modal_item">
            <span>
              {{ option.name }}
            </span>
          </template>
        </KoDropdownOptions>
      </div>
      <div>
        <div class="card_icon">
          <KoPulse color="success"></KoPulse>
        </div>
        <div class="card_icon">
          <KoPulse color="info"></KoPulse>
        </div>
        <div class="card_icon">
          <KoPulse color="danger"></KoPulse>
        </div>
        <div class="card_icon">
          <KoPulse color="warning"></KoPulse>
        </div>
        <div class="card_icon">
          <KoPulse color="#c31296"></KoPulse>
        </div>
      </div>
      <div>
        <KoToggle :items v-model="selected" />
      </div>
      <div>
        <KoToggle color="success" :items v-model="selected" />
      </div>
    </div>
  </div>
</template>

<script setup>
const items = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" },
  { id: 4, name: "Item 4" },
  { id: 5, name: "Item 5" },
];
const actionOptions = [
  { name: "Editar", icon: "edit" },
  { name: "Excluir", icon: "delete" },
  { name: "Visualizar", icon: "visibility" },
];
const selected = ref([1, 3, 4]);
</script>

<style scoped>
.idk {
  display: flex;
  gap: 50px;
}
div {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
}
.card_icon {
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background: #202020;
  position: relative;
  margin-left: 10px;
}
</style>
