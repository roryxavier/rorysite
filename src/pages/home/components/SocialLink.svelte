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

<a class="social-link overflow-hidden rounded-xl transition" href={socialLink.link} target="_blank">
  {#await socialLink.img.getIcon() then src}
    <img
      {src}
      alt={socialLink.name}
      data-invert={socialLink.img.option?.invertColorOnTheme === themeKey}
    />
  {/await}

  <span>{socialLink.name}</span>
</a>

<style lang="scss">
  .social-link {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    text-align: start;

    line-height: 1.2;
    font-weight: 600;

    padding: 1rem;
    gap: 0.75rem;

    background-color: var(--primary-color-light);
    color: var(--primary-color-dark);

    &:hover,
    &:focus {
      background-color: var(--primary-color-lighter);
    }

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
</style>
