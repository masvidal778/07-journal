<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "IndividualEntry",
  props: {
    entry: {
      type: Object,
      required: true
    }
  },
  computed: {
    shortText() {
      return( this.entry.text.length  > 130)
          ? this.entry.text.substring(0, 130) + '...'
          : this.entry.text
    }
  }
})
</script>

<template>

  <div
      class="entry-container mb-3 pointer p-2"
      @click="$router.push( {name: 'entry', params: { id: 10 }} )"
  >
    <!-- titol -->
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold">15</span>
      <span class="mx-1 fs-5">Setembre</span>
      <span class="mx-2 fw-light">2023, divendres</span>
    </div>

    <div class="entry-description">
      {{ shortText }}
    </div>
  </div>

</template>

<style lang="scss" scoped>
.entry-container{
  border-bottom: 1px solid #2c3e50;
  transition: 0.2s all ease-in;

  &:hover{
    background-color: lighten($color: grey, $amount: 45);
    transition: 0.2s all ease-in;
  }

  .entry-description{
    font-size: 12px;
  }

}




</style>