<script lang="ts">
  import AppPage from '@/components/AppPage.svelte';
  import SectionIntroduction from '@/pages/about/components/SectionIntroduction.svelte';
</script>

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
