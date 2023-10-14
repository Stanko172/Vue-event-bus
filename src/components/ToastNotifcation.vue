<template>
    <div>
        {{ toast.message }}
    </div>
</template>

<script setup lang="ts">
import type { Toast } from '@/types';

defineProps<{
    toast: Toast
}>();
</script>
