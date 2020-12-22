<template>
	<nav>
		<NavLeftItem route="/" label="Home"></NavLeftItem>
		<NavLeftItem route="/Village" label="Village"></NavLeftItem>
		<NavLeftItem route="/Evènements" label="Evènements"></NavLeftItem>
		<NavLeftItem route="/Films" label="Films"></NavLeftItem>
		<NavLeftItem route="/About" label="About"></NavLeftItem>
		<NavLeftItem route="/Contacts" label="Contacts"></NavLeftItem>
	</nav>
</template>

<script>
	import NavLeftItem from "@/components/NavLeftItem.vue";
	export default {
		name: "NavLeft",
		components: {NavLeftItem},
	};
</script>

<style scoped>
	nav {
		width: 20vw;
		background: #f6f6f6;
		min-width: 180px;
		max-width: 220px;
		padding: 20px;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
</style>
