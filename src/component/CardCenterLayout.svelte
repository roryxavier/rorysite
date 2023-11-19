<div class="card-center-layout">
	<slot />
</div>

<style scoped lang="scss">
	.card-center-layout {
		display: flex;
		flex-direction: column;
		align-items: stretch;
		justify-content: center;

		width: 100%;
		max-width: 35rem;
		row-gap: 1.5rem;

		background: white;
		border-radius: 1rem;
		transition: all 400ms ease;

		filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));

		@media (min-width: 550px) {
			border-radius: 2rem;
		}

		font-size: 1rem;

		transition: all 400ms ease;

		padding: 1.5rem;
		@media (min-width: 450px) {
			padding: 2rem;
		}
		@media (min-width: 650px) {
			padding: 3rem;
		}
	}
</style>
