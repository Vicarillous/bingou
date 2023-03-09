<template>
    <li>
        <a>{{ title }}</a>
        <v-icon icon="mdi-home" />
    </li>
</template>

<script setup>
defineProps({
    title: String
})
</script>

<style scoped></style>
