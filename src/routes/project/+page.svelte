<script>
	import Favicon from '@/resource/favicon.ico';
	import SectionProject from '@/routes/project/SectionProject.svelte';
</script>

<svelte:head>
	<link rel="icon" href={Favicon} />
	<title>Rory!</title>
</svelte:head>

<div class="home-page">
	<SectionProject />
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
