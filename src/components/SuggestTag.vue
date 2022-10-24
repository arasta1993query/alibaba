<script setup></script>

<template>
  <div class="tag">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.tag {
  padding: 2px 8px;
  background: #dde1ee;
  border-radius: 100px;
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
  color: #3e5bc4;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: #ca3b57;
    background: #f2e1e1;
  }
}
</style>
