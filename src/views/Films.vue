<template>
	<Page>
		<div class="content">Films
			<div class="tableau">
				<table>
<tr>
<th scope="col">Titre du film</th>
<th scope="col">Bande annonce</th>
<th scope="col">Catégorie</th>
    <th scope="col">Année sortie</th>
<th scope="col">Vote</th>

</tr>
<tr>
    <td>Taxi</td>
	<td><div id='blogvision'>
    <iframe src='https://player.allocine.fr/18805253.html' style='width:480px; height:270px'>
    </iframe>
    <br />
    <a href="https://www.allocine.fr/film/fichefilm_gen_cfilm=17106.html" target="_blank" rel="noopener noreferrer">Taxi</a>
    <br/>
    <a href="https://www.allocine.fr/video/player_gen_cmedia=18805253&cfilm=17106.html"><strong>Taxi</strong> Bande-annonce VF</a>
</div> </td>
<td >Aventure, Comédie</td>
	<td >1998</td>
<td>Oui</td>
</tr>
</table>

		</div>
	</div>
	</Page>
</template>

<script>
	import Page from "@/components/Page.vue";
	export default {
		name: "Films",
		components: {Page},
	};
</script>

<style scoped>
	.content {
		padding: 20px;
		flex: 1 0 auto;
	}
</style>