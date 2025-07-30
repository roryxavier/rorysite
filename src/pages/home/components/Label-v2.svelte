<script lang="ts">
  const { label }: { label: string } = $props();
</script>

<span class="label-v2">{label}</span>

<style lang="scss">
  .label-v2 {
    min-width: max-content;
    background: var(--primary-color);
    color: white;

    font-size: 0.8rem;
    padding: 0.4em 0.8em;
    line-height: 1;

    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 2em;
  }
</style>
