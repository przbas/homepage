<script>
	export let segment;
</script>

<style>

	nav {
		border-bottom: 1px solid rgba(255,62,0,0.1);
		font-weight: 300;
		padding: 0;
		display: flex;
		position: fixed;
		z-index: 100;
		top: 0;
		left: 0;
		width: 100vw;
		background-color: khaki;
	}

	ul {
		margin: 0;
		padding: 0 1em;
	}

	ul:first-of-type {
		margin-right: auto;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
	}

	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: rgb(255,62,0);
		display: block;
		bottom: -1px;
	}

	a {
		text-decoration: none;
		padding: 0.5em 0.5em;
		display: block;
	}
</style>


<nav>
	<ul>
		<li><a aria-current="{segment === undefined ? 'page' : undefined}" href=".">Przemysław Baśkiewicz</a></li>
	</ul>
	<ul>
		<li><a aria-current="{segment === 'praca' ? 'page' : undefined}" href="praca">praca</a></li>
		<li><a aria-current="{segment === 'pasje' ? 'page' : undefined}" href="pasje">pasje</a></li>
		<li><a aria-current="{segment === 'blog' ? 'page' : undefined}" href="blog">blog</a></li>
	</ul>
</nav>	
