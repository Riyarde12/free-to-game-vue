<template>
	<section>
		<app-header />
		<router-view />
		<app-footer />
	</section>
</template>
<script>
	import appHeader from "./components/appHeader.vue";
	import appFooter from "./components/appFooter.vue";

	export default {
		name: "App",
		components: {
			appHeader,
			appFooter,
		},
		created() {},
		data() {
			return {};
		},
	};
</script>