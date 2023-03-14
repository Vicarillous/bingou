<template>
  <li class="bg-orange-300 flex justify-center rounded-full p-2">
    <a class="flex items-center">
      <v-icon :icon="icon" />
      <span class="text-lg">{{ title }}</span>
    </a>
  </li>
</template>

<script setup>
defineProps({
  title: String,
  icon: String
})
</script>

<style scoped>
</style>
