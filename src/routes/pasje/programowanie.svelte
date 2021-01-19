<script>
	import Site from '../../components/Site.svelte';
	import sites from './_sites.js';
	import CommentsProgramowanie from "disqus-svelte";
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

<CommentsProgramowanie identifier="przbas-homepage-pasje-programowanie" url="https://przbas.github.io/homepage/pasje/programowanie" container="pasje-programowanie-container" />

<br>