<template>
  <div class="form container">
    <slot></slot>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #0e0e0e;
  border: 2px solid #171717;
  border-radius: 8px;
  padding: 20px;
  row-gap: 20px;
}

.form {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>
