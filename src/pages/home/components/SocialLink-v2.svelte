<script lang="ts">
  import type { SocialLinkModel } from '@/models/SocialLink.model';
  import { getTheme } from '@/models/Theme.model';
  import { onMount } from 'svelte';

  const { socialLink }: { socialLink: SocialLinkModel } = $props();

  let isMounted = $state(false);

  const themeKey = $derived.by(() => {
    if (!isMounted) return 'dark';

    return getTheme().key;
  });

  onMount(() => {
    isMounted = true;
  });
</script>

<a class="social-link-v2 transition" href={socialLink.href} target="_blank">
  {#if socialLink.background}
    {#await socialLink.background.getSrc() then src}
      <img {src} alt={socialLink.alt} />
    {/await}
  {/if}

  <div>
    <div class="social-link-v2-body">
      {#await socialLink.icon.getSrc() then src}
        <img
          {src}
          alt={socialLink.name}
          data-invert={socialLink.icon.option?.invertColorOnTheme === themeKey}
        />
      {/await}
      <span>{socialLink.name}</span>
    </div>
  </div>
</a>

<style lang="scss">
  .social-link-v2 {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    position: relative;
    text-align: start;
    aspect-ratio: 3/2;
    overflow: hidden;
    border-radius: 0.75rem;

    line-height: 1.2;
    font-weight: 600;

    background-color: var(--primary-color-light);
    color: var(--primary-color-dark);

    & > img {
      position: absolute;
      width: 100%;
      height: 100%;

      object-fit: cover;
    }
    & > div {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;

      z-index: 1;
      height: 100%;
      background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8));
      transition: all 200ms ease;

      .social-link-v2-body {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        gap: 0.5rem;
        padding: 1rem;
        color: white;

        & > img {
          aspect-ratio: 1/1;
          width: 1.5em;
          height: 1.5em;
          display: flex;
          object-fit: contain;

          &[data-invert='true'] {
            filter: invert(100%);
          }
        }

        & > span {
          width: 100%;
          flex-grow: 1;
        }
      }

      &:hover,
      &:focus {
        background-color: rgba(0, 0, 0, 0.4);
      }
    }

    &:hover,
    &:focus {
      transform: scale(1.02);
      z-index: 1;
    }

    @media (max-width: 449px) {
      aspect-ratio: 6/2;
    }
  }
</style>
