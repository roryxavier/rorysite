<script lang="ts">
  const { label }: { label: string } = $props();
</script>

<span class="label">{label}</span>

<style lang="scss">
  .label {
    min-width: max-content;
    background: var(--primary-color);
    color: white;

    font-size: 0.6rem;
    padding: 0.4em 0.6em;
    line-height: 1;

    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 2em;

    @media (min-width: 550px) {
      font-size: 0.7rem;
    }
  }
</style>
