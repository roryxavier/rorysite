<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import type { Nav } from './Nav.ts';
	import Logo from '@/resource/avatar.webp';

	export let onNavChange = (nav: Nav) => {};
	export let dataShow = false;

	const navs: Nav[] = [
		{ path: '/', title: 'Home' },
		{ path: '/about', title: 'About Me' },
		{ path: '/project', title: 'Project Created' },
		{ path: '/art', title: 'Art' }
	];

	let pathname = '';
	let expand = true;
	let windowScrollTop = 0;

	function resetPathname() {
		setTimeout(() => (pathname = window.location.pathname), 100);
	}
	function onScroll() {
		windowScrollTop = window.scrollY;
	}

	onMount(() => {
		resetPathname();
		window.addEventListener('scroll', onScroll);
	});
</script>

<nav
	class="actionbar"
	data-show={dataShow}
	data-expand={expand}
	data-scroll-down={windowScrollTop > 0}
>
	<div class="actionbar-navs">
		{#each navs as nav}
			<a
				href={nav.path}
				data-selected={pathname === nav.path}
				on:click={() => {
					resetPathname();
					onNavChange(nav);
				}}>{nav.title}</a
			>
		{/each}
	</div>

	<button class="actionbar-logo" on:click={() => (expand = !expand)}>
		<img src={Logo} alt="Logo" />
	</button>
</nav>

<style scoped lang="scss">
	.actionbar {
		width: 100vw;
		max-width: 100%;
		overflow: hidden;

		display: flex;
		flex-direction: row;
		align-items: center;

		width: 100%;
		height: 4.5rem;
		color: white;
		padding: 1rem;

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

		&[data-expand='false'] {
			.actionbar-navs {
				transform: translateX(calc(75vw - 10rem)) rotateY(90deg) scale(0.5);
			}
		}
		&[data-expand='true'] {
			.actionbar-navs {
				transform: translateX(0);
			}
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
			gap: 0.5rem;
			transition: all 600ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
			transition: all 600ms ease;
			z-index: 1;

			& > * {
				padding: 0.6rem;
				border-radius: 0.3rem;
				&[data-selected='true'] {
					background: white;
					color: black;
				}
			}
		}
		.actionbar-logo {
			border-radius: 50%;
			overflow: hidden;
			z-index: 2;

			display: flex;
			align-items: center;
			justify-content: center;

			--size: 3rem;
			width: var(--size);
			height: var(--size);
			min-width: var(--size);
			min-height: var(--size);
			max-width: var(--size);
			max-height: var(--size);

			& > img {
				width: var(--size);
				height: var(--size);
				min-width: var(--size);
				min-height: var(--size);
				max-width: var(--size);
				max-height: var(--size);
				object-fit: contain;
				display: flex;
			}
		}
	}
</style>
