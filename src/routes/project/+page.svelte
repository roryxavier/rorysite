<script>
	import Favicon from '@/assets/favicon.ico';
	import SectionProject from '@/routes/project/SectionProject.svelte';
</script>

<svelte:head>
	<link rel="icon" href={Favicon} />
	<title>Rory!</title>
</svelte:head>

<div class="project-page">
	<SectionProject />
</div>

<style lang="scss">
	.project-page {
		width: 100%;
		gap: 1rem;

		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
	}
</style>
