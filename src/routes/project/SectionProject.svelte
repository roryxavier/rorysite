<script>
	import CardCenterLayout from '@/component/CardCenterLayout.svelte';
	import ImageRoryWolf from '@/resource/project/rorywolf.png';
	import ImageFoxyWolf from '@/resource/project/foxywolf.png';
	import ImageRefRoryWolf from '@/resource/project/refrorywolf.png';
	import PageButton from '@/component/PageButton.svelte';

	const projects = [
		{
			image: ImageRefRoryWolf,
			title: 'Rory Ref Site',
			link: 'https://ref.rorywolf.net/',
			githubLink: 'https://github.com/roryxavier/roryrefsite'
		},
		{
			image: ImageFoxyWolf,
			title: 'Foxy Wolf Site',
			link: 'https://foxywolf.net/',
			githubLink: 'https://github.com/roryxavier/foxywolfsite'
		},
		{
			image: ImageRoryWolf,
			title: 'Rory Site',
			link: 'https://rorywolf.net/',
			githubLink: 'https://github.com/roryxavier/rorysite'
		}
	];
</script>

<CardCenterLayout>
	<div class="projects">
		{#each projects as project}
			<div class="project">
				<a class="project-title" href={project.link}>{project.title}</a>
				<a class="project-image" href={project.link}>
					<img src={project.image} alt={project.title} />
				</a>

				<div class="project-links">
					<a
						class="project-link bg-blue-100 focus:bg-blue-200 hover:bg-blue-200 text-blue-900 rounded-xl overflow-hidden transition"
						href={project.link}
						target="_blank">Website</a
					>
					<a
						class="project-link bg-blue-100 focus:bg-blue-200 hover:bg-blue-200 text-blue-900 rounded-xl overflow-hidden transition"
						href={project.githubLink}
						target="_blank">Github Repository</a
					>
				</div>
			</div>
		{/each}
	</div>
</CardCenterLayout>

<style scoped lang="scss">
	.projects {
		display: flex;
		flex-direction: column;
		align-items: stretch;

		gap: 2rem;
	}

	.project {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 0.5rem;

		.project-image {
			& > img {
				border-radius: 0.8em;
			}
		}
		.project-title {
			font-size: 1.4rem;
			font-weight: 600;
			color: #1e3a8a;
			&:hover {
				text-decoration: underline;
			}
		}
		.project-links {
			width: 100%;
			gap: 0.5rem;

			display: flex;
			flex-direction: row;
			align-items: flex-start;

			.project-link {
				padding: 0.8rem 1rem;
			}
		}
	}
</style>
