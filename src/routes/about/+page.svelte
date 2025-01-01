<script lang="ts">
  import Favicon from '@/assets/favicon.ico';
  import { ABOUT_ROUTE } from '@/models/Route.model';
  import { onMount } from 'svelte';
  import { navigate } from 'svelte-routing';
  import AboutPage from '@/pages/about/About.page.svelte';

  onMount(() => {
    if (ABOUT_ROUTE.isDisabled) navigate('/');
  });
</script>

<svelte:head>
  <link rel="icon" href={Favicon} />
  <title>Rory!</title>
</svelte:head>

<AboutPage />
