<script>
import {defineAsyncComponent, defineComponent} from 'vue'

export default defineComponent({
  name: "NoEntrySelected",
  components: {
    FabNew: defineAsyncComponent( () => import('../components/FabNew.vue') )
  }
})
</script>

<template>
  <div class="d-flex justify-content-center">
    <h1 class="align-self-center">No hi ha res seleccionat</h1>
  </div>
  <FabNew />
</template>

<style lang="scss" scoped>
div {
  height: 100%;
}
</style>