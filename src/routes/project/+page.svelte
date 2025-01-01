<script lang="ts">
  import Favicon from '@/assets/favicon.ico';
  import AppPage from '@/components/AppPage.svelte';
  import { PROJECT_ROUTE } from '@/models/Route.model';
  import SectionProject from '@/pages/project/components/SectionProject.svelte';
  import { onMount } from 'svelte';
  import { navigate } from 'svelte-routing';

  onMount(() => {
    if (PROJECT_ROUTE.isDisabled) navigate('/');
  });
</script>

<svelte:head>
  <link rel="icon" href={Favicon} />
  <title>Rory!</title>
</svelte:head>

<AppPage>
  <div class="project-page">
    <SectionProject />
  </div>
</AppPage>

<style lang="scss">
  .project-page {
    width: 100%;
    gap: 1rem;
    padding: 1rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
</style>
