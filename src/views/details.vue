<template>
	<section class="details" v-if="game">
		<img :src="game.thumbnail" alt="Image is missing" />
		<div class="container-info">
			<button class="game-btn" @click="goTo">Play</button>
			<button @click="goBack">go back</button>
			<h1>Name: {{ game.title }}</h1>
			<h1>Description: {{ game.short_description }}</h1>
			<h1>Genre: {{ game.genre }}</h1>
			<h1>Platform: {{ game.platform }}</h1>
			<h1>Publisher: {{ game.publisher }}</h1>
			<h1>Developer: {{ game.developer }}</h1>
			<h1>Release Date: {{ game.release_date }}</h1>
		</div>

		<Teleport to="body">
			<div v-if="open" class="modal">
				<p>Loading the game!</p>
				<p>Be prepered!</p>
			</div>
		</Teleport>
	</section>
	<section v-else>
		<Teleport to="body">
			<div class="modal">
				<p>Unfortunately, we do not have the requested game</p>
				<button @click="goBack">GO Back</button>
			</div>
		</Teleport>
		<h1>{{ cannotDisplayGame }}</h1>
	</section>
</template>


<script>
	import { freeGamesService } from "../services/free-games-service.js";
	import router from "@/router";

	export default {
		name: "details",
		components: {},
		created() {
			this.getGameById();
		},
		data() {
			return {
				game: null,
				open: false,
				modalMsg: false,
			};
		},
		methods: {
			async getGameById() {
				try {
					const { id } = this.$route.params;
					this.game = await freeGamesService.getGameById(id);
				} catch (err) {
					console.error(err);
				}
				// if (!this.game) {
				// 	this.modalMsg = true;
				// 	setTimeout(() => {
				// 		if (this.modalMsg) {
				// 			this.modalMsg = false;
				// 			this.goHome();
				// 		}
				// 		this.modalMsg = false;
				// 	}, 5000);
				// }
			},
			goTo() {
				this.open = true;
				console.log("go to");
				setTimeout(() => {
					window.location = `${this.game.game_url}`;
					this.open = false;
				}, 3000);
			},
			goBack() {
				this.$router.back();
			},
			goHome() {
				this.$router.replace({ name: "homePage" });
				console.log("this.router", this.$router.replace({ name: "homePage" }));
			},
		},
		computed: {
			cannotDisplayGame() {
				return "Cannot display game";
			},
			displayMsgTouser() {
				return "loading...";
			},
		},
		watch: {
			"$route.params": {
				handler() {
					this.getGameById();
				},
				// deep: true,
				immediate: true,
			},
		},
	};
</script>

<style scoped>
.modal {
     position: fixed;
    z-index: 999;
    top: 20%;
    left: 50%;
    width: 300px;
    margin-left: -150px;
    padding: 30px;
    border-radius: 8px;
    background-color: #333333;
    box-shadow: 0 4px 16px #00000026;
	
}
.modal button{
	    padding: 10px;
    margin-top: 10px
}
</style>