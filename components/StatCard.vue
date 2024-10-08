<script setup lang="ts">
defineProps<{
  iconPath: string;
  stat: string;
  description: string;
}>();
</script>

<template>
  <div class="flex h-32 w-full items-center rounded-xl bg-white">
    <img class="ml-12 h-16 w-16" :src="iconPath" alt="Work" />
    <div class="ml-6 flex flex-col">
      <span class="text-2xl font-extrabold text-default opacity-70"
        >{{ stat }}+</span
      >
      <span class="text-sm font-normal opacity-70">{{ description }}</span>
    </div>
  </div>
</template>

<style scoped></style>
