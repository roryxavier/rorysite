<script>
	import Favicon from '@/resource/favicon.ico';
	import SectionFirst from '@/routes/SectionFirst.svelte';
</script>

<svelte:head>
	<link rel="icon" href={Favicon} />
	<title>Rory!</title>
</svelte:head>

<div class="home-page">
	<SectionFirst />
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
