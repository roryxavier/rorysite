<script lang="ts">
  import Favicon from '@/assets/favicon.ico';
  import HomePage from '@/pages/home/Home.page.svelte';
</script>

<svelte:head>
  <link rel="icon" href={Favicon} />
  <title>Rory!</title>
</svelte:head>

<HomePage />
