<script>
	import Favicon from '@/assets/favicon.ico';
	import SectionArt from '@/routes/art/SectionArt.svelte';
</script>

<svelte:head>
	<link rel="icon" href={Favicon} />
	<title>Rory!</title>
</svelte:head>

<div class="art-page">
	<SectionArt />
</div>

<style lang="scss">
	.art-page {
		width: 100%;
		gap: 1rem;

		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
	}
</style>
