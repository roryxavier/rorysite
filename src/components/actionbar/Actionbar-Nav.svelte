<script lang="ts">
	import type { Route } from '@/data/Route';

	export let route: Route;
	export let selected: boolean;
</script>

<a class="actionbar-nav" href={route.path} data-selected={selected}>{route.title}</a>

<style lang="scss">
	.actionbar-nav {
		font-weight: 700;
		padding: 0.6rem 1.2rem;
		border-radius: 2em;
		text-align: center;
		border: 1px solid transparent;

		&[data-selected='true'] {
			border: 1px solid var(--primary-color-light);
			background-color: var(--primary-color-lighter);
			color: var(--primary-color-darker);
			cursor: default;
		}
	}
</style>
