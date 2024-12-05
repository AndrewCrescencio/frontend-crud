<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  confirmText: {
    type: String,
    default: 'Confirm',
  },
  cancelText: {
    type: String,
    default: 'Cancel',
  },
  hideConfirm: {
    type: Boolean,
    default: false,
  },
  showCancel: {
    type: Boolean,
    default: false,
  },
  classes: {
    type: String,
    default: '',
  },
})

const dialog = ref<HTMLDialogElement>()

const isClosing = ref(false)
const timeoutId = ref<NodeJS.Timeout | null>()

function showModal() {
  dialog.value?.showModal()
}

function closeModal() {
  if (dialog.value) {
    if (timeoutId.value) {
      clearTimeout(timeoutId.value)
    }
    isClosing.value = true

    timeoutId.value = setTimeout(() => {
      dialog.value?.close()
      isClosing.value = false
      timeoutId.value = null
    }, 250)
  }
}

defineExpose({
  show: showModal,
  close: closeModal,
})
</script>

<template>
  <Teleport to="body">
    <dialog
      ref="dialog"
      :class="{ closing: isClosing }"
      v-bind="$attrs"
    >
      <div class="dialog__content">
        <slot name="header">
          <div class="dialog__header">
            <p>
              {{ props.title }}
            </p>
            <button autofocus class="btn icon dialog__close" @click="closeModal">
              <span class="sr-only">
                close
              </span>
              <UIIconClose />
            </button>
          </div>
        </slot>
        <slot />
      </div>
    </dialog>
  </Teleport>
</template>

<style scoped>
.dialog__content {
  padding: 0 16px 16px;
  position: relative;
}

.dialog__header {
  height: 40px;
  display: flex;
  align-items: center;
}

.dialog__close {
  position: fixed;
  top: 6px;
  right: 0;
  cursor: pointer;
  z-index: 2;
}

dialog[open] {
  opacity: 1;
  /* transition: all 0.7s ease-in-out; */
}

dialog {
  border-radius: 4px;
  /* background-color: red; */
  border: transparent;
  padding: 0;
  max-width: 86dvw;
  width: 100%;
  opacity: 0;
  transition: all 0.7s allow-discrete;
  /* transition: all 0.7s ease-in-out; */
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  box-shadow:
    rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.1) 0px 8px 10px -6px;

  @media (min-width: 768px) {
    max-width: 520px;
    /* top: 30%; */
  }
}

@starting-style {
  dialog[open] {
    opacity: 0;
  }
}

dialog.closing {
  opacity: 0;
}

dialog::backdrop {
  background-color: rgba(226, 232, 240, 0.75);
  /* transition: all 0.7s allow-discrete; */
}

dialog[open]::backdrop {
  background-color: rgba(226, 232, 240, 0.75);
  font-feature-settings: normal;
  font-variation-settings: normal;
  /* position: fixed; */
  right: 0px;
  tab-size: 4;
  top: 0px;
  transition-duration: 0.7s;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 1;
}

@starting-style {
  dialog[open]::backdrop {
    background-color: rgb(0 0 0 / 0%);
  }
}
</style>
