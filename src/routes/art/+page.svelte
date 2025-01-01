<script lang="ts">
  import Favicon from '@/assets/favicon.ico';
  import { ART_ROUTE } from '@/models/Route.model';
  import { onMount } from 'svelte';
  import { navigate } from 'svelte-routing';
  import ArtPage from '@/pages/art/Art.page.svelte';

  onMount(() => {
    if (ART_ROUTE.isDisabled) navigate('/');
  });
</script>

<svelte:head>
  <link rel="icon" href={Favicon} />
  <title>Rory!</title>
</svelte:head>

<ArtPage />
