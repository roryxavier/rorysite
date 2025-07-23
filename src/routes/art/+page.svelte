<script>
  import Favicon from '@/assets/favicon.ico';
  import { ART_ROUTE } from '@/models/Route.model';
  import SectionArt from '@/routes/art/SectionArt.svelte';
  import { onMount } from 'svelte';
  import { navigate } from 'svelte-routing';

  onMount(() => {
    if (ART_ROUTE.isDisabled) navigate('/');
  });
</script>

<svelte:head>
  <link rel="icon" href={Favicon} />
  <title>Rory!</title>
</svelte:head>

<div class="art-page">
  <SectionArt />
</div>

<style lang="scss">
  .art-page {
    width: 100%;
    gap: 1rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
</style>
