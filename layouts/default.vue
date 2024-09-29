<script setup lang="ts">
import SideMenu from "~/components/side-menu/SideMenu.vue";

const { currentRoute } = useRouter();
const routeName = currentRoute.value.name;
</script>

<template>
  <div class="min-h-screen w-full bg-background">
    <div class="flex min-h-screen w-full">
      <SideMenu />
      <div
        class="mt-8 flex w-full flex-col px-8 text-xl font-bold text-default"
      >
        <h1 class="mb-8">{{ routeName }}</h1>
        <slot />
      </div>
    </div>
  </div>
</template>
