<template>
  <div class="app-layout-default">
    <AppHeader />
    <slot />
  </div>
</template>

<style scoped>
.app-layout-default {
  padding-top: 64px;
  scroll-padding-top: 64px;
}
</style>
