<script setup lang="ts">
const usersStore = useUsersStore()
const { users } = storeToRefs(usersStore)
const { postUser, updateUser, deleteUser } = useUsersStore()
await useAsyncData('users', () => usersStore.getUsers().then(() => true).catch((e) => {
  // eslint-disable-next-line no-console
  console.log(e, 'Não foi possível carregar os Usuários')
}))
</script>

<template>
  <UserManager :users="users" @create="postUser" @edit="updateUser" @delete="deleteUser" />
</template>
