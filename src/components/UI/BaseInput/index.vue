<script setup lang="ts">
interface Props {
  type: 'text' | 'number' | 'password' | 'email'
  placeholder?: string
}

withDefaults(defineProps<Props>(), {
  type: 'text',
  placeholder: '',
})

const modelValue = defineModel<string | number>()
</script>

<template>
  <input
    v-model="modelValue"
    :type="type"
    :placeholder="placeholder"
    class="ui-base-input"
    v-bind="$attrs"
  >
</template>

<style scoped>
.ui-base-input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
}

.ui-base-input:focus {
  outline: none;
  border-color: #007bff;
}
</style>
