<template>
  <nav class="navbar navbar-expand-md navbar-light navbar-laravel">
    <div class="container">
      <router-link to="/" class="navbar-brand">
				<span class="brand">SportsBet</span>
			</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto"></ul>

        <ul class="navbar-nav ml-auto">
          <template v-if="user.loggedIn">
						<li class="nav-item">
							<a class="nav-link">
								<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-person-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
									<path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z"></path>
									<path fill-rule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
									<path fill-rule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"></path>
								</svg>
								{{user.data.displayName}}
							</a>
						</li>
            <li class="nav-item">
							<button type="button" class="btn btn-warning" @click.prevent="signOut">Sign out</button>
            </li>
          </template>
          <template v-else>
						<li class="nav-item">
							<router-link to="register" class="nav-link">Register</router-link>
						</li>
            <li class="nav-item login-btn">
              <router-link to="login" class="nav-link">Login</router-link>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
import firebase from "firebase";
export default {
  computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: "user"
    })
  },
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({
            name: "home"
          });
        });
    }
  }
};
</script>

<style scoped>
nav {
	background-color: #127777;
}

.brand {
	color: #FFBE26;
	font-weight: bold;
	font-size: 40px;
}

.nav-link {
	color: white !important;
	font-weight: bold;
	font-size: 15px;
}

.login-btn {
	background: rgba(255, 255, 255, 0.3);
	border-radius: 180px;
	width: 98px;
	text-align: center;
}
</style>
