// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueSource from 'vue-resource';
import App from './App';

import my from './components/my/my.vue';
import friend from './components/friend/friend.vue';
import music from './components/music/music.vue';

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(VueSource);

const router = new VueRouter({
	linkActiveClass: 'active',
	routes: [
		{
			path: '/my',
			component: my
		}, {
			path: '/friend',
			component: friend
		}, {
			path: '/my/m/music',
			component: music
		}
	]
});

new Vue({
	router: router,
	render: h => h(App)
}).$mount('#app');

