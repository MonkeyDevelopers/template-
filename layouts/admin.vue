<template>
  <KoSidebar class="menu">
    <template #header>
      <SidebarHeader />
    </template>

    <template #default>
      <SidebarItems :options="options" />
    </template>
  </KoSidebar>
  <KoSidebarBottom class="bottom">
    <SidebarBottom :options="options" />
  </KoSidebarBottom>

  <div
    class="layout_container"
    :style="{
      '--color': $colors.primary,
    }"
  >
    <header class="header">
      <div class="header_title">
        <h2>{{ title }}</h2>
        <p>{{ description }}</p>
      </div>
      <KoDropdownMenu :options="actionOptions" compact>
        <template #default>
          <icon name="ph:gear-fine" class="header_menu_icon" />
        </template>
        <template #option="{ option }" class="modal_item">
          <icon :name="option.icon" class="modal_icon" />
          <span>
            {{ option.name }}
          </span>
        </template>
      </KoDropdownMenu>
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
    link: "/table",
    icon: "ph:house",
    name: "Tabela",
    active: "table",
    mini: true,
  },
  {
    link: "/date-picker",
    icon: "ph:calendar-dots-light",
    name: "Date Picker",
    active: "date_picker",
  },
  {
    link: "/input_tag",
    icon: "ph:bookmark",
    name: "Input Tag",
    active: "input_tag",
    // mini: true,
  },
  {
    link: "/cargas",
    icon: "ph:clipboard-text",
    name: "Cargas",
    active: "cargas",
    // mini: true,
  },
];

const actionOptions = [
  {
    icon: "ph:gear-fine",
    name: "Configurações",
    action: () => {
      console.log("Configurações");
    },
  },
  {
    icon: "ph:sign-out",
    name: "Sair do Sistema",
    action: () => {
      console.log("Sair");
    },
  },
];

const props = defineProps({
  title: "",
  description: "",
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
  transition: 0.3s;
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

/* modal_item */
.modal_item {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  cursor: pointer;
  transition: 0.3s;
}

.modal_item:hover {
  background: #171717;
}

.modal_item span {
  color: #959595;
  transition: 0.3s;
}

.modal_icon {
  color: #959595;
  transition: 0.05s !important;
}

.modal_item:hover span {
  color: var(--color);
}

.modal_item:hover .modal_icon {
  color: var(--color);
}

/* responsive */
.bottom {
  display: none;
}

@media screen and (max-width: 1024px) {
  .layout_container {
    padding-left: 0px;
  }

  .bottom {
    display: flex;
  }

  .menu {
    display: none;
  }
}

.fade-enter-active {
  transition: all 0.2s;
}

.fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 1;
  opacity: 0;
}
</style>
