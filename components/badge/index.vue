<template>
    <p :style="{ backgroundColor: setColor() }">
        <slot></slot>
    </p>
</template>

<script setup>
import { color } from 'chart.js/helpers';

const props = defineProps({
    color: {
        type: String,
        default: '#202020'
    }
});

function setColor() {
    const colors = {
        success: '#28a745',
        warning: '#ffc107',
        danger: '#dc3545',
        info: '#17a2b8',
        disabled: '#202020'
    };

    if(!props.color) {
        return disabled;
    }

    if (props.color.startsWith('#')) {
        return props.color;
    }

    switch (props.color) {
        case 'success':
            return colors.success;
        case 'warning':
            return colors.warning;
        case 'danger':
            return colors.danger;
        case 'info':
            return colors.info;
        default:
            return colors.disabled;
    }
}
</script>

<style scoped>
p {
    color: #ffffff;
    padding: 3px 8px;
    border-radius: 3px;
    font-size: 11px;
}
</style>