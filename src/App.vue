<template>
<div>
	<navbar></navbar>

	<router-view></router-view>

	<footer :class="$route.name === 'login' || $route.name === 'register' ? 'blog-footer' : 'reg-footer'">
		<p>3XP by <a href="https://www.xtremepush.com">Xtremepush</a></p>
		<p>
			<a href="#">Back to top</a>
		</p>
	</footer>
</div>
</template>

<script>
import navbar from "./components/Navbar";
export default {
  components: {
    navbar
  }
};
</script>


<style scoped>
/*
 * Footer
 */
.blog-footer {
	padding: 2.5rem 0;
	color: #999;
	text-align: center;
	background-color: #f9f9f9;
	border-top: .05rem solid #e5e5e5;
	position: absolute;
	bottom: 0;
	width: 100%;
}
.blog-footer p:last-child {
	margin-bottom: 0;
}

.reg-footer {
	padding: 2.5rem 0;
	color: #999;
	text-align: center;
	background-color: #f9f9f9;
	border-top: .05rem solid #e5e5e5;
}
.reg-footer p:last-child {
	margin-bottom: 0;
}
</style>
