import Vue from "vue";
import App from "./App.vue";
import router from "./routes/index";
import * as firebase from "firebase";
import store from "./store";

Vue.config.productionTip = false;

const configOptions = {
	apiKey: "AIzaSyB0baJ7Rc7V8FWtJE6Qkb_Zua_MayfSpxY",
	authDomain: "xp-firebase-auth.firebaseapp.com",
	databaseURL: "https://xp-firebase-auth.firebaseio.com",
	projectId: "xp-firebase-auth",
	storageBucket: "xp-firebase-auth.appspot.com",
	messagingSenderId: "801792621127",
	appId: "1:801792621127:web:8724063123590584a88f62",
	measurementId: "G-2NEKZYLG37"
};

firebase.initializeApp(configOptions);

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});

Vue.prototype.xp = window.xtremepush

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
