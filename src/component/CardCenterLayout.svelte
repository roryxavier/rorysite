<div class="card-center-layout">
	<slot />
</div>

<style scoped lang="scss">
	.card-center-layout {
		width: 100%;
		max-width: 35rem;

		background: white;
		border-radius: 1rem;
		transition: all 400ms ease;

		filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));

		@media (min-width: 550px) {
			border-radius: 2rem;
		}
	}
</style>
