<script setup>
import NavBar from './components/NavBar.vue'
</script>

<template>
  <div>
    <header>
      <NavBar />
    </header>
    <router-view></router-view>
    <footer>
    </footer>
  </div>
</template>

<style scoped>
</style>
