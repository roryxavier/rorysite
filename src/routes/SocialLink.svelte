<script lang="ts">
  import type { SocialLinkModel } from "@/models/SocialLink.model";

  const { socialLink }: { socialLink: SocialLinkModel } = $props();
</script>

<a class="social-link overflow-hidden rounded-xl transition" href={socialLink.link} target="_blank">

  {#await import(`/src/assets/logo/${socialLink.img}.svg`) then { default: src }}
    <img {src} alt="{socialLink.name}" />
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
    }

    & > span {
      width: 100%;
      flex-grow: 1;
    }
  }
</style>
