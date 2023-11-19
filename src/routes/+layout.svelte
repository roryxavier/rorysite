<script>
	import { onMount } from 'svelte';
	import RootLayout from '@/component/RootLayout.svelte';
	import OgImage from '@/resource/og-image.png';
	import '../app.css';
	import Actionbar from '@/component/Actionbar.svelte';

	let show = false;
	onMount(() => {
		setTimeout(() => (show = true), 10);
	});
</script>

<svelte:head>
	<meta name="twitter:title" content="Rory Xavier" />
	<meta name="twitter:image" content={OgImage} />
	<meta
		name="twitter:description"
		content="Hey there! My name's Rory and I'm a Blue Wolf currently hanging out in Singapore."
	/>

	<meta name="title" property="og:title" content="Rory Xavier" />
	<meta name="type" property="og:type" content="website" />
	<meta name="image" property="og:image" content={OgImage} />
	<meta name="url" property="og:url" content="https://rorywolf.net" />
	<meta
		name="description"
		property="og:description"
		content="Hey there! My name's Rory and I'm a Blue Wolf currently hanging out in Singapore."
	/>
</svelte:head>

<RootLayout>
	<div class="app" data-show={show}>
		<Actionbar />

		<div class="app-body">
			<slot />
		</div>
	</div>
</RootLayout>

<style scoped lang="scss">
	.app {
		min-height: 100dvh;

		transition: all 0.4s ease;
		opacity: 0;
		transform: translateY(0.2rem);

		&[data-show='true'] {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.app-body {
		padding: 1rem;
		min-height: calc(100dvh - 3.5rem);

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>
