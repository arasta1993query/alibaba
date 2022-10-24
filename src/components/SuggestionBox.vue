<script setup>
import { ref, watch } from "vue";

const BOX_LENGTH = 4;

const props = defineProps({
  show: Boolean,
  options: Array,
  selected: Number,
});
const emit = defineEmits(["hover", "select"]);

const list = ref([]);

const hoverOption = (index) => {
  emit("hover", index - props.selected);
};

const selectResult = () => {
  emit("select");
};

watch(
  () => props.selected,
  (newVal) => {
    const element = list.value.find((l) => {
      return l.classList[1] === "active";
    });

    element.scrollIntoView({
      behavior: "smooth",
      block: newVal >= BOX_LENGTH ? "start" : "end",
      inline: "nearest",
    });
  }
);
</script>

<template>
  <div class="box" :class="{ active: show && options.length > 0 }">
    <div
      class="option"
      :class="{ active: selected === index }"
      v-for="(option, index) in options"
      @mouseover="hoverOption(index)"
      @click="selectResult"
      ref="list"
      :key="option.item.id"
    >
      {{ option.item.label }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.box {
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

  &.active {
    max-height: 144px;
    opacity: 1;
    top: 100%;
  }
}

.option {
  text-align: left;
  padding: 8px;
  font-size: 12px;
  line-height: 16px;
  border-radius: 4px;

  &.active {
    background: #f8f8f8;
  }
}
</style>
