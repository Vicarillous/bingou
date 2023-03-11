<template>
  <li class="bg-orange-300 flex justify-center rounded-md p-2">
    <a>
      <v-icon :icon="icon" />
      <span class="text-xl font-medium">{{ title }}</span>
    </a>
  </li>
</template>

<script setup>
defineProps({
  title: String,
  icon: String
})
</script>

<style scoped></style>
