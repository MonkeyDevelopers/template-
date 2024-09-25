<template>
  <nuxt-layout name="admin" title="Table" description="Table?">
    <UIDataTable :hasToggle="true" :headers :items v-model="teste">
      <template #status="{ item }">
        <UIDataTableRowItem size="light">
          <span>{{ item.status ? "Ativo" : "Inativo" }}</span>
        </UIDataTableRowItem>
      </template>
      <template #name="{ item }">
        <UIDataTableRowItem>
          <span>{{ item.name }}</span>
        </UIDataTableRowItem>
      </template>
      <template #email="{ item }">
        <UIDataTableRowItem size="full">
          <span>{{ item.email }}</span>
        </UIDataTableRowItem>
      </template>
      <template #birth_date="{ item }">
        <UIDataTableRowItem size="full">
          <span>{{ item.birth_date }}</span>
        </UIDataTableRowItem>
      </template>
      <template #action="{ item }">
        <UIDataTableRowItem>
          <icon name="ph:gear-fine" class="action_icon_test" />
        </UIDataTableRowItem>
      </template>
    </UIDataTable>
    <br>
    <UIPagination />
  </nuxt-layout>
</template>

<script setup>

const teste = ref([])

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
    size: "full",
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

  .action_icon_test {
    font-size: 16px;
  }

</style>
