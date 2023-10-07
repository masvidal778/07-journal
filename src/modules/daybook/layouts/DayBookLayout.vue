<script>
import { defineComponent, defineAsyncComponent } from 'vue'
import { mapActions , mapState} from 'vuex'

export default defineComponent({
  name: "DayBookLayout",
  components: {
    NavBar: defineAsyncComponent( () => import('../components/NavBar.vue') ),
    EntryList: defineAsyncComponent( () => import('../components/EntryList.vue') )
  },
  methods: {
    ...mapActions('journal', ['loadEntries']),
  },
  computed: {
    ...mapState('journal', ['isLoading'])
  },
  created() {
    this.loadEntries()
  }
})
</script>

<template>
<NavBar />

  <!-- div v-if="isLoading" -->
  <div v-if="isLoading"
      class="row justify-content-md-center">
    <div class="col-3 bg-info text-center mt-5">
      Esperi, sisplau...
      <h3 class="mt-2">
        <i class="fa fa-spin fa-sync"></i>
      </h3>
    </div>
  </div>

  <!-- div v-else -->
  <div v-else
      class="d-flex">
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