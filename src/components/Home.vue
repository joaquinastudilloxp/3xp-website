<template>
<div>
	<div style="background-color: #ececec; border-bottom: 1px solid #c8c7c8;">
		<div class="col-md-12">
			<nav class="nav d-flex justify-content-around">
				<a class="nav-item p-2 text-muted" href="#">Sports</a>
				<a class="nav-item p-2 text-muted" href="#">Live</a>
				<a class="nav-item p-2 text-muted" href="#">Live Casino</a>
				<a class="nav-item p-2 text-muted" href="#">Mobile</a>
				<a class="nav-item p-2 text-muted" href="#">News</a>
				<a class="nav-item p-2 text-muted" href="#">Blog</a>
			</nav>
		</div>
	</div>

	<br>

	<div class="col-md-12">
		<div class="row">
			<div class="col-md-2 form-group">
				<div>
					<ul class="list-group">
						<li class="list-group-item">Live</li>
						<li class="list-group-item">Horse Racing</li>
						<li class="list-group-item">Football</li>
						<li class="list-group-item">Golf</li>
						<li class="list-group-item">Boxing</li>
						<li class="list-group-item">Slots</li>
						<li class="list-group-item">Virtual Sports</li>
						<li class="list-group-item">Tennis</li>
						<li class="list-group-item">Basketball</li>
					</ul>
				</div>
			</div>

			<div class="col-md-7 form-group">
				<div class="embed-responsive embed-responsive-16by9" v-if="user.data !== null && deviceId !== null">
					<iframe class="embed-responsive-item" :src="iframeUrl" allowfullscreen></iframe>
				</div>
				<div v-else :style="{ 'background-image': 'url(' + require('../assets/board1.png') + ')' }" class="play-section jumbotron p-4 p-md-5 text-white rounded">
					<div class="col-md-6 px-0">
						<h1 class="display-6 font-italic">Play our exciting new daily free game to win great 3XPBet Prizes!</h1>
					</div>
					<button type="button" class="btn btn-danger btn-lg">Play</button>
				</div>

				<br v-if="user.data !== null && deviceId !== null">
				<h1><span style="background-color: #147776" class="badge badge-secondary">Most Popular</span></h1>

				<br>

				<div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
						<div class="col p-4 d-flex flex-column position-static">
							<h3 class="mb-0">Football</h3>
							<p class="card-text mb-auto">Interested in XX? Click the link below and you will be able to get right in on the latest action from Cheltenham and other race courses around the world.</p>
							<a href="#" class="stretched-link">Continue reading</a>
						</div>
						<div class="col-auto d-none d-lg-block">
							<img :src="require('../assets/racing.png')" class="bd-placeholder-img" width="300" height="250" />
						</div>
				</div>

				<div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
						<div class="col p-4 d-flex flex-column position-static">
							<h3 class="mb-0">Football</h3>
							<p class="card-text mb-auto">Interested in XX? Click the link below and you will be able to get right in on the latest action from Cheltenham and other race courses around the world.</p>
							<a href="#" class="stretched-link">Continue reading</a>
						</div>
						<div class="col-auto d-none d-lg-block">
							<img :src="require('../assets/football.png')" class="bd-placeholder-img" width="300" height="250" />
						</div>
				</div>

				<div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
						<div class="col p-4 d-flex flex-column position-static">
							<h3 class="mb-0">Football</h3>
							<p class="card-text mb-auto">Interested in XX? Click the link below and you will be able to get right in on the latest action from Cheltenham and other race courses around the world.</p>
							<a href="#" class="stretched-link">Continue reading</a>
						</div>
						<div class="col-auto d-none d-lg-block">
							<img :src="require('../assets/golf.png')" class="bd-placeholder-img" width="300" height="250" />
						</div>
				</div>
			</div>

			<div class="col-md-3 form-group">
				<div class="games-section">
					<div class="form-group">
						<div class="card" style="">
							<img :src="require('../assets/card1.png')" class="card-img-top">
							<div class="card-body">
								<h5 class="card-title">Baccarat</h5>
							</div>
						</div>
					</div>
					<div class="form-group">
						<div class="card" style="">
							<img :src="require('../assets/card2.png')" class="card-img-top">
							<div class="card-body">
								<h5 class="card-title">Slots</h5>
							</div>
						</div>
					</div>
					<div class="form-group">
						<div class="card" style="">
							<img :src="require('../assets/card3.png')" class="card-img-top">
							<div class="card-body">
								<h5 class="card-title">Online Poker</h5>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
name: "Home",

	data(){
		return {
			deviceId: null
		}
	},

	mounted() {
		if(localStorage.getItem('xtremepush.data')){
			this.deviceId = JSON.parse(localStorage.getItem('xtremepush.data')).id;
		}
	},

	computed: {
		// map `this.user` to `this.$store.getters.user`
		...mapGetters({
			user: "user"
		}),

		iframeUrl(){
			const siteUrl = 'https://pro-euw2-app.vocohub.com/sales-demo-sports-betting/main/app/index.html'
			if(this.user.data.email !== undefined && this.user.data.email !== null && this.deviceId){
				return `${siteUrl}?email=${this.user.data.email}&device_id=${this.deviceId}#/app/start`
			}else {
				return null
			}
		}
	}
}
</script>

<style scoped>
.list-group-item {
	background-color: #147776;
	color: white;
	font-weight: 600;
	transition: all 0.2s;
	cursor: pointer;
}

.list-group-item:hover {
	background-color: #c31112;
}

.nav-item {
	color: #3f3d3b;
	font-weight: 600;
	width: 311px;
	cursor: pointer;
	text-decoration: none;
	transition: all 0.2s;
}

.nav-item:hover {
	background-color: #c31112;
	color: white !important;
}

.games-section {
	background-color: #147776;
	padding: 20px;
	border-radius: 3px;
}

.play-section {
	height: 500px;
	background: #147776;
	color: white;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
}
</style>
