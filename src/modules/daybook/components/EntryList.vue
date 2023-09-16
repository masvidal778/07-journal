<script>
import {defineComponent, defineAsyncComponent} from 'vue'

export default defineComponent({
  name: "EntryList",
  components: {
    IndividualEntry: defineAsyncComponent( () => import('./IndividualEntry.vue'))
  }
})
</script>

<template>
<div class="entry-list-container">
  <div class="px-2 pt-2">
    <input type="text"
           class="form-control"
           placeholder="Buscar entrada"
    >
  </div>

  <div class="entry-scrollarea">
    <IndividualEntry
        v-for="item in 100"
        :key="item"
    />

  </div>
</div>
</template>

<style lang="scss" scoped>
.entry-list-container{
  border-right: 1px solid #2c3e50;
  height: calc(100vh - 56px);
}

.entry-scrollarea{
  height: calc(100vh - 102px);
  overflow: scroll;
}
</style>