<template>
    <div class="container">
        <div class="menu">
            <slot></slot>
        </div>
    </div>
</template>

<style scoped>

.container {
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

.menu {
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



</style>