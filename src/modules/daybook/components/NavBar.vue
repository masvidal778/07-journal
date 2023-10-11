<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "NavBar"
})
</script>

<template>
<nav class="navbar bg-primary">
  <a class="navbar-brand text-white" href="">
    <img src="@/assets/logo.png"
         alt="Vue Logo"
         height="24"
         class="d-inline-block align-text-top mx-2"
    >
    Daybook
  </a>

  <div class="d-flex">
    <button class="btn btn-outline-info mx-2">
      <i class="fa fa-sign-out-alt"></i>
    </button>
  </div>
</nav>
</template>

<style scoped>

</style>