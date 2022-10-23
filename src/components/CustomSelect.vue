<script setup>
import SuggestionBox from "@/components/SuggestionBox.vue";
import Tag from "@/components/Tag.vue";
import Fuse from 'fuse.js'
import {ref, watch} from "vue";
const suggestionStatus = ref(false)
const search = ref('')
const searchResult = ref([])
const selected = ref(0)
const myList = ['aaaa', 'bbbb', 'cccc', 'abc', 'xyz']
const tagList = ref([])

const options = {
  includeScore: true,
  findAllMatches: true
}
const fuse = new Fuse(myList, options)

watch(search , (val) => {
  searchResult.value = fuse.search(val)
})

const changeOption = (step) => {
  if(step + selected.value < 0 || step  + selected.value > searchResult.value.length - 1){
    return
  }
  selected.value += step
}

const selectResult = (fromInput) => {
  if(!fromInput && searchResult.value[selected.value]){
    tagList.value.push(searchResult.value[selected.value].item)
    return
  }
  tagList.value.push(search.value.replace(',' , ''))
  search.value = ''
}

const activeSuggestion = (val) => {
  suggestionStatus.value = val
}

const focusInHandler = ($event) => {
  activeSuggestion(true)
}

const focusOutHandler = ($event) => {
  activeSuggestion(false)
}

</script>

<template>
  <div class="custom-select">
    <input
        type="text"
        class="input"
        v-model="search"
        @focus="focusInHandler"
        @blur="focusOutHandler"
        @keydown.esc="activeSuggestion(false)"
        @keydown.down="changeOption(1)"
        @keydown.up="changeOption(-1)"
        @keydown.enter="selectResult(false)"
        @keyup.,="selectResult(true)"
        placeholder="Add tags..."
    >
    <SuggestionBox
        :show="suggestionStatus"
        :options="searchResult"
        :selected="selected"
        @hover="changeOption"
        @select="selectResult(false)"
    />
  </div>
  <div class="tags">
    <Tag v-for="tag in tagList">{{ tag }}</Tag>
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
    z-index: 3;

    &:focus {
      box-shadow: 0px 4px 8px -2px rgba(27, 46, 94, 0.04);
      border: 1px solid #F8F8F8;
    }
    &::placeholder{
      color: #BABFC7;
    }
  }

  .tags{
    margin-top: 8px;
    display: flex;
    gap: 8px;
    align-items: center;
  }
</style>