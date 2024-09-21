<template>
   <div class="table_container">
      
      <div class="table_header">
         <div class="table_input">
            <UIInput :placeholder="'Buscar por Email'"/>
         </div>
      </div>

      <div class="table">
         <div class="table_head">
            <div class="table_item item_thin">
               <UICheckbox v-model="selectall" />
            </div>
            <div class="table_item item_light">
               <span>Status</span>
            </div>
            <div class="table_item item_normal">
               <span>Name</span>
            </div>
            <div class="table_item item_full">
               <span>Email</span>
            </div>
            <div class="table_item">
               <span>Birth Date</span>
            </div>
            <div class="table_item">
               <span></span>
            </div>
         </div>
         <div class="table_body">
            <div class="table_row"
               v-for="user in users"
            >
               <div class="row_item item_thin">
                  <UICheckbox />
               </div>
               <div class="row_item item_light">
                  <span>{{ user.status ? 'Ativo' : 'Inativo' }}</span>
               </div>
               <div class="row_item item_normal">
                  <span>{{ user.name }}</span>
               </div>
               <div class="row_item item_full">
                  <span>{{ user.email }}</span>
               </div>
               <div class="row_item">
                  <span>{{ user.birth_date }}</span>
               </div>
               <div class="row_item">
                  <span>action</span>
               </div>
            </div>
         </div>
      </div>
      <div class="table_footer">
         <UIPagination />
      </div>
      
   </div>
   
   
</template>

<script setup>

   const selectall = ref(false)

   const users = ref([
      {
         status: true,
         name: 'Davi',
         email: 'daviprm@outlook.com',
         birth_date: '03/03/2001',
      },
      {
         status: true,
         name: 'Emidio',
         email: 'emidio@gmail.com',
         birth_date: '29/12/1996',
      },
      {
         status: true,
         name: 'Emerson',
         email: 'emerson@mail.com',
         birth_date: '04/07/2000',
      },
      {
         status: false,
         name: 'Usuário',
         email: 'user@msn.com',
         birth_date: '02/05/1998',
      },
      {
         status: false,
         name: 'Teste',
         email: 'teste@teste.com',
         birth_date: '16/09/2002',
      },
   ])

   const options = [
      { name: 'Opção com um nome gigantesco e nao cabe no select', id: '1' },
      { name: 'Emidio amigao', id: '2' },
      { name: 'Jocasta mamae', id: '3' },
      { name: 'Opção 4', id: '4' },
      { name: 'Sei la so fiz aqui tmb', id: '5' },
   ];

   const selectedOption = ref(null);

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
      transition: .3s;
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
      transition: .3s;
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