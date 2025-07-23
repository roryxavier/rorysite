<script lang="ts">
  import CardCenterLayout from '@/components/CardCenterLayout.svelte';
  import ImageRoryWolf from '@/assets/project/rorywolf.png';
  import ImageFoxyWolf from '@/assets/project/foxywolf.png';
  import ImageRefRoryWolf from '@/assets/project/refrorywolf.png';

  const projects = [
    {
      image: ImageRefRoryWolf,
      title: 'Rory Ref Site',
      link: 'https://ref.rorywolf.net/',
      githubLink: 'https://github.com/roryxavier/roryrefsite',
    },
    {
      image: ImageFoxyWolf,
      title: 'Foxy Wolf Site',
      link: 'https://foxywolf.net/',
      githubLink: 'https://github.com/roryxavier/foxywolfsite',
    },
    {
      image: ImageRoryWolf,
      title: 'Rory Site',
      link: 'https://rorywolf.net/',
      githubLink: 'https://github.com/roryxavier/rorysite',
    },
  ];
</script>

<CardCenterLayout>
  <div class="section-project">
    {#each projects as project}
      <div>
        <a class="section-project-title" href={project.link}>{project.title}</a>
        <a class="section-project-image" href={project.link}>
          <img src={project.image} alt={project.title} />
        </a>

        <div class="section-project-links">
          <a class="rounded overflow-hidden transition" href={project.link} target="_blank">
            Website
          </a>
          <a class="rounded overflow-hidden transition" href={project.githubLink} target="_blank">
            Github Repository
          </a>
        </div>
      </div>
    {/each}
  </div>
</CardCenterLayout>

<style lang="scss">
  .section-project {
    display: flex;
    flex-direction: column;
    align-items: stretch;

    gap: 2rem;

    & > div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.5rem;

      .section-project-image {
        & > img {
          border-radius: 0.8em;
        }
      }
      .section-project-title {
        font-size: 1.4rem;
        font-weight: 700;
        color: var(--primary-color);
        &:hover {
          text-decoration: underline;
        }
      }
      .section-project-links {
        width: 100%;
        gap: 0.5rem;

        display: flex;
        flex-direction: row;
        align-items: flex-start;

        & > * {
          font-size: 0.8rem;
          font-weight: 600;
          padding: 0.4rem 0.8rem;
          background-color: var(--primary-color-light);
          color: var(--primary-color);
          &:hover,
          &:focus {
            background-color: var(--primary-color-lighter);
          }
        }
      }
    }
  }
</style>
