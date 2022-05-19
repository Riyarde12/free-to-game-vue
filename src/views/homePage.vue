<template>
	<section class="home-page">
		<game-list v-if="games" :games="games" />
	</section>
</template>
<script>
	import { freeGamesService } from "../services/free-games-service.js";
	import gameList from "../components/gameList.vue";
	export default {
		name: "homePage",
		components: {
			gameList,
		},
		created() {
			this.getGames();
		},
		data() {
			return {
				games: null,
			};
		},
		methods: {
			async getGames() {
				this.games = await freeGamesService.query();
			},
		},
		computed: {},
	};
</script>