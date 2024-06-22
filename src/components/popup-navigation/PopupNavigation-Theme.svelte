<script lang="ts">
	import { DarkTheme, LightTheme, getTheme, onThemeChange, toggleTheme } from '@/data/Theme';
	import { onMount } from 'svelte';
	import DarkThemeIcon from '@/components/icon/DarkTheme.icon.svelte';
	import LightThemeIcon from '@/components/icon/LightTheme.icon.svelte';

	let themeKey: string = '';

	$: index = (() => {
		switch (themeKey) {
			case LightTheme.key:
			default:
				return 0;
			case DarkTheme.key:
				return 1;
		}
	})();

	function click() {
		themeKey = toggleTheme().key;
		onThemeChange();
	}

	onMount(() => {
		themeKey = getTheme().key;
		onThemeChange();
	});
</script>

<div class="popup-navigation-theme" style="--item-index: {index}">
	<button
		aria-label={LightTheme.title}
		data-selected={themeKey === LightTheme.key}
		on:click={click}
	>
		<LightThemeIcon size={20} />
	</button>

	<button aria-label={DarkTheme.title} data-selected={themeKey === DarkTheme.key} on:click={click}>
		<DarkThemeIcon size={18} />
	</button>
</div>

<style lang="scss">
	.popup-navigation-theme {
		--item-border-radius: 0.5rem;
		--item-size: 3rem;
		--item-index: 0;

		--items-gap: 0.5rem;

		position: relative;
		gap: var(--items-gap);

		display: flex;
		align-items: center;
		text-align: center;

		& > * {
			z-index: 1;
			width: var(--item-size);
			height: var(--item-size);
			border-radius: var(--item-border-radius);

			aspect-ratio: 1/1;

			display: grid;
			place-items: center;

			&[data-selected='false'] {
				--color-active: black;
			}
			&[data-selected='true'] {
				--color-active: white;
			}
		}

		&::after {
			content: '';
			position: absolute;
			left: calc(calc(var(--item-size) + var(--items-gap)) * var(--item-index));

			width: var(--item-size);
			height: var(--item-size);
			border-radius: var(--item-border-radius);

			background-color: black;
			transition: left 200ms cubic-bezier(0.075, 0.82, 0.165, 1);

			pointer-events: none;
			user-select: none;
		}
	}
</style>
