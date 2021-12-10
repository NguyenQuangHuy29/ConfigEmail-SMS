<template>
  <div id="app">
    <page-header/>
    <div>
      <router-view/>
    </div>
    
  </div>
</template>

<script>
import PageHeader from './components/layout/Header.vue'

export default {
  name: 'App',
  components: {
    PageHeader
  },
  data() {
    
  },
  methods: {
   
  },
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-weight: bold;
  font-size: 16px;
}
</style>
