<template>

   <div class="card">
      <div class="card_icon">
         <icon name="ph:package" class="icon_card" />
         <div class="pulse"></div>
      </div>
      <div class="card_col">
         <div class="card_row">
            <span>Rastreio</span>
            <div class="card_labels">
               <label>NC: CL0001-08-24-1</label>
               <label>IC: IC0001</label>
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
            <p>Inicial</p>
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
            <span>Ações</span>
            <icon name="ph:arrow-square-out" class="card_action_icon" />
         </div>
      </div>
   </div>
   
</template>

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
   
   .pulse {
      background: #ff5c11;
      border-radius: 50%;
      height: 13px;
      width: 13px;
      position: absolute;
      top: -10%;
      left: -10%;
      /* box-shadow: 0 0 0 0 rgba(0, 0, 0, 1); */
      transform: scale(1);
      animation: pulse 2s infinite;
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
   
   .card_row p {
      color: #ffffff;
      padding: 3px 8px;
      border-radius: 3px;
      background: #003cff4a;
      font-size: 11px;
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
   
   @keyframes pulse {
      0% {
         transform: scale(0.95);
         box-shadow: 0 0 0 0 #ff5c11b3;
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