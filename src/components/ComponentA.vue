<template>
    <div>
        <button @click="triggerToast">Super cool button</button>
    </div>
</template>

<script setup lang="ts">
import { type EventBus, EventType, ToastVariant } from '@/types';
import { inject } from 'vue';

const eventBus = inject<EventBus>('eventBus');

function triggerToast(): void {
    eventBus?.emit(EventType.Toast, {
        message: 'Super coool toast notification!',
        variant: ToastVariant.Success
    });
}
</script>
