<template>
	<div class="barretop">


<div class="entreprise">Breizh Vidéo prend la route</div>

	</div>
</template>

<script>
	export default {
		name: "BarreTop",
		props: [],
	};
</script>

<style scoped>
	.barretop {
		height: 96px;
		background-color: #8B83BA;
		background-image:src="../assets/van.png";
		background-size: cover;
		
	
	}


	.entreprise {
	position: absolute;
width: 617px;
height: 65px;
left: 20px;
top: 41px;

font-family: Playfair Display;
font-style: normal;
font-weight: bold;
font-size: 49px;
line-height: 65px;

color: #34313A;	
	}

	.img {
        max-width: 100%;
        height: auto;
        display: block;
		margin: auto;
	}
</style>
