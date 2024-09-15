<template>
  <a href="/" class="sidebar_header">
    <icon class="sidebar_header_icon" name="ph:package" />
    <span>Admin</span>
  </a>
</template>

<style>
/* sidebar_header */

.sidebar_header {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 8px;
  border-radius: 6px;
  column-gap: 10px;
  position: relative;
  /* background: red; */
  transition: 0.3s;
  margin-bottom: 20px;
  cursor: pointer;
}

.sidebar_header span {
  position: absolute;
  text-align: start;
  left: 55px;
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
  transition: 0.3s;
}

.sidebar_header_icon {
  font-size: 24px !important;
  color: #c51b1b;
}
</style>
