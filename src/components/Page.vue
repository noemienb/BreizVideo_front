<template>
	<div class="page">
		<BarreTop></BarreTop>
		<main>
			<NavLeft></NavLeft>
			<slot></slot>
			<div class="titre">{{ titre }}</div>
		</main>
	</div>
</template>

<script>
	import BarreTop from "@/components/BarreTop.vue";
	import NavLeft from "@/components/NavLeft.vue";
	export default {
		name: "",
		props: ["titre"],
		components: {BarreTop, NavLeft},
	};
</script>

<style scoped>
	.page {
		display: flex;
		flex-direction: column;
		height: 100%;
		flex-grow: 1;
		flex-direction: column;
	}
	.page main {
		display: flex;
		flex-grow: 1;
	}

	.titre{
		position: absolute;
width: 273px;
height: 65px;
left: 287px;
top: 393px;

font-family: Playfair Display;
font-style: normal;
font-weight: bold;
font-size: 49px;
line-height: 65px;

color: #6E6893;
	}
</style>
