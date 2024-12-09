<template>
  <header class="app-header">
    <div class="container">
      <p class="logo">
        App Logo
      </p>
    </div>
  </header>
</template>

<style scoped>
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 12;
  background-color: var(--color-gray);
}

.logo {
  font-size: 20px;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
}
</style>
