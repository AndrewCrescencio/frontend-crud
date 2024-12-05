<script setup lang="ts">
interface Props {
  type: 'text' | 'number' | 'password' | 'email'
  label: string
  error?: string
  mask?: string
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  label: '',
})

const modelValue = defineModel<string | number>()
</script>

<template>
  <div class="ui-input-text">
    <label>
      {{ props.label }}
      <UIBaseInput v-bind="$attrs" v-model="modelValue" :type="props.type" />
    </label>
    <p v-if="error" class="error">
      {{ error }}
    </p>
  </div>
</template>

<style scoped>
.ui-input-text {
  position: relative;
}

.ui-input-text label {
  display: flex;
  flex-direction: column;
}

.error {
  color: var(--color-danger);
  position: absolute;
  bottom: -16px;
  font-size: 12px;
}
</style>
