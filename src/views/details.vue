<template>
	<section class="details" v-if="game">
		<img :src="game.thumbnail" alt="Image is missing" />
		<div class="container-info">
			<a :href="game.game_url">Play</a>
			<h1>Name: {{ game.title }}</h1>
			<h1>Description: {{ game.short_description }}</h1>
			<h1>Genre: {{ game.genre }}</h1>
			<h1>Platform: {{ game.platform }}</h1>
			<h1>Publisher: {{ game.publisher }}</h1>
			<h1>Developer: {{ game.developer }}</h1>
			<h1>Release Date: {{ game.release_date }}</h1>
		</div>
	</section>
</template>
<script>
	import { freeGamesService } from "../services/free-games-service.js";

	export default {
		name: "details",
		components: {},
		created() {
			this.getGameById();
		},
		data() {
			return {
				game: null,
			};
		},
		methods: {
			async getGameById() {
				const { id } = this.$route.params;
				this.game = await freeGamesService.getGameById(id);
			},
		},
		computed: {},
	};
</script>