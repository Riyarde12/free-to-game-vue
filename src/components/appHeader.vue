<template>
	<section class="app-header">
		<h1 @click="goTo()">Free To Play</h1>
		<nav>
			<router-link to="/">Home Page</router-link>
		</nav>
	</section>
</template>
<script>
	export default {
		name: "add-header",
		components: {},
		created() {},
		data() {
			return {};
		},
		methods: {
			goTo() {
				this.$router.push("/");
			},
		},
	};
</script>
