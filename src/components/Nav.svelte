<script>
	export let segment;
</script>

<style>
	div {
		position: fixed;
		z-index: 100;
		top: 0;
		left: 0;
		width: 100vw;
		background-color: rgb(209, 195, 157);
	}

	nav {
		border-bottom: 1px solid rgba(255,62,0,0.1);
		font-weight: 300;
		padding: 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		max-width: 56em;
		margin: 0 auto;
	}

	ul {
		margin: 0;
		padding: 0 20px;
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
		height: 3px;
		background-color: rgb(100, 139, 28);
		display: block;
		bottom: -1px;
	}

	a {
		text-decoration: none;
		padding: 0.5em 0.5em;
		display: block;
	}

	/* Mobile */
	@media (max-width: 500px) {
		nav {
			flex-direction: column;
		}
	}

</style>

<div>
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
</div>