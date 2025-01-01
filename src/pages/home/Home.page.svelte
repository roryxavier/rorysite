<script lang="ts">
  import { RORY_CHRIS_FURSONA } from '@/models/Fursona.model';
  import AppPage from '@/components/AppPage.svelte';
  import Label from '@/pages/home/components/Label.svelte';
  import SocialLinkV2 from '@/pages/home/components/SocialLink-v2.svelte';
  import { loadRes } from '@/U';
</script>

<AppPage>
  <div class="home-page">
    <div class="home-page-section home-page-section-top">
      {#await loadRes(import('@/assets/avatar.webp')) then src}
        <img {src} alt="Avatar" />
      {/await}

      <span class="home-page-welcome">Welcome</span>
      <span>
        Hey! I'm <b>Rory Xavier</b>
      </span>

      <span class="home-page-furcon-next">Next FURCON: JMoF</span>
    </div>

    <div class="home-page-section home-page-section-bottom">
      <div class="home-page-description">
        <p>
          Hey there! Thanks for dropping by my site. My name's
          <b>Rory</b>
          and I'm a Blue Wolf currently hanging out in Singapore.
        </p>

        <p>
          If you're interested in keeping up with my shenanigans, you can catch me on Following
          Social Sites. Cheers!!
        </p>
      </div>

      <div class="home-page-labels">
        {#each RORY_CHRIS_FURSONA.labels as label}
          <Label {label} />
        {/each}
      </div>

      <div class="home-page-socials">
        {#each RORY_CHRIS_FURSONA.socialLinks as link}
          <SocialLinkV2 socialLink={link} />
        {/each}
      </div>
    </div>
  </div>
</AppPage>

<style lang="scss">
  .home-page {
    width: 100%;
    max-width: 50rem;
    gap: 4rem;

    display: flex;
    flex-direction: column;

    b {
      color: var(--primary-color-dark);
    }

    .home-page-section {
      width: 100%;
      min-height: var(--app-page-min-height);
      padding: 2rem;

      display: flex;
      flex-direction: column;

      .home-page-welcome {
        font-size: 4rem;
        font-weight: bold;
      }
      .home-page-furcon-next {
        margin-top: 2rem;
      }
    }

    .home-page-section-top {
      justify-content: flex-end;
      align-items: flex-start;

      & > img {
        aspect-ratio: 1/1;
        border-radius: 50%;
        transition: all 400ms ease;
        --size: 9rem;
        width: var(--size);
      }
    }
    .home-page-section-bottom {
      gap: 2rem;

      .home-page-description {
        gap: 1em;
        display: flex;
        flex-direction: column;
      }
      .home-page-labels {
        width: 100%;
        gap: 0.2em;

        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: flex-start;
        justify-content: flex-start;
      }
      .home-page-socials {
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
    }
  }
</style>
