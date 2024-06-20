<script lang="ts">
	import { onMount } from 'svelte';
	import OgImage from '@/assets/og-image.png';
	import Actionbar from '@/components/actionbar/Actionbar.svelte';
	import '../app.css';
	import { afterNavigate, beforeNavigate } from '$app/navigation';
	import Background from '@/components/background/Background.svelte';

	let showActionbar = false;
	let showContent = false;
	let startAnimate = false;

	let scrollTop = 0;

	function onScroll() {
		scrollTop = window.scrollY;
	}

	onMount(async () => {
		window.addEventListener('scroll', onScroll);
		onScroll();

		await new Promise((r) => setTimeout(r, 0));
		showActionbar = true;
		showContent = true;

		await new Promise((r) => setTimeout(r, 50));
		startAnimate = true;
	});

	afterNavigate(async () => {
		await new Promise((r) => setTimeout(r, 400));
		showContent = true;
	});
	beforeNavigate(() => {
		showContent = false;
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

<div class="app">
	<Background />
	<Actionbar show={showActionbar} showShadow={scrollTop > 0} />
	<div class="app-body" data-show={showContent} data-start-animate={startAnimate}>
		<slot />
	</div>
</div>

<style scoped lang="scss">
	.app {
		--actionbar-height: 4.5rem;

		min-height: 100dvh;

		.app-body {
			width: 100%;
			min-height: calc(100dvh - var(--actionbar-height) - 3px);
			padding: 1rem;

			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;

			transition: all 0.4s ease;

			&[data-show='false'] {
				opacity: 0;
				transform: scale(0.9) translateY(4rem);
			}
			&[data-show='true'] {
				opacity: 1;
				transform: scale(1) translateY(0);
			}
			&[data-start-animate='true'] {
				transform: translateY(0.2rem);
			}
		}
	}
</style>
