import type { Emitter } from 'mitt';

export enum ToastVariant {
    Success = 'success',
    Critical = 'critical',
    Warning = 'warning',
    Info = 'info',
}

export interface Toast {
    title?: string;
    message: string;
    variant: ToastVariant;
    duration?: number;
}

export enum EventType {
    Toast = 'toast',
    // ...
}

export type Events = {
    [EventType.Toast]: Toast;
    // ...
}

export type EventBus = Emitter<Events>;
