<script lang="ts" setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Header from "./components/Header.vue";
</script>

<template>
  <div class="container">
    <Header />
    <router-view></router-view>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #252d35;
}
.container {
  max-width: 960px;
  margin: 0 auto;
  padding: 30px 20px;
}
</style>
