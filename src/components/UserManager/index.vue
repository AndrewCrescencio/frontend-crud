<script setup lang="ts">
import type { UserRegister } from '#build/components'
import type { User } from '~/types/user/user.type'

interface Props {
  users: User[]
}
defineProps<Props>()

const emit = defineEmits<{
  (e: 'create', payload: User): void
  (e: 'edit', payload: User): void
  (e: 'delete', payload: User): void
}>()

function onCreate(payload: User) {
  emit('create', payload)
}

const UserRegisterRef = ref<InstanceType<typeof UserRegister>>()

function handleEdit(payload: User) {
  UserRegisterRef.value?.editUser(payload)
}

function handleDelete(payload: User) {
  UserRegisterRef.value?.deleteUser(payload)
}

function onEdit(payload: User) {
  emit('edit', payload)
}

function onDelete(payload: User) {
  emit('delete', payload)
}
</script>

<template>
  <section class="user-manager">
    <div class="container">
      <div class="user-manager__header">
        <h1 class="user-manager__title">
          Usuários
        </h1>
        <UserRegister ref="UserRegisterRef" @create="onCreate" @edit="onEdit" @delete="onDelete" />
      </div>
      <UserListing :users="users" @delete="handleDelete" @edit="handleEdit" />
    </div>
  </section>
</template>

<style scoped>
.question {
  background-color: var(--color-background);
  color: var(--color-text);
}

.user-manager {
  padding-top: 32px;
  padding-bottom: 32px;
}

.user-manager__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
}

.user-manager__title {
  font-size: 2.25rem;
  line-height: 2.5rem;
}
</style>
