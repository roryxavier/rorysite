<script lang="ts">
  import Favicon from '@/assets/favicon.ico';
  import AppPage from '@/components/AppPage.svelte';
  import { ABOUT_ROUTE } from '@/models/Route.model';
  import SectionIntroduction from '@/pages/about/components/SectionIntroduction.svelte';
  import { onMount } from 'svelte';
  import { navigate } from 'svelte-routing';

  onMount(() => {
    if (ABOUT_ROUTE.isDisabled) navigate('/');
  });
</script>

<svelte:head>
  <link rel="icon" href={Favicon} />
  <title>Rory!</title>
</svelte:head>

<AppPage>
  <div class="about-page">
    <SectionIntroduction />
  </div>
</AppPage>

<style lang="scss">
  .about-page {
    width: 100%;
    gap: 1rem;
    padding: 1rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
</style>
