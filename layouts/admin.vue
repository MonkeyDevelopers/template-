<template>

   <div class="sidebar_container">
      
      <div class="sidebar">
         
         <a href="/" class="sidebar_header">
            <icon class="sidebar_header_icon" name="ph:package" />
            <span>Admin</span>
         </a>
      
         <a href="/" class="sidebar_item" :class="useRoute().name == 'index' ? 'sidebar_item_active' : ''">
            <icon class="sidebar_item_icon" name="ph:house" />
            <span>Início</span>
         </a>
         
         <a href="/" class="sidebar_item" :class="useRoute().name == 'agenda' ? 'sidebar_item_active' : ''">
            <icon class="sidebar_item_icon" name="ph:calendar-dots-light" />
            <span>Agenda</span>
         </a>
         
         <a href="/cargas" class="sidebar_item" :class="useRoute().name == 'cargas' ? 'sidebar_item_active' : ''">
            <icon class="sidebar_item_icon" name="ph:clipboard-text" />
            <span>Cargas</span>
         </a>
         
         <a href="/" class="sidebar_item" :class="useRoute().name == 'consultar_cargas' ? 'sidebar_item_active' : ''">
            <icon class="sidebar_item_icon" name="ph:clipboard-text" />
            <span>Consultar Cargas</span>
         </a>
         
         <a href="/" class="sidebar_item" :class="useRoute().name == 'gps' ? 'sidebar_item_active' : ''">
            <icon class="sidebar_item_icon" name="ph:map-pin-simple-area" />
            <span>GPS</span>
         </a>
         
         <a href="/" class="sidebar_item" :class="useRoute().name == 'financeiro' ? 'sidebar_item_active' : ''">
            <icon class="sidebar_item_icon" name="ph:cardholder-light" />
            <span>Financeiro</span>
         </a>
         
         <a href="/expedicao" class="sidebar_item" :class="useRoute().name == 'expedicao' ? 'sidebar_item_active' : ''">
            <icon class="sidebar_item_icon" name="ph:paper-plane-tilt" />
            <span>Expedição</span>
         </a>
         
         <a href="/" class="sidebar_item" :class="useRoute().name == 'faturamento' ? 'sidebar_item_active' : ''">
            <icon class="sidebar_item_icon" name="ph:chart-line" />
            <span>Faturamento</span>
         </a>
         
         <a href="/" class="sidebar_item" :class="useRoute().name == 'documentos' ? 'sidebar_item_active' : ''">
            <icon class="sidebar_item_icon" name="ph:file-text" />
            <span>Documentos</span>
         </a>
         
         <a href="/" class="sidebar_item" :class="useRoute().name == 'intervencoes' ? 'sidebar_item_active' : ''">
            <icon class="sidebar_item_icon" name="ph:warning-octagon" />
            <span>Intervenções</span>
         </a>
         
         <a href="/" class="sidebar_item" :class="useRoute().name == 'ocorrencias' ? 'sidebar_item_active' : ''">
            <icon class="sidebar_item_icon" name="ph:flag-banner" />
            <span>Ocorrências</span>
         </a>
         
         <a href="/cadastros" class="sidebar_item" :class="useRoute().name == 'cadastros' ? 'sidebar_item_active' : ''">
            <icon class="sidebar_item_icon" name="ph:bookmarks" />
            <span>Cadastros</span>
         </a>
         
      </div>
      
   </div>
   
   <div class="layout_container">
      
      <header class="header">
         
         <div class="header_title">
            <h2>{{ title }}</h2>
            <p>{{ description }}</p>
         </div>
         
         <icon name="ph:gear-fine" class="header_menu_icon" @click="modalActions = !modalActions" />
         
         <Transition name="fade">
            <div class="modal_header_actions" v-if="modalActions" ref="modal_actions_ref">
               
               <h2>Menu</h2>
               <hr>
               <div class="modal_header_actions_item">
                  <icon name="ph:sign-out" class="modal_header_actions_item_icon" />
                  <span>Sair do Sistema</span>
               </div>
               
            </div>
         </Transition>
         
      </header>
      
      <div class="bottom_menu_container">
         <div class="bottom_menu">
            <a href="/" class="bottom_menu_item" :class="useRoute().name == 'index' ? 'bottom_menu_item_active' : ''">
               <icon class="bottom_menu_item_icon" name="ph:house" />
               <span>Início</span>
            </a>
            <a href="/cargas" class="bottom_menu_item" :class="useRoute().name == 'cargas' ? 'bottom_menu_item_active' : ''">
               <icon class="bottom_menu_item_icon" name="ph:clipboard-text" />
               <span>Cargas</span>
            </a>
            <a href="/expedicao" class="bottom_menu_item" :class="useRoute().name == 'expedicao' ? 'bottom_menu_item_active' : ''">
               <icon class="bottom_menu_item_icon" name="ph:paper-plane-tilt" />
               <span>Expedição</span>
            </a>
            <div class="bottom_menu_item" @click="mobileMenuStore.changeMobileMenu(true)">
               <icon class="bottom_menu_item_icon" name="ph:text-align-right-light" />
               <span>Menu</span>
            </div>
         </div>
      </div>
      
      <!-- mobile menu -->
      <mobile-menu-bg />
      <mobile-menu-item />
      
      <div class="layout_body">
         
         <slot />
         
      </div>
      
   </div>

</template>

<script setup>

   const props = defineProps({
      title: '',
      description: ''
   });

   const modalActions = ref(false);
   
   const modal_actions_ref = ref(null);
   onClickOutside(modal_actions_ref, (event) => {
      if(modalActions.value == true) {
         modalActions.value = false;
      }
   });
   
   const mobileMenuStore = useMobileMenu();
   const {mobileMenu} = storeToRefs(mobileMenuStore);

</script>

<style scoped>

   .sidebar_container {
      height: 100svh;
      padding: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 10;
   }
      
   .sidebar {
      width: 64px;
      height: 100%;
      overflow: hidden;
      background: #0E0E0E;
      border: 2px solid #171717;
      border-radius: 6px;
      /* background: red; */
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 10px;
      row-gap: 5px;
   }
   
   .sidebar_container:hover .sidebar {
      width: 250px;
   }

   
   .sidebar_item {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 10px;
      border-radius: 6px;
      column-gap: 10px;
      position: relative;
      /* background: red; */
      cursor: pointer;
      transition: .3s;
   }
   
   .sidebar_item:hover {
      background: #171717;
   }
   
   .sidebar_item span {
      position: absolute;
      white-space: nowrap;
      left: 55px;
      font-size: 13px;
      color: #959595;
      transition: .3s;
   }
   
   .sidebar_item_icon {
      font-size: 20px !important;
      color: #959595;
      transition: .3s !important;
   }
   
   .sidebar_item_active {
      background: #c51b1b !important;
   }
   
   .sidebar_item_active span {
      color: white !important;
      font-weight: 300;
   }
   
   .sidebar_item_active .sidebar_item_icon {
      color: white !important;
   }
   
   .sidebar_item:hover span {
      color: white;
   }
   
   .sidebar_item:hover .sidebar_item_icon {
      color: white;
   }
   
   /* sidebar_header */
   
   .sidebar_header {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 8px;
      border-radius: 6px;
      column-gap: 10px;
      position: relative;
      /* background: red; */
      transition: .3s;
      margin-bottom: 20px;
      cursor: pointer;
   }
   
   .sidebar_header span {
      position: absolute;
      text-align: start;
      left: 55px;
      font-size: 16px;
      font-weight: 600;
      color: #ffffff;
      transition: .3s;
   }
   
   .sidebar_header_icon {
      font-size: 24px !important;
      color: #c51b1b;
   }
   
   /* header */
   
   .layout_container {
      width: 100%;
      display: flex;
      padding-left: 78px;
      flex-direction: column;
      align-items: flex-start;
      row-gap: 20px;
      /* background: red; */
   }
   
   .header {
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding: 20px;
   }
   
   .header_title {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
   }
   
   .header_title h2 {
      font-size: 16px;
      color: #dcdcdc;
      font-weight: 500;
   }
   
   .header_title p {
      font-size: 13px;
      font-weight: 300;
      color: #969696;
   }
   
   .header_menu_icon {
      color: #dcdcdc;
      font-size: 35px;
      cursor: pointer;
      transition: .3s;
      padding: 5px;
      border-radius: 4px;
   }
   
   .header_menu_icon:hover {
      background: #242424;
      color: white;
   }
   
   /* container page */
   
   .layout_body {
      width: 100%;
      padding: 20px;
      color: white;
      padding-bottom: 200px;
   }
   
   /* modal */
   
   .modal_header_actions {
      width: 230px;
      background: #0E0E0E;
      border: 2px solid #171717;
      border-radius: 6px;
      padding: 15px;
      position: absolute;
      top: 55px;
      right: 20px;
      z-index: 3;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      row-gap: 10px;  
   }
   
   .modal_header_actions h2 {
      font-size: 15px;
      color: #dcdcdc;
      font-weight: 400;
   }
   
   .modal_header_actions hr {
      width: 100%;
      height: 2px;
      background: #171717;
   }
   
   .modal_header_actions_item {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 8px;
      border-radius: 6px;
      column-gap: 10px;
      position: relative;
      /* background: red; */
      cursor: pointer;
      transition: .3s;
   }
   
   .modal_header_actions_item:hover {
      background: #171717;
   }
   
   .modal_header_actions_item span {
      position: absolute;
      white-space: nowrap;
      left: 55px;
      font-size: 12px;
      color: #959595;
      transition: .3s;
   }
   
   .modal_header_actions_item_icon {
      font-size: 20px !important;
      color: #959595;
      transition: .3s !important;
   }
   
   
   .modal_header_actions_item:hover span {
      color: white;
   }
   
   .modal_header_actions_item:hover .modal_header_actions_item_icon {
      color: white;
   }
   
   /* bottom_menu */
   
   .bottom_menu_container {
      width: 100%;
      position: fixed;
      bottom: 0;
      left: 0;
      padding: 5px;
      display: none;
      justify-content: center;
      align-items: center;
      color: white;
      z-index: 10;
   }
   
   .bottom_menu {
      width: 100%;
      padding: 8px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #0E0E0E;
      border: 2px solid #171717;
      border-radius: 6px;
      column-gap: 8px;
   }
   
   .bottom_menu_item {
      padding: 6px;
      border-radius: 8px;
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      cursor: pointer;
      transition: .3s;
   }
   
   .bottom_menu_item:hover {
      background: #171717;
   }
   
   .bottom_menu_item:hover span {
      color: white;
   }
   
   .bottom_menu_item:hover .bottom_menu_item_icon {
      color: white;
   }
   
   .bottom_menu_item_active {
      background: #c51b1b !important;
   }
   
   .bottom_menu_item_active span {
      color: white !important;
      font-weight: 300;
   }
   
   .bottom_menu_item_active .bottom_menu_item_icon {
      color: white !important;
   }
   
   .bottom_menu_item_icon {
      font-size: 18px !important;
      color: #959595;
      transition: .3s !important;
   }
   
   .bottom_menu_item span {
      white-space: nowrap;
      font-size: 13px;
      color: #959595;
      transition: .3s;
   }
   
   
   /* responsive */
   
   @media screen and (max-width: 1024px) {
      
      .sidebar_container {
         display: none;
      }
      
      .layout_container {
         padding-left: 0px;
      }
      
      .bottom_menu_container {
         display: flex;
      }
      
   }
   
   
   
   
   
   
   
   
   
   
   /* transition */
   
   .fade-enter-active {
      transition: all .2s;
   }

   .fade-leave-active {
      transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
   }

   .fade-enter-from,
   .fade-leave-to {
      opacity: 1;
      opacity: 0;
   }
   
</style>