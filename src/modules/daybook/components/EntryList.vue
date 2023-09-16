<script>
import {defineComponent, defineAsyncComponent} from 'vue'
import { mapGetters } from "vuex";

export default defineComponent({
  name: "EntryList",
  components: {
    IndividualEntry: defineAsyncComponent( () => import('./IndividualEntry.vue'))
  },
  computed: {
    ...mapGetters('journal', ['getEntriesByTerm']),
    entriesByTerm() {
      return this.getEntriesByTerm( this.term )
    }
  },
  data() {
    return {
      term: ''
    }
  }
})
</script>

<template>
<div class="entry-list-container">
  <div class="px-2 pt-2">
    <input type="text"
           class="form-control"
           placeholder="Buscar entrada"
           v-model="term"
    >
  </div>

  <div class="entry-scrollarea">
    <!-- Cridar el getEntriesByTerm on està el item in 100 -->
    <IndividualEntry
        v-for="entry in entriesByTerm"
        :key="entry"
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