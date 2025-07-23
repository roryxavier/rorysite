<script>
  import CardCenterLayout from '@/components/CardCenterLayout.svelte';
</script>

<CardCenterLayout>
  <div class="section-art">
    <img src="https://res.jfrx.cf/rory/1.jpg?width={250}" />
    <img src="https://res.jfrx.cf/rory/2.jpg?width={250}" />
    <img src="https://res.jfrx.cf/rory/3.jpg?width={250}" />
    <img src="https://res.jfrx.cf/rory/4.jpg?width={250}" />
    <img src="https://res.jfrx.cf/rory/5.jpg?width={250}" />
    <img src="https://res.jfrx.cf/rory/6.jpg?width={250}" />
    <img src="https://res.jfrx.cf/rory/7.jpg?width={250}" />
    <img src="https://res.jfrx.cf/rory/8.jpg?width={250}" />
    <img src="https://res.jfrx.cf/rory/9.jpg?width={250}" />
  </div>
</CardCenterLayout>

<style lang="scss">
  .section-art {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    gap: 0.4rem;

    & > img {
      flex-grow: 1;

      height: 14rem;
      min-width: max-content;
      object-fit: cover;
      border-radius: 0.5rem;
      border: 1px solid rgba(0, 0, 0, 0.05);
    }
  }
</style>
