<template>

   <div class="card">
      <div class="card_icon">
         <icon name="ph:package" class="icon_card" />
         <UIPulse color="success"></UIPulse>
      </div>
      <div class="card_col">
         <div class="card_row">
            <span>Rastreio</span>
            <div class="card_labels">
               <UIBadge>NC: CL0001-08-24-1</UIBadge>
               <UIBadge>IC: IC0001</UIBadge>               
            </div>
         </div>
         <div class="card_row">
            <span>Cliente</span>
            <h2>Cliente Teste</h2>
         </div>
      </div>
      <div class="card_col">
         <div class="card_row">
            <span>Status</span>
            <UIBadge color="info">Inicial</UIBadge>
         </div>
         <div class="card_row">
            <span>Prazo de Entrega</span>
            <h2>27/08/2024 13:02</h2>
         </div>
      </div>
      <div class="card_col">
         <div class="card_row">
            <span>Origem</span>
            <h2>Alenquer - PA</h2>
         </div>
         <div class="card_row">
            <span>Destino</span>
            <h2>Amaral Ferrador - RS</h2>
         </div>
      </div>
      <div class="card_col responsive">
         <div class="card_row">
            <span>Última Localização</span>
            <h2>-</h2>
         </div>
         <div class="card_row">
            <span>Horário da Localização</span>
            <h2>-</h2>
         </div>
      </div>
      <div class="card_col">
         <div class="card_row">
            <!-- <span>Ações</span> -->
            <UIDropdownOptions :options="actionOptions" compact />
         </div>
      </div>
   </div>
   
</template>

<script setup>

   const actionOptions = [
      {
         icon: "ph:arrow-square-out-light",
         name: "Visualizar",
         action: () => {
            console.log('Visualizar');
         }
      },
      {
         icon: "ph:pencil-simple-light",
         name: "Editar",
         action: () => {
            console.log('Editar');
         }
      },
      {
         icon: "ph:trash-light",
         name: "Deletar",
         action: () => {
            console.log('Deletar');
         }
      },
   ];

</script>

<style scoped>

   .card {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      column-gap: 20px;
      background: #0E0E0E;
      border: 2px solid #171717;
      border-radius: 6px;
      padding: 10px;
      transition: .3s;
   }
   
   .card:hover {
      border: 2px solid #222222;
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
   }
   
   .icon_card {
      font-size: 20px;
      /* color: #959595; */
      color: white;
   }
   
   .card_col {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      row-gap: 10px;
   }
   
   .card_row {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      row-gap: 2px;
   }
   
   .card_row span {
      font-size: 12px;
      color: #959595;
      transition: .3s;
   }
   
   .card_row h2 {
      font-size: 12px;
      color: #d7d7d7;
      font-weight: 500;
      transition: .3s;
   }
   
   .card_labels {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      column-gap: 3px;
      row-gap: 3px;
      flex-wrap: wrap;
   }
   
   .card_labels label {
      color: #dadada;
      padding: 3px 8px;
      border-radius: 3px;
      background: #202020;
      font-size: 11px;
   }
   
   .card_action_icon {
      color: #d7d7d7;
      font-size: 25px;
      padding: 3px;
      border-radius: 3px;
      cursor: pointer;
      transition: .3s;
   }
   
   .card_action_icon:hover {
      background: #202020;
   }
   
   @media screen and (max-width: 1290px) {
      .responsive {
         display: none;
      }
   }
   


</style>