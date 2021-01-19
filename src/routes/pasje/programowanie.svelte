<script>
	import Site from '../../components/Site.svelte';
	import sites from './_sites.js';
	import Comments from "disqus-svelte";
</script>

<style>
	#container {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
</style>

<svelte:head>
	<title>Programowanie</title>
</svelte:head>

<h1>Portfolio</h1>

<div id="container">
	{#each sites as site (site.id)}
		<Site title={site.title} url={site.url} thumbnail={site.thumbnail} description={site.description} />
	{/each}
</div>

<br>

<Comments identifier="przbas-homepage-pasje-programowanie" shortname="przbas-homepage-pasje-programowanie" />

<br>