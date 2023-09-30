<script>
	import Avatar from '../resource/avatar.webp';
	import CardCenterLayout from '../component/CardCenterLayout.svelte';
	import GlobalVars from '../vars/GlobalVars';
	import Favicon from '../resource/favicon.ico';
</script>

<svelte:head>
	<link rel="icon" href={Favicon} />
	<title>Rory!</title>
</svelte:head>

<div class="text-center flex flex-col items-center">
	<CardCenterLayout>
		<div class="card-body">
			<div class="card-header">
				<img src={Avatar} alt="Avatar" />
				<div class="card-content">
					<h1>Rory!</h1>
					<div class="card-labels">
						{#each GlobalVars.LABELS as label}
							<div class="label">{label}</div>
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
					If you're interested in keeping up with my shenanigans, you can catch me on Following
					Social Sites. Cheers!!
				</p>
			</div>

			<div class="flex flex-col text-base mt-6">
				<div class="socials">
					{#each GlobalVars.SOCIAL_LINKS as link}
						<a
							href={link.link}
							target="_blank"
							class="p-4 gap-3 bg-blue-100 focus:bg-blue-200 hover:bg-blue-200 text-blue-900 rounded-xl overflow-hidden transition"
						>
							<img alt={link.name} src={link.img} />
							<span>{link.name}</span></a
						>
					{/each}
				</div>
			</div>
		</div>
	</CardCenterLayout>
</div>

<style scoped lang="scss">
	.socials {
		gap: 0.5rem;
		display: flex;
		flex-direction: column;

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

			& > img {
				aspect-ratio: 1/1;
				width: 1.5em;
				height: 1.5em;
				display: flex;
				object-fit: contain;
			}
		}
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
			height: var(--size);
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
					padding: 0.4em 0.8em;
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
	.card-body {
		display: flex;
		flex-direction: column;
		align-items: stretch;
		justify-content: center;

		transition: all 400ms ease;

		padding: 1.5rem;
		row-gap: 1.5rem;

		@media (min-width: 450px) {
			padding: 2rem;
		}
		@media (min-width: 650px) {
			padding: 3rem;
		}
	}
</style>
