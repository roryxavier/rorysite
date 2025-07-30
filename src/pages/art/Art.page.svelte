<script lang="ts">
  import AppPage from '@/components/AppPage.svelte';
  import SectionArt from '@/pages/art/components/SectionArt.svelte';
</script>

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
