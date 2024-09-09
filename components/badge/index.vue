<template>
    <p :style="{ backgroundColor: setColor() }">
        <slot></slot>
    </p>
</template>

<script setup>

    const props = defineProps({
        color: {
            type: String,
            default: '#202020'
        }
    });

    function setColor() {
        const colors = {
            success: '#00ffa64a',
            warning: '#ff80004a',
            danger: '#ff00004a',
            info: '#003cff4a',
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