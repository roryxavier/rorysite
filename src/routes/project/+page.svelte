<script>
	import Favicon from '@/assets/favicon.ico';
	import { PROJECT_ROUTE } from '@/models/Route.model';
	import SectionProject from '@/routes/project/SectionProject.svelte';
	import { onMount } from 'svelte';
	import { navigate } from 'svelte-routing';

	onMount(() => {
		if (PROJECT_ROUTE.isDisabled) navigate('/');
	});
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
