<script setup lang="ts">
const emit = defineEmits<{
  (e: 'confirm'): void
  (e: 'cancel'): void
}>()

function cancel() {
  emit('cancel')
}

function confirm() {
  emit('confirm')
}
</script>

<template>
  <div class="ui-confirm-action">
    <button class="btn danger" @click="confirm">
      delete
    </button>
    <button class="btn" @click="cancel">
      cancelar
    </button>
  </div>
</template>

<style scoped>
.ui-confirm-action {
  justify-content: flex-end;
  display: flex;
  gap: 16px;
}
</style>
