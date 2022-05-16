<template>
	<section class="details" v-if="game">
		<h1>Name: {{ game.title }}</h1>
		<h1>Name: {{ game.short_description }}</h1>
		<h1>Name: {{ game.genre }}</h1>
		<h1>Name: {{ game.platform }}</h1>
		<h1>Name: {{ game.publisher }}</h1>
		<h1>Name: {{ game.developer }}</h1>
		<h1>Name: {{ game.release_date }}</h1>
		<a :href="game.game_url">Click here to play:</a>
		<img :src="game.thumbnail" alt="Image is missing" />
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