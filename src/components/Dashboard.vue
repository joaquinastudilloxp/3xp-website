<template>
  <div class="container">
    <div class="row justify-content-center">

			<div class="col-md-2">
				<div class="list-group">
					<button type="button" class="list-group-item list-group-item-action">
						Live
					</button>
					<button type="button" class="list-group-item list-group-item-action">Horse Racing</button>
					<button type="button" class="list-group-item list-group-item-action">Football</button>
					<button type="button" class="list-group-item list-group-item-action">Golf</button>
					<button type="button" class="list-group-item list-group-item-action">Boxing</button>
					<button type="button" class="list-group-item list-group-item-action">Cricket</button>
					<button type="button" class="list-group-item list-group-item-action">Slots</button>
					<button type="button" class="list-group-item list-group-item-action">Virtual Sports</button>
					<button type="button" class="list-group-item list-group-item-action">Tennis</button>
					<button type="button" class="list-group-item list-group-item-action">Basketball</button>
				</div>
			</div>

      <div class="col-md-7">
        <div class="card">
          <div class="card-header">Play</div>

          <div class="card-body">
						<div class="embed-responsive embed-responsive-16by9">
							<iframe class="embed-responsive-item" :src="iframeUrl" allowfullscreen></iframe>
						</div>
          </div>
        </div>

				<br>

				<div class="container">
					<div class="row">
						<div class="col-lg-4 d-flex align-items-stretch">
							<div class="card">
								<img class="card-img-top" :src="require('../assets/racing.png')">
								<div class="card-body">
									<h5 class="card-title">Racing</h5>
									<p class="card-text">Interested in XX? Click the link below and you will be able to get right in on the latest action from Cheltenham and other race courses.</p>
									<a href="#" class="btn btn-primary bottom-btn btn-sm">Go somewhere</a>
								</div>
							</div>
						</div>
						<div class="col-lg-4 d-flex align-items-stretch">
							<div class="card">
								<img class="card-img-top" :src="require('../assets/football.png')">
								<div class="card-body">
									<h5 class="card-title">Football</h5>
									<p class="card-text">Interested in XX? Click the link below and you will be able to get right in on the latest action from Cheltenham and other race courses.</p>
									<a href="#" class="btn btn-primary bottom-btn btn-sm">Go somewhere</a>
								</div>
							</div>
						</div>
						<div class="col-lg-4 d-flex align-items-stretch">
							<div class="card">
								<img class="card-img-top" :src="require('../assets/golf.png')">
								<div class="card-body">
									<h5 class="card-title">Golf</h5>
									<p class="card-text">Interested in XX? Click the link below and you will be able to get right in on the latest action from Cheltenham and other race courses.</p>
									<a href="#" class="btn btn-primary bottom-btn btn-sm">Go somewhere</a>
								</div>
							</div>
						</div>
					</div>
				</div>
      </div>

			<div class="col-md-3">

						<div class="row">
								<h3>Play Online</h3>
						</div>

						<div class="row">
							<div class="card" style="">
								<img class="card-img-top" :src="require('../assets/card1.png')">
								<div class="card-body">
									<h5 class="card-title">Baccarat</h5>
								</div>
							</div>
						</div>

						<br>

						<div class="row">
							<div class="card" style="">
								<img class="card-img-top" :src="require('../assets/card2.png')">
								<div class="card-body">
									<h5 class="card-title">Slots</h5>
								</div>
							</div>
						</div>

						<br>

						<div class="row">
							<div class="card" style="">
								<img class="card-img-top" :src="require('../assets/card3.png')">
								<div class="card-body">
									<h5 class="card-title">Online Poker</h5>
								</div>
							</div>
						</div>
			</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
	name: "Dashboard",

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
			return `${siteUrl}?email=${this.user.data.email}&device_id=${this.deviceId}#/app/start`
		}
  }
};
</script>

<style scoped>
.card > img {
	height: 150px;
}

.card-text {
	font-size: 14px;
}

</style>
