<script setup>

</script>

<template>
  <div class="box">
    <div class="option active">Apple</div>
    <div class="option">Apple</div>
    <div class="option">Apple</div>
    <div class="option">Apple</div>
  </div>
</template>



<style lang="scss" scoped>
  .box{
    width: calc(100% - 26px);
    height: 144px;
    position: absolute;
    top: 100%;
    transform: translateY(8px);
    background: #ffffff;
    padding: 8px;
    box-shadow: 0px 8px 24px -4px rgba(27, 46, 94, 0.12);
    border-radius: 8px;
  }

  .option{
    text-align: left;
    padding: 8px;
    font-size: 12px;
    line-height: 16px;
    border-radius: 4px;

    &.active{
      background: #F8F8F8;
     }
  }
</style>