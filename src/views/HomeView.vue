<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
  <h1>Hola, món!</h1>
  <button @click="goToDaybook" class="btn btn-primary">Primary</button>
  <button @click="goToDaybook" class="btn btn-secondary">Secondary</button>
  <button @click="goToDaybook" class="btn btn-success">Success</button>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  methods: {
    goToDaybook() {
      this.$router.push({ name: 'no-entry' })
    }
  }
}
</script>

<script setup>
</script>