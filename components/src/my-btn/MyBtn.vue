<script setup lang="ts">
export type ButtonType = 'info' | 'primary' | 'danger' | 'warning';

export interface Props {
  label: string;
  type: ButtonType;
}

withDefaults(defineProps<Props>(), { type: 'primary' });
const emit = defineEmits<{ (e: 'onClick', data: any): void }>();
</script>

<template>
  <button class="btn" :class="`btn-${type}`" type="button" @click="emit('onClick', $event)">{{ label }}</button>
</template>

<style lang="scss">
$btn-radius: 2px;
$btn-height: 2.5em;
$type-colors: (
  info: #52a1fc,
  danger: #e0687c,
  primary: #41b883,
  warning: #fdb74e,
);

.btn {
  border-radius: $btn-radius;
  height: $btn-height;
}

@each $type, $color in $type-colors {
  .btn-#{$type} {
    cursor: pointer;
    border: 1px solid darken($color, 10%);
    background-color: $color;
    color: #fff;

    &:disabled {
      cursor: default;
      border-color: lighten($color, 10%);
      background-color: lighten($color, 20%);
    }
    &:hover:not(:disabled) {
      background-color: darken($color, 4%);
    }
  }
}
</style>
