<script>
  import Favicon from '@/assets/favicon.ico';
  import { ABOUT_ROUTE } from '@/models/Route.model';
  import SectionIntroduction from '@/routes/about/SectionIntroduction.svelte';
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

<div class="about-page">
  <SectionIntroduction />
</div>

<style lang="scss">
  .about-page {
    width: 100%;
    gap: 1rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
</style>
