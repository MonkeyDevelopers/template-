<template>
    <ToggleLabel v-for="item in items" :item :initialSelected="selecteds.includes(item.id)"
        @update="handlePermissionUpdate" />
</template>

<script setup>
const selecteds = defineModel({ required: false, default: [] });

const props = defineProps({
    items: {
        type: Array,
        required: true,
    },
    initialSelected: {
        type: Boolean,
        default: false
    }
})

const handlePermissionUpdate = ({ id, isSelected }) => {
    if (!isSelected) {
        return selecteds.value = selecteds.value.filter(
            permissionId => permissionId !== id
        )
    }
    selecteds.value.push(id)

    selecteds.value = selecteds.value.sort((a, b) => a - b)
}

</script>

<style scoped></style>