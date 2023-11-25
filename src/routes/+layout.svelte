<script lang="ts">
	import { onMount } from 'svelte';
	import RootLayout from '@/component/RootLayout.svelte';
	import OgImage from '@/resource/og-image.png';
	import Actionbar from '@/component/Actionbar.svelte';
	import '../app.css';
	import { afterNavigate, beforeNavigate } from '$app/navigation';

	let showActionbar = false;
	let showContent = false;
	let classAnimate = '';
	onMount(() => {
		setTimeout(() => (showActionbar = true), 10);
		setTimeout(() => (showContent = true), 10);
		setTimeout(() => {
			classAnimate = 'app-body-animate';
		}, 500);
	});

	beforeNavigate(() => {
		showContent = false;
	});
	afterNavigate(() => {
		setTimeout(() => (showContent = true), 400);
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
	<div class="app">
		<Actionbar dataShow={showActionbar} />
		<div class="app-body {classAnimate}" data-show={showContent}>
			<slot />
		</div>
	</div>
</RootLayout>

<style scoped lang="scss">
	.app {
		min-height: 100dvh;
	}

	.app-body {
		padding: 1rem;
		min-height: calc(100dvh - var(--actionbar-height));

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		transition: all 0.4s ease;
		transform: scale(1.1) translateY(4rem);
		opacity: 0;
		&[data-show='true'] {
			opacity: 1;
			transform: translateY(0);
		}
	}
	.app-body-animate {
		transform: translateY(0.2rem);
	}
</style>
