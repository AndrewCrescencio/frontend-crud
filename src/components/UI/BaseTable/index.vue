<script setup lang="ts">
import type { User } from '~/types/user/user.type'

export interface BaseTableColumn<T> {
  label: string
  field: keyof T
}

interface BaseTableProps<T> {
  tableData: T[]
  columns: BaseTableColumn<T>[]
}

defineProps<BaseTableProps<any>>()

const emit = defineEmits<{
  (e: 'edit', value: User): void
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
  <div class="base-table-container">
    <table class="base-table">
      <thead>
        <tr>
          <th v-for="column in columns" :key="String(column.field)" scope="col">
            {{ column.label }}
          </th>
          <th scope="col">
            Ações
          </th>
        </tr>
      </thead>
      <tbody>
        <template v-if="tableData">
          <tr v-for="(row, index) in tableData" :key="index">
            <td v-for="column in columns" :key="String(column.field)">
              {{ row[column.field] }}
            </td>
            <td class="actions">
              <button class="btn warning" @click="onEdit(row)">
                Editar
              </button>
              <button class="btn danger" @click="onDelete(row)">
                Excluir
              </button>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.actions {
  height: 100%;
  display: flex;
  gap: 8px;
}

.base-table-container {
  overflow: auto;
  max-height: 65dvh;
}

.base-table {
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #ccc;
}

.base-table th,
.base-table td {
  padding: 10px;
  text-align: left;
  text-wrap: nowrap;
  outline: 1px solid #ccc;
}

.base-table th {
  background-color: #f4f4f4;
}

.base-table th:first-of-type,
.base-table td:first-of-type {
  width: 36px;
}

.base-table th:last-of-type,
.base-table td:last-of-type {
  width: 212px;
}
</style>
