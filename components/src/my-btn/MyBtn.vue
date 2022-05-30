<script setup lang="ts">
import { onMounted, ref } from 'vue';

export type ButtonType = 'info' | 'primary' | 'danger' | 'warning';

export interface Props {
  label: string;
  type: ButtonType;
}

withDefaults(defineProps<Props>(), { type: 'primary' });
const emit = defineEmits<{ (e: 'onClick', data: any): void }>();
</script>

<template>
  <button class="btn" :class="type" type="button" @click="emit('onClick', $event)">{{ label }}</button>
</template>

<style lang="scss">
$info: #4098fc;
$danger: #de576d;
$primary: #41b883;
$warning: #fcb040;

.btn {
  border-radius: 2px;
  height: 2.5em;
}

.info {
  cursor: pointer;
  border: 1px solid darken($info, 10%);
  background-color: $info;
  color: #fff;

  &:hover {
    background-color: darken($info, 4%);
  }
}
.danger {
  cursor: pointer;
  border: 1px solid darken($danger, 10%);
  background-color: $danger;
  color: #fff;

  &:hover {
    background-color: darken($danger, 4%);
  }
}
.primary {
  cursor: pointer;
  border: 1px solid darken($primary, 10%);
  background-color: $primary;
  color: #fff;

  &:hover {
    background-color: darken($primary, 4%);
  }
}
.warning {
  cursor: pointer;
  border: 1px solid darken($warning, 10%);
  background-color: $warning;
  color: #fff;

  &:hover {
    background-color: darken($warning, 4%);
  }
}
</style>
