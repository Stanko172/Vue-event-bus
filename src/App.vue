<script setup lang="ts">
import { RouterView } from 'vue-router'
import ToastNotificatons from './components/ToastNotifications.vue';
</script>

<template>
  <header>

    <ToastNotificatons />

  </header>

  <RouterView />
</template>
