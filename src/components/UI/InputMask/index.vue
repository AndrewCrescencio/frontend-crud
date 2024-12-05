<script setup lang="ts">
interface Props {
  label: string
  error?: string
  // mask?: string
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  label: '',
})

const modelValue = defineModel<string>({})

const cleanModelValue = computed({
  get: () => modelValue.value?.replace(/[.-]/g, ''),
  set: (value: string) => {
    modelValue.value = value.replace(/[.-]/g, '')
  },
})
</script>

<template>
  <div class="ui-input-text">
    <label>
      {{ props.label }}
      <!-- <UIBaseInput v-model="modelValue" v-mask="'###.###.###-##'" :masked="false" type="text" /> -->
      <UIBaseInput v-model="cleanModelValue" v-mask="'###.###.###-##'" :masked="false" type="text" />
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
