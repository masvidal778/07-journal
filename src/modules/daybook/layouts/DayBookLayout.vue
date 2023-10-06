<script>
import { defineComponent, defineAsyncComponent } from 'vue'
import { mapActions } from 'vuex'

export default defineComponent({
  name: "DayBookLayout",
  components: {
    NavBar: defineAsyncComponent( () => import('../components/NavBar.vue') ),
    EntryList: defineAsyncComponent( () => import('../components/EntryList.vue') )
  },
  methods: {
    ...mapActions('journal', ['loadEntries'])
  },
  created() {
    this.loadEntries()
  }
})
</script>

<template>
<NavBar />

  <div class="d-flex">
    <div class="col-4">
      <EntryList />
    </div>
    <div class="col">
      <router-view />
    </div>
  </div>
</template>

<style scoped>

</style>