<script lang="ts">
	import PopupNavigationTheme from './PopupNavigation-Theme.svelte';

	export let show: boolean;
</script>

<div class="popup-navigation" data-show={show}>
	<PopupNavigationTheme />
</div>

<style scoped lang="scss">
	.popup-navigation {
		--margin: 1rem;

		position: fixed;
		top: calc(var(--actionbar-height) + calc(var(--margin) * 0.5));
		right: var(--margin);

		max-width: calc(100% - var(--margin) - var(--margin));
		padding: 0.6rem;
		border-radius: 0.5rem;
		box-shadow: 0.1rem 0.2rem 1rem rgba(0, 0, 0, 0.5);

		background-color: white;

		display: flex;
		flex-direction: column;

		transition: 200ms ease;
		transition-property: transform, opacity;

		&[data-show='false'] {
			transform: translateX(35%) translateY(-150%) scale(0.1);
			opacity: 0;
		}
		&[data-show='true'] {
			opacity: 1;
		}
	}
</style>
