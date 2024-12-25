<script lang="ts">
	let { children } = $props();
</script>

<div class="card-center-layout">
	{@render children()}
</div>

<style lang="scss">
	.card-center-layout {
		display: flex;
		flex-direction: column;
		align-items: stretch;
		justify-content: center;

		width: 100%;
		max-width: 50rem;
		row-gap: 1.5rem;
		padding: 1.5rem;
		font-size: 1rem;

		background: var(--background-color);
		border-radius: 1rem;
		transition: all 400ms ease;

		filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));

		@media (min-width: 450px) {
			padding: 2rem;
		}
		@media (min-width: 550px) {
			border-radius: 2rem;
		}
		@media (min-width: 650px) {
			padding: 3rem;
		}
	}
</style>
