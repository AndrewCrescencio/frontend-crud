<script setup lang="ts">
import type { UIDialog, UserForm } from '#build/components'
import type { User } from '~/types/user/user.type'

const emit = defineEmits<{
  (e: 'create', payload: User): void
  (e: 'edit', payload: User): void
  (e: 'delete', payload: User): void
}>()

const modal = ref<InstanceType<typeof UIDialog>>()

const showModal = () => modal.value?.show()
const closeModal = () => modal.value?.close()

const isDelete = ref(false)
const isEdit = ref(false)
const userToDelete = ref<User | null>(null)

const UserFormRef = ref<InstanceType<typeof UserForm>>()

function onAdd() {
  UserFormRef.value?.resetForm()
  isDelete.value = false
  isEdit.value = false
  userToDelete.value = null
  showModal()
}

function handleEdit() {
  isEdit.value = true
  showModal()
}

function onDeleteConfirm() {
  if (userToDelete.value) {
    emit('delete', { ...userToDelete.value })
    closeModal()
  }
}

function onCreate(payload: User) {
  emit('create', payload)
  closeModal()
}

function onEdit(payload: User) {
  emit('edit', payload)
  closeModal()
}

async function onCancel() {
  nextTick(() => {
    userToDelete.value = null
    isDelete.value = false
  })
}

function editUser(payload: User) {
  isDelete.value = false
  userToDelete.value = null

  UserFormRef.value?.editUser(payload)

  nextTick(() => {
    showModal()
  })
}

function deleteUser(payload: User) {
  isDelete.value = true
  userToDelete.value = { ...payload }
  showModal()
}

const dialogTitle = computed(() => {
  if (isDelete.value)
    return 'Excluir usuário'
  return isEdit.value ? 'Editar usuário' : 'Cadastrar usuário'
})

defineExpose({ editUser, deleteUser })
</script>

<template>
  <div class="user-manager__header">
    <button class="btn success" @click="onAdd">
      Adicionar
    </button>
  </div>
  <UIDialog ref="modal" :title="dialogTitle" @close="onCancel">
    <template v-if="isDelete">
      <p class="question">
        Deseja excluir o usuário <strong>{{ userToDelete?.username }}</strong> ?
      </p>
      <UIConfirmAction @cancel="closeModal" @confirm="onDeleteConfirm" />
    </template>
    <template v-else>
      <UserForm ref="UserFormRef" @create="onCreate" @edit="onEdit" @show-modal="handleEdit" />
    </template>
  </UIDialog>
</template>

<style scoped>
.question {
  margin-bottom: 16px;
}
</style>
