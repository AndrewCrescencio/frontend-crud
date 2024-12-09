<script setup lang="ts">
import type { BaseTableColumn } from '../UI/BaseTable/index.vue'
import type { User } from '~/types/user/user.type'

interface Props {
  data: User[]
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

const columns: BaseTableColumn<User>[] = [
  { label: 'ID', field: 'id' },
  { label: 'Nome', field: 'name' },
  { label: 'CPF', field: 'cpf' },
  { label: 'Username', field: 'username' },
  { label: 'Email', field: 'email' },
  { label: 'Grupo', field: 'group' },
]
</script>

<template>
  <UIBaseTable :table-data="data" :columns="columns" @edit="onEdit" @delete="onDelete" />
</template>
