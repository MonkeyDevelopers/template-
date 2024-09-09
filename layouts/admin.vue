<template>
   <Sidebar :options />

   <div class="layout_container">

      <header class="header">

         <div class="header_title">
            <h2>{{ title }}</h2>
            <p>{{ description }}</p>
         </div>

         <DropdownMenu title="Menu" :options="actionOptions">
            <icon name="ph:gear-fine" class="header_menu_icon" />
         </DropdownMenu>
      </header>



      <div class="layout_body">

         <slot></slot>

      </div>

   </div>

</template>

<script setup>
const options = [
   {
      link: "/",
      icon: "ph:house",
      name: "Inicio",
      active: "index",
      mini: true,
   },
   {
      link: "/",
      icon: "ph:calendar-dots-light",
      name: "Agenda",
      active: "agenda",
   },
   {
      link: "/cargas",
      icon: "ph:clipboard-text",
      name: "Cargas",
      active: "cargas",
      mini: true,
   },
   {
      link: "/",
      icon: "ph:clipboard-text",
      name: "Consultar Cargas",
      active: "consultar_cargas",
   },
   {
      link: "/",
      icon: "ph:map-pin-simple-area",
      name: "GPS",
      active: "gps",
   },
   {
      link: "/",
      icon: "ph:cardholder-light",
      name: "Financeiro",
      active: "financeiro",
   },
   {
      link: "/expedicao",
      icon: "ph:paper-plane-tilt",
      name: "Expedição",
      active: "expedicao",
      mini: true,
   },
   {
      link: "/",
      icon: "ph:chart-line",
      name: "Faturamento",
      active: "faturamento",
   },
   {
      link: "/",
      icon: "ph:file-text",
      name: "Documentos",
      active: "documentos",
   },
   {
      link: "/",
      icon: "ph:warning-octagon",
      name: "Intervenções",
      active: "intervencoes",
   },
   {
      link: "/",
      icon: "ph:flag-banner",
      name: "Ocorrências",
      active: "ocorrencias",
   },
   {
      link: "/cadastros",
      icon: "ph:bookmarks",
      name: "Cadastros",
      active: "cadastros",
   },
];

const actionOptions = [
   {
      icon: "ph:gear-fine",
      name: "Configurações",
      action: () => {
         console.log('Configurações');
      }
   },
   {
      icon: "ph:sign-out",
      name: "Sair do Sistema",
      action: () => {
         console.log('Sair');
      }
   },
];

const props = defineProps({
   title: '',
   description: ''
});

const mobileMenuStore = useMobileMenu();
const { mobileMenu } = storeToRefs(mobileMenuStore);

</script>

<style scoped>
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

/* responsive */

@media screen and (max-width: 1024px) {

   .layout_container {
      padding-left: 0px;
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