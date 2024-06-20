<script>
	import Favicon from '@/assets/favicon.ico';
	import SectionIntroduction from '@/routes/about/SectionIntroduction.svelte';
</script>

<svelte:head>
	<link rel="icon" href={Favicon} />
	<title>Rory!</title>
</svelte:head>

<div class="home-page">
	<SectionIntroduction />
</div>

<style scoped lang="scss">
	.home-page {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;

		gap: 1rem;
	}
</style>
