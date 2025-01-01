<script lang="ts">
  import AppPage from '@/components/AppPage.svelte';
  import SectionProject from '@/pages/project/components/SectionProject.svelte';
</script>

<AppPage>
  <div class="project-page">
    <SectionProject />
  </div>
</AppPage>

<style lang="scss">
  .project-page {
    width: 100%;
    gap: 1rem;
    padding: 1rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
</style>
