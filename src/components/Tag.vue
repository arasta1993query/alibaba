<script setup>

</script>

<template>
  <div class="tag">
    <slot></slot>
  </div>
</template>



<style lang="scss" scoped>
  .tag{
    padding: 2px 8px;
    background: #DDE1EE;
    border-radius: 100px;
    font-size: 12px;
    line-height: 16px;
    font-weight: 400;
    color:#3E5BC4 ;
    cursor: pointer;
    transition: all .3s ease;

    &:hover{
      color: #CA3B57;
      background: #F2E1E1;
    }
  }
</style>