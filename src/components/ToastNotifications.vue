<template>
    <ToastNotifcation v-if="currentToast" :toast="currentToast"/>
</template>

<script setup lang="ts">
import { type EventBus, EventType, type Toast } from '@/types';
import ToastNotifcation from './ToastNotifcation.vue';
import { inject, onMounted, ref } from 'vue';

const DEFAULT_DURATION = 3000;

const eventBus = inject<EventBus>('eventBus');
const currentToast = ref<Toast | null>(null);

function dismissToast(): void {
    currentToast.value = null;
}

function displayToast(toast: Toast): void {
    currentToast.value = toast;
    setTimeout(dismissToast, toast.duration ?? DEFAULT_DURATION);
}

function registerToastListener(): void {
    eventBus?.on(EventType.Toast, (toast) => {
        displayToast(toast);
    });
}

onMounted(() => registerToastListener());
</script>
