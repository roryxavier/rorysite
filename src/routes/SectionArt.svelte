<script>
	import CardCenterLayout from '@/component/CardCenterLayout.svelte';
	import PageButton from '@/component/PageButton.svelte';
</script>

<CardCenterLayout>
	<span>Art Section</span>

	<div class="arts">
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

	<div class="pager">
		<PageButton title="Project Created" href="/project" />
	</div>
</CardCenterLayout>

<style scoped lang="scss">
	.arts {
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
		}
	}
	.pager {
		display: flex;
		flex-direction: row;
		align-items: stretch;
		justify-content: flex-start;

		gap: 1em;
	}
</style>
