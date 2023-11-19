<script>
	import CardCenterLayout from '@/component/CardCenterLayout.svelte';
	import PageButton from '@/component/PageButton.svelte';
</script>

<CardCenterLayout>
	<span>Art Section</span>

	<div class="arts">
		<img src="https://res.jfrx.cf/rory/1.jpg" />
		<img src="https://res.jfrx.cf/rory/2.jpg" />
		<img src="https://res.jfrx.cf/rory/3.jpg" />
		<img src="https://res.jfrx.cf/rory/4.jpg" />
		<img src="https://res.jfrx.cf/rory/5.jpg" />
		<img src="https://res.jfrx.cf/rory/6.jpg" />
		<img src="https://res.jfrx.cf/rory/7.jpg" />
		<img src="https://res.jfrx.cf/rory/8.jpg" />
		<img src="https://res.jfrx.cf/rory/9.jpg" />
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

		& > img {
			height: 14rem;
			min-width: max-content;
			object-fit: contain;
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
