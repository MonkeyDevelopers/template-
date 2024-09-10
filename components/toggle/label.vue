<template>
    <div class="label" :class="{ selected: isSelected }" @click="toggleSelection">
        {{ item.name }}
    </div>
</template>

<script setup>
const props = defineProps({
    item: {
        type: Object,
        required: true,
    },
    initialSelected: {
        type: Boolean,
        default: false
    }
})

const emit = defineEmits(['update'])

const isSelected = ref(false);

onMounted(() => {
    isSelected.value = props.initialSelected
})

const toggleSelection = () => {
    isSelected.value = !isSelected.value
    emit('update', { id: props.item.id, isSelected: isSelected.value })
}

</script>

<style scoped>
.label {
    color: #ffffff;
    background: #202020;
    padding: 3px 8px;
    border-radius: 3px;
    font-size: 11px;
    cursor: pointer;
    transition: .3s;
}

.label:hover {
    background: #323232;
}

.label.selected {
    background: #c51b1b;
}
</style>