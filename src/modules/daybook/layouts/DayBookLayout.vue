<script>
import {defineComponent} from 'vue'
import { defineAsyncComponent } from 'vue'
export default defineComponent({
  name: "DayBookLayout",
  components: {
    NavBar: defineAsyncComponent( () => import('../components/NavBar.vue') ),
    EntryList: defineAsyncComponent( () => import('../components/EntryList.vue') )
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