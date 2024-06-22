<script lang="ts">
	import { onMount } from 'svelte';
	import { afterNavigate } from '$app/navigation';
	import { ABOUT, ART, HOME, PROJECT, type Route } from '@/data/Route.js';
	import Nav from './Actionbar-Nav.svelte';
	import Logo from './Actionbar-Logo.svelte';

	export let show: boolean;
	export let showShadow: boolean;
	export let toggleMenu: () => void;

	const navs: Route[] = [HOME, ABOUT, PROJECT, ART];

	let pathname = '';

	async function resetPathname() {
		const paths = window.location.pathname.split('/').filter((str) => str.length > 0);
		pathname = `/${paths[0] ?? ''}`;
	}

	onMount(() => {
		resetPathname();
	});
	afterNavigate(() => {
		resetPathname();
	});
</script>

<nav class="actionbar" data-show={show} data-scroll-down={showShadow}>
	<div class="actionbar-navs">
		{#each navs as nav}
			<Nav route={nav} selected={pathname === nav.path} />
		{/each}
	</div>

	<Logo click={toggleMenu} />
</nav>

<style scoped lang="scss">
	.actionbar {
		overflow: hidden;

		display: flex;
		flex-direction: row;
		align-items: center;

		width: 100%;
		height: var(--actionbar-height);
		padding: 1rem;

		color: white;

		position: sticky;
		top: 0;
		z-index: 2;

		transition: all 0.4s ease;
		opacity: 0;
		transform: translateY(-100%);

		&[data-show='true'] {
			opacity: 1;
			transform: translateY(0);
			gap: 1rem;
		}

		&[data-scroll-down='true'] {
			box-shadow: 0 0 2rem rgba(0, 0, 0, 0.2);
			background: black;
		}

		.actionbar-navs {
			display: flex;
			flex-direction: row;
			align-items: center;
			flex-grow: 1;
			gap: 0.1rem;
			transition: all 600ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
			transition: all 600ms ease;
			z-index: 1;
		}
	}
</style>
