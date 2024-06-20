<script>
	import Favicon from '@/assets/favicon.ico';
	import Avatar from '@/assets/avatar.webp';
	import CardCenterLayout from '@/components/CardCenterLayout.svelte';
	import { RORY_CHRIS } from '@/data/Fursona';
</script>

<svelte:head>
	<link rel="icon" href={Favicon} />
	<title>Rory!</title>
</svelte:head>

<div class="home-page">
	<CardCenterLayout>
		<div class="card-header">
			<img src={Avatar} alt="Avatar" />
			<div class="card-content">
				<h1>Rory!</h1>
				<div class="card-labels">
					{#each RORY_CHRIS.labels as label}
						<span class="label">{label}</span>
					{/each}
				</div>
			</div>
		</div>

		<div class="flex flex-col m-auto text-justify text-base space-y-4">
			<p>
				Hey there! Thanks for dropping by my site. My name's
				<span class="text-blue-900 font-bold">Rory</span>
				and I'm a Blue Wolf currently hanging out in Singapore.
			</p>
			<p>
				If you're interested in keeping up with my shenanigans, you can catch me on Following Social
				Sites. Cheers!!
			</p>
		</div>

		<div class="socials">
			{#each RORY_CHRIS.socialLinks as link}
				<a
					href={link.link}
					target="_blank"
					class="bg-blue-100 focus:bg-blue-200 hover:bg-blue-200 text-blue-900 rounded-xl overflow-hidden transition"
				>
					<img alt={link.name} src={link.img} />
					<span>{link.name}</span>
				</a>
			{/each}
		</div>
	</CardCenterLayout>
</div>

<style scoped lang="scss">
	.home-page {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;

		gap: 1rem;
	}

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
				color: rgb(30 58 138);
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

				.label {
					min-width: max-content;
					background: #1e3a8a;
					color: rgba(255, 255, 255, 0.9);
					font-size: 0.6em;
					padding: 0.4em 0.6em;
					line-height: 1;

					display: flex;
					align-items: center;
					justify-content: center;
					border-radius: 2em;
				}
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

					.label {
						font-size: 0.7rem;
					}
				}
			}
		}
	}
	.socials {
		width: 100%;
		gap: 0.5rem;
		display: flex;
		flex-direction: column;
		align-items: stretch;

		@media (min-width: 450px) {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(12.5rem, 1fr));
		}

		& > * {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: flex-start;
			text-align: start;

			line-height: 1.2;
			font-weight: 600;

			padding: 1rem;
			gap: 0.75rem;

			& > img {
				aspect-ratio: 1/1;
				width: 1.5em;
				height: 1.5em;
				display: flex;
				object-fit: contain;
			}
			& > span {
				width: 100%;
				flex-grow: 1;
			}
		}
	}
</style>
