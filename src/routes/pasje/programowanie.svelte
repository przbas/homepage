<script>
	import Site from '../../components/Site.svelte';
	import sites from './_sites.js';

	/**
    *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
    *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables    */
    
    var disqus_config = function () {
    this.page.url = "https://przbas.github.io/homepage/pasje/programowanie";  // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = "przbas-homepage-pasje-programowanie"; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };

    (function() { // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');
    s.src = 'https://przbas-homepage-pasje-programowanie.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
    })();

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

<div id="disqus_thread"></div>


<br>