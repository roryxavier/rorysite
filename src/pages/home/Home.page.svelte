<script lang="ts">
  import { RORY_CHRIS_FURSONA } from '@/models/Fursona.model';
  import AppPage from '@/components/AppPage.svelte';
  import SocialLinkV2 from '@/pages/home/components/SocialLink-v2.svelte';
  import { loadRes } from '@/U';
  import LabelV2 from './components/Label-v2.svelte';
</script>

<AppPage>
  <div class="home-page">
    <div class="home-page-section home-page-section-top">
      {#await loadRes(import('@/assets/avatar.webp')) then src}
        <img {src} alt="Avatar" />
      {/await}

      <span class="home-page-welcome">Welcome</span>
      <span class="home-page-intro">
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

        <div class="home-page-labels">
          {#each RORY_CHRIS_FURSONA.labels as label}
            <LabelV2 {label} />
          {/each}
        </div>
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
    max-width: 122rem;
    transition: all 200ms ease;

    display: flex;
    flex-direction: column;

    background-image: linear-gradient(
      180deg,
      transparent 0%,
      transparent 50dvh,
      var(--background-color-a70) 100dvh
    );

    @media (min-width: 900px) {
      font-size: 1.2rem;
    }
    @media (min-width: 1100px) {
      font-size: 1.3rem;
    }

    b {
      color: var(--primary-color-dark);
    }

    .home-page-section {
      width: 100%;
      min-height: var(--app-page-min-height);
      padding: 2rem;
      transition: all 200ms ease;

      display: flex;
      flex-direction: column;

      @media (min-width: 900px) {
        padding: 2.5rem;
      }
      @media (min-width: 1100px) {
        padding: 4rem;
      }

      .home-page-furcon-next {
        margin-top: 4rem;
      }
    }

    .home-page-section-top {
      justify-content: flex-end;
      align-items: flex-start;

      & > img {
        --size: 9em;
        width: var(--size);
        height: var(--size);
        aspect-ratio: 1/1;
        border-radius: 50%;
        transition: all 400ms ease;

        @media (min-width: 900px) {
          --size: 11em;
        }
        @media (min-width: 1100px) {
          --size: 13em;
        }
      }

      .home-page-welcome {
        font-size: 4em;
        font-weight: bold;
      }
      .home-page-intro {
        font-size: 1.4em;
      }
    }
    .home-page-section-bottom {
      gap: 2rem;

      .home-page-description {
        display: flex;
        flex-direction: column;

        gap: 1em;
        padding: 2rem;
        border-radius: 1rem;
        backdrop-filter: blur(0.4rem);
        transition: all 200ms ease;
        background-color: var(--background-color-a70);
        background-color: var(--primary-color-light-a50);

        @media (min-width: 900px) {
          padding: 2.5rem;
        }

        .home-page-labels {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          align-items: flex-start;
          justify-content: flex-start;

          width: 100%;
          gap: 0.2em;
          margin-top: 2rem;
        }
      }
      .home-page-socials {
        width: 100%;
        gap: 0.5em;
        display: flex;
        flex-direction: column;
        align-items: stretch;

        @media (min-width: 450px) {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(11em, 1fr));
        }
        @media (min-width: 600px) {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(14em, 1fr));
        }
        @media (min-width: 900px) {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(16em, 1fr));
        }
      }
    }
  }
</style>
