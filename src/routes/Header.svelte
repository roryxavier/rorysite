<script>
	import Avatar from '@/assets/avatar.webp';
	import { RORY_CHRIS } from '@/data/Fursona';
	import Label from './Label.svelte';
</script>

<div class="card-header">
	<img src={Avatar} alt="Avatar" />

	<div class="card-content">
		<h1>Rory!</h1>
		<div class="card-labels">
			{#each RORY_CHRIS.labels as label}
				<Label {label} />
			{/each}
		</div>
	</div>
</div>

<style lang="scss">
	.card-header {
		display: flex;
		flex-direction: column;
		align-items: center;

		& > img {
			aspect-ratio: 1/1;
			border-radius: 50%;
			transition: all 400ms ease;
			--size: 9rem;
			width: var(--size);
		}

		.card-content {
			display: flex;
			flex-direction: column;
			align-items: center;
			text-align: inherit;
			gap: 1rem;

			& > h1 {
				font-weight: 700;
				color: var(--primary-color);
				line-height: 1;
				text-align: inherit;
				font-size: 2.5rem;
			}
			.card-labels {
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;
				align-items: center;
				justify-content: center;
				width: 50%;
				gap: 0.2em;
			}
		}

		@media (min-width: 550px) {
			flex-direction: row;
			align-items: flex-start;
			justify-content: flex-start;
			text-align: start;
			gap: 1rem;

			& > img {
				--size: 10rem;
			}

			.card-content {
				align-items: flex-start;
				& > h1 {
					font-size: 3rem;
				}
				.card-labels {
					width: 100%;
					justify-content: flex-start;
					gap: 0.3em;
				}
			}
		}
	}
</style>
