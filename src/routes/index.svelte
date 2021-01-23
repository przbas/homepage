<script>

</script>
<style>
	h1, p {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	p {
		margin: 1em auto;
	}

	.socials {
		display: flex;
		justify-content: center;
	}

	.icon {
		width: 40px;
		margin: 5px;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 3em;
		}
	}
</style>

<svelte:head>
	<title>Przemysław Baśkiewicz | strona domowa</title>
</svelte:head>

<h1>Witaj!</h1>

<p><strong>Przemysław Baśkiewicz</strong></p>
<p><img src="foto.png" alt="Moja fotka"></p>
<p>Jestem konstruktorem, programistą amatorem, lubię łamigłówki.</p>
<p>Ta strona jest wynikiem mojej pasji i zainteresowań.</p>

<div class="socials">
	<a href="mailto:przemyslaw.baskiewicz@gmail.com"><img class="icon" src="i_mail.svg" alt="mail"></a>
	<a href="https://www.facebook.com/przbas" target="_blank"><img class="icon" src="i_facebook.svg" alt="fb"></a>
	<a href="https://github.com/przbas" target="_blank"><img class="icon" src="i_github.svg" alt="git"></a>
	<a href="https://www.linkedin.com/in/przemys%C5%82aw-ba%C5%9Bkiewicz-930478204/" target="_blank"><img class="icon" src="i_linkedin.svg" alt="in"></a>
</div>
<br>