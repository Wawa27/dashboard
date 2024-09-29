<script setup lang="ts">
defineProps<{
  text: string;
}>();
</script>

<template>
  <button
    class="bg-cta w-full rounded-xl px-8 py-2 text-sm font-semibold text-white"
  >
    {{ text }}
  </button>
</template>

<style scoped></style>
