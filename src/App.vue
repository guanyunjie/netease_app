<template>
  <div id="app">





    <app-play></app-play>
  </div>
</template>

<script>
import Hello from './components/Hello'
import Play from './components/Play/play.vue'
export default {
  name: 'app',
  components: {
    Hello,
    'app-play': Play
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
