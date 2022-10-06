<template>
	<section class="game-preview">
		<router-link :to="`/details/${game.id}`">
			<div class="container">
				<div class="container-info">
					<h1>{{ game.title }}</h1>
					<h1>{{ game.release_date }}</h1>
				</div>
				<img :src="getGamePicture" alt="Game image missing" />
			</div>
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
