import Vue from 'vue';
import Router from 'vue-router';
import Login from '../components/Login'
import Register from '../components/Register'
import Dashboard from '../components/Dashboard'
import firebase from "firebase";

Vue.use(Router)

const router = new Router({
    routes: [
		{
			path: '/login',
			name: 'login',
			component: Login,
			meta: {
				hideForAuth: true
			}
		},
		{
			path: '/register',
			name: 'Register',
			component: Register,
			meta: {
				hideForAuth: true
			}
		},
		{
			path: '/dashboard',
			name: 'Dashboard',
			component: Dashboard,
			meta: {
				requiresAuth: true
			}
		}
	]
});

router.beforeEach((to, from, next) => {
	firebase.auth().onAuthStateChanged(function(user) {
		if (to.matched.some(record => record.meta.hideForAuth)) {
			if (user) {
				next({ path: '/dashboard' });
			} else {
				next();
			}
		} else {
			next();
		}
	});
});

router.beforeEach((to, from, next) => {
	const currentUser = firebase.auth().currentUser;
	const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
	if (requiresAuth && !currentUser) {
		next('/login');
	} else if (requiresAuth && currentUser) {
		next();
	} else {
		next();
	}
});

export default router
