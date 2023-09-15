<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "IndividualEntry"
})
</script>

<template>

  <div
      class="entry-container mb-3 pointer p-2"
  >
    <!-- titol -->
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold">15</span>
      <span class="mx-1 fs-5">Setembre</span>
      <span class="mx-2 fw-light">2023, divendres</span>
    </div>

    <div class="entry-description">
      Morbi ipsum ex, facilisis a ante dapibus, vehicula aliquet nunc. Vivamus imperdiet lacus augue, eget venenatis tortor elementum non. Morbi in turpis libero. Suspendisse purus sem, euismod a nisl vel, pretium sodales mauris. Aliquam sagittis ligula ac leo consectetur, at placerat leo egestas. Maecenas consequat dignissim neque et luctus. Quisque sit amet varius mi. Ut vitae lacinia purus.
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