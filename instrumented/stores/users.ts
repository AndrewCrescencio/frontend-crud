import type { User } from '~/types/user/user.type'
import { defineStore } from 'pinia'

export const useUsersStore = defineStore('users', () => {
  const runtimeConfigs = useRuntimeConfig()

  const users = ref<User[]>([])

  const loading = ref(false)

  async function getUsers() {
    try {
      loading.value = true
      const url = `${runtimeConfigs.public.apiBaseUrl}/users`
      const response = await $fetch<User[]>(url)

      if (response) {
        users.value = response
      }
    }
    catch (err) {
      console.error(err)
      throw createError(err as Error)
    }
    finally {
      loading.value = false
    }
  }

  async function postUser(user: User) {
    try {
      loading.value = true
      const url = `${runtimeConfigs.public.apiBaseUrl}/users`
      const response = await $fetch<User>(url, { method: 'POST', body: { ...user } })

      if (response) {
        users.value.push(response)
      }
    }
    catch (err) {
      console.error(err)
      throw err
    }
    finally {
      loading.value = false
    }
  }

  async function updateUser(user: User) {
    try {
      loading.value = true
      const url = `${runtimeConfigs.public.apiBaseUrl}/users/${user.id}`
      const response = await $fetch<User>(url, { method: 'PUT', body: { ...user } })

      if (response) {
        const userToEdit = users.value.findIndex(item => item.id === user.id)
        if (userToEdit) {
          users.value[userToEdit] = { ...user }
        }
      }
    }
    catch (err) {
      console.error(err)
      throw err
    }
    finally {
      loading.value = false
    }
  }

  async function deleteUser(user: User) {
    try {
      loading.value = true
      const url = `${runtimeConfigs.public.apiBaseUrl}/users/${user.id}`
      const response = await $fetch<User>(url, { method: 'DELETE' })

      if (response) {
        users.value = users.value.filter(item => item.id !== user.id)
      }
    }
    catch (err) {
      console.error(err)
      throw err
    }
    finally {
      loading.value = false
    }
  }

  return {
    users,
    getUsers,
    postUser,
    updateUser,
    deleteUser,
  }
})
