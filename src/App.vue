<template>
	<div id="app">
		<app-head></app-head>
		<app-play></app-play>
	</div>
</template>

<script>
import Play from './components/Play/play.vue';
import Head from './components/Head/head.vue';

export default {
	name: 'app',
	components: {
	  	'app-head': Head,
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
}
</style>
