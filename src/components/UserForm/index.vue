<script setup lang="ts">
import type { User } from '~/types/user/user.type'
import { object, string } from 'yup'

const emit = defineEmits<{
  (e: 'create', payload: User): void
  (e: 'edit', payload: User): void
  (e: 'showModal'): void
}>()

const isEdit = ref(false)
const userIdToEdit = ref<number | string | null>()

const schema = object<User>({
  name: string().max(70, 'Limite de 70 caracteres').required('Campo obrigatório'),
  cpf: string().required('Campo obrigatório').test('cpf', 'cpf inválido', (cpf) => {
    return isCpfValid(cpf)
  }),
  username: string().required('Campo obrigatório').max(30),
  email: string().required('Campo obrigatório').email('email inválido'),
  group: string().required('Campo obrigatório').max(30),
})

const { defineField, errors, handleSubmit, handleReset, setFieldValue } = useForm<User>({
  validationSchema: schema,
})

const [cpf] = defineField('cpf')
const [email] = defineField('email')
const [group] = defineField('group')
const [name] = defineField('name')
const [username] = defineField('username')

const onSubmit = handleSubmit(async (values) => {
  const payload = { ...values }
  if (userIdToEdit.value) {
    payload.id = userIdToEdit.value
    emit('edit', payload)
  }
  else {
    emit('create', payload)
  }
})

const isDisabled = ref(false)
const isLoading = ref(false)

const isButtonsDisabled = computed(() => isDisabled.value && isLoading.value)

function resetForm() {
  userIdToEdit.value = null
  handleReset()
}

// const isOpen = ref(false)
function editUser(user: User) {
  // isOpen.value = true
  isEdit.value = true
  userIdToEdit.value = user.id
  setFieldValue('cpf', user.cpf)
  setFieldValue('email', user.email)
  setFieldValue('group', user.group)
  setFieldValue('name', user.name)
  setFieldValue('username', user.username)
  emit('showModal')
}

defineExpose({ editUser, resetForm })
</script>

<template>
  <form class="user-form" @submit.prevent.stop="onSubmit">
    <!-- <p>Editando com ID: {{ userIdToEdit }}</p> -->
    <UIInputText v-model="name" type="text" label="Nome" :error="errors.name" />
    <UIInputMask v-model="cpf" type="text" label="CPF" :error="errors.cpf" />
    <UIInputText v-model="username" type="text" label="Username" :error="errors.username" />
    <UIInputText v-model="email" type="email" label="Email" :error="errors.email" />
    <UIInputText v-model="group" type="text" label="Grupo" :error="errors.group" />
    <div class="buttons">
      <button type="submit" :disabled="isButtonsDisabled" class="btn success">
        Enviar
      </button>
      <!-- <button @click="resetForm">
        limpar
      </button> -->
    </div>
  </form>
</template>

<style scoped>
.user-form {
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 24px;
}

button[type='submit'] {
  margin-top: 16px;
  width: 100%;
}
</style>
