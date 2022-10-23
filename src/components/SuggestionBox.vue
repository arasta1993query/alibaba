<script setup>
  const props = defineProps({
    show: Boolean,
    options: Array,
    selected: Number
  })
  const emit = defineEmits(['hover','select'])
  const hoverOption = (index) => {
    emit('hover' , index - props.selected)
  }

  const selectResult = () => {
    emit('select' )
  }
</script>

<template>
  <div class="box" :class="{active: show && options.length > 0}">
    <div
        class="option"
        :class="{active: selected === index}"
        v-for="(option, index) in options"
        @mouseover="hoverOption(index)"
        @click="selectResult"
    >
      {{option.item.label}}
    </div>
  </div>
</template>



<style lang="scss" scoped>
  .box{
    width: calc(100% - 26px);
    max-height: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    transform: translateY(8px);
    background: #ffffff;
    padding: 8px;
    box-shadow: 0px 8px 24px -4px rgba(27, 46, 94, 0.12);
    border-radius: 8px;
    overflow: auto;
    z-index: 2;
    transition: all 0.5s ease-in-out;

    &.active{
      max-height: 144px;
      opacity: 1;
      top: 100%;
    }
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