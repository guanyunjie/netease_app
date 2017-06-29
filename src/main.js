// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueSource from 'vue-resource';
import App from './App';

import my from './components/my/my.vue';
import friend from './components/friend/friend.vue';
import music from './components/music/music.vue';
import playlist from './components/playlist/playlist.vue';
import artist from './components/artist/artist.vue';
import mv from './components/mv/mv.vue';
import radio from './components/radio/radio.vue';

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(VueSource);

const router = new VueRouter({
	linkActiveClass: 'active',
	routes: [
		{
			path: '/my',
			component: my
		}, {
			path: '/friend/:id',
			component: friend
		}, {
			path: '/my/m/music/',
			component: music,
			children: [
				{
					path: 'playlist/:id',
					component: playlist
				},
				{
					path: 'artist',
					component: artist
				},
				{
					path: 'mv',
					component: mv
				},
				{
					path: 'radio',
					component: radio
				}
			]
		}
	]
});

new Vue({
	router: router,
	render: h => h(App)
}).$mount('#app');

