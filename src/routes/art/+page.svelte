<script>
	import Favicon from '@/resource/favicon.ico';
	import SectionArt from '@/routes/SectionArt.svelte';
</script>

<svelte:head>
	<link rel="icon" href={Favicon} />
	<title>Rory!</title>
</svelte:head>

<div class="home-page">
	<SectionArt />
</div>

<style scoped lang="scss">
	.home-page {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;

		gap: 1rem;
	}
</style>
