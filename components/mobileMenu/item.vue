<template>
   
   <Transition name="slide-fade">
      <div class="mobile_sidebar_container" v-if="mobileMenu">
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
   </Transition>
   
</template>

<script setup>

   const mobileMenuStore = useMobileMenu();
   const {mobileMenu} = storeToRefs(mobileMenuStore);
   
</script>

<style scoped>

   .mobile_sidebar_container {
      height: 100svh;
      padding: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: fixed;
      top: 0;
      right: 0;
      z-index: 22;
   }
   
   .sidebar {
      width: 260px;
      height: 100%;
      overflow: scroll;
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
   
   
   /* slide */
   .slide-fade-enter-active {
      transition: all .4s;
   }

   .slide-fade-leave-active {
      transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
   }

   .slide-fade-enter-from,
   .slide-fade-leave-to {
      transform: translateX(100px);
      opacity: 0;
   }

</style>