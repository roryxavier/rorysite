<script lang="ts">
  import { RORY_CHRIS_FURSONA, USE_NEXT_FURCON } from '@/models/Fursona.model';
  import Label from './Label.svelte';
  import { loadRes } from '@/U';
</script>

<div class="card-header">
  {#await loadRes(import('@/assets/avatar.webp')) then src}
    <img {src} alt="Avatar" />
  {/await}

  <div class="card-content">
    <h1>Rory!</h1>

    <div class="card-labels">
      {#each RORY_CHRIS_FURSONA.labels as label}
        <Label {label} />
      {/each}
    </div>

    {#if USE_NEXT_FURCON}
      <span class="card-next" title="Japan Meeting of Furries">
        Next FURCON: <span title="Japan Meeting of Furries">JMoF</span>
      </span>
    {/if}
  </div>
</div>

<style lang="scss">
  .card-header {
    display: flex;
    flex-direction: column;
    align-items: center;

    & > img {
      aspect-ratio: 1/1;
      border-radius: 50%;
      transition: all 400ms ease;
      --size: 9rem;
      width: var(--size);
    }

    .card-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: inherit;
      gap: 1rem;

      & > h1 {
        font-weight: 700;
        color: var(--primary-color);
        line-height: 1;
        text-align: inherit;
        font-size: 2.5rem;
      }
      .card-labels {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        width: 50%;
        gap: 0.2em;
      }
      .card-next {
        font-size: 0.8rem;
      }
    }

    @media (min-width: 550px) {
      flex-direction: row;
      align-items: flex-start;
      justify-content: flex-start;
      text-align: start;
      gap: 1rem;

      & > img {
        --size: 10rem;
      }

      .card-content {
        align-items: flex-start;
        & > h1 {
          font-size: 3rem;
        }
        .card-labels {
          width: 100%;
          justify-content: flex-start;
          gap: 0.3em;
        }
      }
    }
  }
</style>
