<script lang="ts">
  import CardCenterLayout from '@/components/CardCenterLayout.svelte';
  import { RORY_CHRIS_FURSONA } from '@/models/Fursona.model';
  import SocialLink from './components/SocialLink.svelte';
  import Header from './components/Header.svelte';
</script>

<div class="home-page">
  <CardCenterLayout>
    <Header />

    <div class="flex flex-col m-auto text-justify text-base space-y-4">
      <p>
        Hey there! Thanks for dropping by my site. My name's
        <b>Rory</b>
        and I'm a Blue Wolf currently hanging out in Singapore.
      </p>
      <p>
        If you're interested in keeping up with my shenanigans, you can catch me on Following Social
        Sites. Cheers!!
      </p>
    </div>

    <div class="socials">
      {#each RORY_CHRIS_FURSONA.socialLinks as link}
        <SocialLink socialLink={link} />
      {/each}
    </div>
  </CardCenterLayout>
</div>

<style lang="scss">
  .home-page {
    gap: 1rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    b {
      color: var(--primary-color-dark);
    }
  }

  .socials {
    width: 100%;
    gap: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: stretch;

    @media (min-width: 450px) {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(12.5rem, 1fr));
    }
  }
</style>
