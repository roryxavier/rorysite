<script lang="ts">
	import { DarkTheme, LightTheme, type Theme } from '@/data/Theme';
	import DarkThemeIcon from '@/components/icon/DarkTheme.icon.svelte';
	import LightThemeIcon from '@/components/icon/LightTheme.icon.svelte';

	export let themeKey: string;
	export let clickTheme: (theme: Theme) => void;

	$: index = (() => {
		switch (themeKey) {
			case LightTheme.key:
			default:
				return 0;
			case DarkTheme.key:
				return 1;
		}
	})();
</script>

<div class="popup-navigation-theme" style="--item-index: {index}">
	<button
		aria-label={LightTheme.title}
		data-selected={themeKey === LightTheme.key}
		on:click={() => clickTheme(LightTheme)}
	>
		<LightThemeIcon size={20} />
	</button>

	<button
		aria-label={DarkTheme.title}
		data-selected={themeKey === DarkTheme.key}
		on:click={() => clickTheme(DarkTheme)}
	>
		<DarkThemeIcon size={18} />
	</button>
</div>

<style lang="scss">
	.popup-navigation-theme {
		--items-count: 2;
		--items-gap: 0.5rem;
		--items-total-gap-width: calc(var(--items-gap) * calc(var(--items-count) - 1));

		--item-border-radius: 0.5rem;
		--item-width: calc(calc(100% - var(--items-total-gap-width)) / var(--items-count));
		--item-height: 3rem;
		--item-index: 0;

		position: relative;
		gap: var(--items-gap);

		display: flex;
		align-items: center;
		text-align: center;

		& > * {
			z-index: 1;
			width: var(--item-width);
			height: var(--item-height);
			border-radius: var(--item-border-radius);

			aspect-ratio: 1/1;

			display: grid;
			place-items: center;

			&[data-selected='false'] {
				--color-active: var(--primary-color-dark);
				--color-active: var(--primary-color-darker);
			}
			&[data-selected='true'] {
				--color-active: white;
			}
		}

		&::after {
			content: '';
			position: absolute;
			left: calc(calc(var(--item-width) + var(--items-gap)) * var(--item-index));

			width: var(--item-width);
			height: var(--item-height);
			border-radius: var(--item-border-radius);

			background-color: var(--primary-color-dark);
			transition: left 200ms cubic-bezier(0.075, 0.82, 0.165, 1);

			pointer-events: none;
			user-select: none;
		}
	}
</style>
