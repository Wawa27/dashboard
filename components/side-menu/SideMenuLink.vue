<script setup lang="ts">
const props = defineProps<{
  iconPath: string;
  pageName: string;
  notificationCount?: number;
}>();

const { currentRoute } = useRouter();
const routeName = currentRoute.value.name;

const isActive = routeName === props.pageName;
</script>

<template>
  <NuxtLink
    :to="pageName.toLowerCase()"
    class="relative flex items-center px-6"
  >
    <span
      v-if="isActive"
      class="from-cta absolute left-0 h-10 w-12 bg-gradient-to-r to-transparent opacity-15"
    >
    </span>
    <img class="h-6 w-6" :src="iconPath" alt="charts" />
    <span
      class="text-default ml-4 text-sm font-semibold"
      :class="isActive ? 'text-cta' : 'text-black opacity-50'"
    >
      {{ pageName }}
    </span>
    <span
      v-if="notificationCount > 0"
      class="ml-5 rounded-full bg-red-200 px-1.5 py-0.5 text-xs font-semibold text-red-600"
    >
      {{ notificationCount }}
    </span>
  </NuxtLink>
</template>

<style scoped></style>
