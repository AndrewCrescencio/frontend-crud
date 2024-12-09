<script setup lang="ts">
import type { User } from '~/types/user/user.type'

interface Props {
  users: User[]
}
defineProps<Props>()

const emit = defineEmits<{
  (e: 'edit', payload: User): void
  (e: 'delete', payload: User): void
}>()

function onEdit(payload: User) {
  emit('edit', payload)
}

function onDelete(payload: User) {
  emit('delete', payload)
}
</script>

<template>
  <div class="user-listing">
    <UsersTable v-if="users.length" :data="users" @edit="onEdit" @delete="onDelete" />
    <p v-else class="text-center">
      Sem Usuários
    </p>
  </div>
</template>
