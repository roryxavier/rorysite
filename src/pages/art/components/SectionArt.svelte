<script lang="ts">
  import CardCenterLayout from '@/components/CardCenterLayout.svelte';
</script>

<CardCenterLayout>
  <div class="section-art">
    <img src="https://res.jfrx.cf/rory/1.jpg?width={250}" alt="image1" />
    <img src="https://res.jfrx.cf/rory/2.jpg?width={250}" alt="image2" />
    <img src="https://res.jfrx.cf/rory/3.jpg?width={250}" alt="image3" />
    <img src="https://res.jfrx.cf/rory/4.jpg?width={250}" alt="image4" />
    <img src="https://res.jfrx.cf/rory/5.jpg?width={250}" alt="image5" />
    <img src="https://res.jfrx.cf/rory/6.jpg?width={250}" alt="image6" />
    <img src="https://res.jfrx.cf/rory/7.jpg?width={250}" alt="image7" />
    <img src="https://res.jfrx.cf/rory/8.jpg?width={250}" alt="image8" />
    <img src="https://res.jfrx.cf/rory/9.jpg?width={250}" alt="image9" />
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
