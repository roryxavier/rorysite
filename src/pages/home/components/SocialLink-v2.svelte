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

<a class="social-link-v2 transition" href={socialLink.link} target="_blank">
  <div class="social-link-v2-body">
    {#await socialLink.img.getIcon() then src}
      <img
        {src}
        alt={socialLink.name}
        data-invert={socialLink.img.option?.invertColorOnTheme === themeKey}
      />
    {/await}
    <span>{socialLink.name}</span>
  </div>
</a>

<style lang="scss">
  .social-link-v2 {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    text-align: start;
    aspect-ratio: 3/2;
    overflow: hidden;
    border-radius: 0.75rem;

    line-height: 1.2;
    font-weight: 600;

    background-color: var(--primary-color-light);
    color: var(--primary-color-dark);

    .social-link-v2-body {
      gap: 0.5rem;
      padding: 1rem;

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

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
      background-color: var(--primary-color-lighter);
    }
  }
</style>
