<script setup>
import SuggestionBox from "@/components/SuggestionBox.vue";

</script>

<template>
  <div class="custom-select">
    <input type="text" class="input" placeholder="Add tags...">
    <SuggestionBox />
  </div>
</template>



<style lang="scss" scoped>

  .custom-select{
    position: relative;
  }

  .input{
    width: 100%;
    background: #ffffff;
    border: 1px solid #F8F8F8;
    padding: 8px;
    font-size: 14px;
    line-height: 19px;
    border-radius: 8px;
    outline: none;
    font-family: 'Roboto', sans-serif;

    &:focus {
      box-shadow: 0px 4px 8px -2px rgba(27, 46, 94, 0.04);
      border: 1px solid #F8F8F8;

    }
    &::placeholder{
      color: #BABFC7;
    }
  }
</style>