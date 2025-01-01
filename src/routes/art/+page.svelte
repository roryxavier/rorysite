<script lang="ts">
  import Favicon from '@/assets/favicon.ico';
  import AppPage from '@/components/AppPage.svelte';
  import { ART_ROUTE } from '@/models/Route.model';
  import SectionArt from '@/pages/art/components/SectionArt.svelte';
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

<AppPage>
  <div class="art-page">
    <SectionArt />
  </div>
</AppPage>

<style lang="scss">
  .art-page {
    width: 100%;
    gap: 1rem;
    padding: 1rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
</style>
