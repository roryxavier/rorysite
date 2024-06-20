<script lang="ts">
	import type { Route } from '@/data/Route';

	export let route: Route;
	export let selected: boolean;
</script>

<a class="actionbar-nav" href={route.path} data-selected={selected}>{route.title}</a>

<style scoped lang="scss">
	.actionbar-nav {
		font-weight: 600;
		padding: 0.6rem 1.2rem;
		border-radius: 0.3rem;
		border-radius: 2em;
		text-align: center;

		&[data-selected='true'] {
			background: white;
			color: black;
			cursor: default;
		}
	}
</style>
