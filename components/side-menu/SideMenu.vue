<script setup lang="ts">
import SideMenuLink from "~/components/side-menu/SideMenuLink.vue";
import PrimaryButton from "~/components/PrimaryButton.vue";
</script>

<template>
  <div class="flex h-screen w-52 flex-col justify-between bg-white pt-8">
    <div class="flex flex-col">
      <img
        class="self-center"
        src="assets/images/LogoAndCompany.png"
        alt="Logo and company"
      />
      <div class="mt-12 flex flex-col space-y-6">
        <SideMenuLink icon-path="icons/Category.png" pageName="Dashboard" />
        <SideMenuLink icon-path="icons/Chart.png" pageName="Analytics" />
        <SideMenuLink icon-path="icons/Ticket.png" pageName="Invoice" />
        <SideMenuLink icon-path="icons/Calendar.png" pageName="Schedule" />
        <SideMenuLink icon-path="icons/Calendar.png" pageName="Calendar" />
        <SideMenuLink icon-path="icons/Activity.png" pageName="Messages" />
        <SideMenuLink
          icon-path="icons/Notification.png"
          pageName="Notifications"
          notification-count="40"
        />
        <SideMenuLink icon-path="icons/Setting.png" pageName="Settings" />
      </div>
    </div>
    <div class="flex w-full flex-col space-y-5 self-center px-4 pb-6">
      <PrimaryButton text="Upgrade now" />
      <div class="flex w-full items-center justify-between">
        <img src="assets/images/ProfilePhoto.png" alt="Profile photo" />
        <div class="flex w-full flex-col pl-2">
          <span class="text-sm font-semibold">Easin Arafat</span>
          <span class="text-xs opacity-50">Free Account</span>
        </div>
        <button class="h-6 w-6">
          <img src="public/icons/Logout.png" alt="Logout" />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
