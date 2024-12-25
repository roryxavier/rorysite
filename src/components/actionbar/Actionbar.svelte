<script lang="ts">
	import { onMount } from 'svelte';
	import { afterNavigate } from '$app/navigation';
	import {
		ABOUT_ROUTE,
		ART_ROUTE,
		HOME_ROUTE,
		PROJECT_ROUTE,
		type RouteModel,
	} from '@/models/Route.model';
	import Nav from './Actionbar-Nav.svelte';
	import Logo from './Actionbar-Logo.svelte';
	import HamburgerIcon from '@/components/icon/Hamburger.icon.svelte';

	const {
		show,
		showShadow,
		toggleMenu,
	}: { show: boolean; showShadow: boolean; toggleMenu(): void } = $props();

	const navs: RouteModel[] = [HOME_ROUTE, ABOUT_ROUTE, PROJECT_ROUTE, ART_ROUTE].filter(
		(route) => !route.isDisabled,
	);

	let pathname = $state('');

	const currentRoute = $derived.by(() => {
		return navs.find((nav) => nav.path === pathname);
	});

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

<nav class="actionbar" data-show={show} data-scroll-down={`${showShadow}`}>
	<button class="actionbar-hamburger" onclick={toggleMenu}>
		<HamburgerIcon size={20} />
	</button>

	{#if currentRoute}
		<span class="actionbar-title">{currentRoute.title}</span>
	{/if}

	<div class="actionbar-navs">
		{#each navs as nav}
			<Nav route={nav} selected={pathname === nav.path} />
		{/each}
	</div>

	<Logo />
</nav>

<style lang="scss">
	.actionbar {
		display: flex;
		flex-direction: row;
		align-items: center;

		position: sticky;
		top: 0;
		z-index: 2;
		overflow: hidden;

		width: 100%;
		height: var(--actionbar-height);
		padding: 1rem;

		border: 1px solid transparent;

		transition: all 0.4s ease;

		&[data-show='false'] {
			opacity: 0;
			transform: translateY(-100%);
			gap: 0;
		}
		&[data-show='true'] {
			opacity: 1;
			transform: translateY(0);
			gap: 1rem;
		}

		&[data-scroll-down='false'] {
			--color: white;
			color: white;
		}
		&[data-scroll-down='true'] {
			box-shadow: 0 0 2rem rgba(0, 0, 0, 0.2);
			border-color: rgba(255, 255, 255, 0.05);
			background-color: var(--primary-color-extra-light);
			--color: var(--primary-color-dark);
			color: var(--primary-color-dark);
		}

		.actionbar-hamburger {
			--size: 2.5rem;
			width: var(--size);
			height: var(--size);
			aspect-ratio: 1/1;
			border-radius: 50%;

			display: grid;
			place-items: center;
		}
		.actionbar-title {
			display: flex;
			flex-direction: row;
			align-items: center;
			flex-grow: 1;

			font-weight: 700;
			font-size: 1.25rem;

			@media (min-width: 700px) {
				display: none;
			}
		}
		.actionbar-navs {
			display: flex;
			flex-direction: row;
			align-items: center;
			flex-grow: 1;
			gap: 0.1rem;
			transition: all 400ms ease;
			z-index: 1;

			@media (max-width: 699px) {
				display: none;
			}
		}
	}
</style>
