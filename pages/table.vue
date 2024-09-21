<template>
  <nuxt-layout name="admin" title="Table" description="Table?">
    <UITable :headers :items>
      <template #status="{ item }">
        <div class="row_item item_light" >
          <span>{{ item.status ? "Ativo" : "Inativo" }}</span>
        </div>
      </template>
      <template #name="{ item }">
        <div class="row_item item_normal">
          <span>{{ item.name }}</span>
        </div>
      </template>
      <template #email="{ item }">
        <div class="row_item item_full">
          <span>{{ item.email }}</span>
        </div>
      </template>
      <template #birth_date="{ item }">
        <div class="row_item">
          <span>{{ item.birth_date }}</span>
        </div>
      </template>
      <template #action="{ item }">
         <icon name="ph:gear-fine" class="header_menu_icon" />
      </template>
    </UITable>
  </nuxt-layout>
</template>

<script setup>
useHead({
  title: "Table - Admin",
});

const headers = [
  {
    key: "status",
    label: "Status",
    size: "light",
  },
  {
    key: "name",
    label: "Name",
    size: "normal",
  },
  {
    key: "email",
    label: "Email",
    size: "full",
  },
  {
    key: "birth_date",
    label: "Birth Date",
  },
  {
    key: "action",
    label: "",
  },
];

const items = ref([
  {
    status: true,
    name: "Davi",
    email: "daviprm@outlook.com",
    birth_date: "03/03/2001",
  },
  {
    status: true,
    name: "Emidio",
    email: "emidio@gmail.com",
    birth_date: "29/12/1996",
  },
  {
    status: true,
    name: "Emerson",
    email: "emerson@mail.com",
    birth_date: "04/07/2000",
  },
  {
    status: false,
    name: "Usuário",
    email: "user@msn.com",
    birth_date: "02/05/1998",
  },
  {
    status: false,
    name: "Teste",
    email: "teste@teste.com",
    birth_date: "16/09/2002",
  },
]);
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
