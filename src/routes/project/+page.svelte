<script lang="ts">
  import Favicon from '@/assets/favicon.ico';
  import { PROJECT_ROUTE } from '@/models/Route.model';
  import { onMount } from 'svelte';
  import { navigate } from 'svelte-routing';
  import ProjectPage from '@/pages/project/Project.page.svelte';

  onMount(() => {
    if (PROJECT_ROUTE.isDisabled) navigate('/');
  });
</script>

<svelte:head>
  <link rel="icon" href={Favicon} />
  <title>Rory!</title>
</svelte:head>

<ProjectPage />
