<template>
	<section class="game-preview">
		<!-- <pre>
        {{ game }}
    </pre> -->
		<router-link :to="`/details/${game.id}`">
			<h1>Game: {{ game.title }}</h1>
			<h1>Platform: {{ game.platform }}</h1>
			<h1>Genre: {{ game.genre }}</h1>
			<!-- <h1>Publisher: {{ game.publisher }}</h1> -->
			<!-- <h1>Developer: {{ game.developer }}</h1> -->
			<!-- <h1>Release date: {{ game.release_date }}</h1> -->
			<img :src="getGamePicture" alt="Game image missing" />
		</router-link>
	</section>
</template>

<script>
	export default {
		name: "game-preview",
		props: {
			game: { type: Object, required: true },
		},
		components: {},
		created() {},
		data() {
			return {};
		},
		methods: {},
		computed: {
			getGamePicture() {
				return this.game.thumbnail;
			},
		},
	};
</script>
