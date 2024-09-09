<template>
    <div class="bottom_menu_container">
        <div class="bottom_menu">
            <a v-for="option in miniOptions" :href="option.link" class="bottom_menu_item"
                :class="useRoute().name == option.active ? 'bottom_menu_item_active' : ''">
                <icon class="bottom_menu_item_icon" :name="option.icon" />
                <span>{{ option.name }}</span>
            </a>
            <div class="bottom_menu_item" @click="mobileMenuStore.changeMobileMenu(true)">
                <icon class="bottom_menu_item_icon" name="ph:text-align-right-light" />
                <span>Menu</span>
            </div>
        </div>
    </div>
    <!-- mobile menu -->
    <SidebarMobile :options exclusive />
</template>

<script setup>
const mobileMenuStore = useMobileMenu();
const { mobileMenu } = storeToRefs(mobileMenuStore);

const props = defineProps({
    options: { type: Object, default: {}, required: true },
    size: { type: String, default: '99', required: false },
});

const miniOptions = computed(() => {
    return props.options.filter((option) => option.mini).slice(0, props.size);
});
</script>

<style scoped>
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


@media screen and (max-width: 1024px) {

    .bottom_menu_container {
        display: flex;
    }

}
</style>