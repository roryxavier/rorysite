<script>
	import CardCenterLayout from '@/component/CardCenterLayout.svelte';
	import ImageRoryWolf from '@/resource/project/rorywolf.png';
	import ImageFoxyWolf from '@/resource/project/foxywolf.png';
	import ImageRefRoryWolf from '@/resource/project/refrorywolf.png';
	import PageButton from '@/component/PageButton.svelte';
</script>

<CardCenterLayout>
	<span>Project Created</span>

	<div>
		<img src={ImageRefRoryWolf} />

		<span>Rory Ref Site</span>
		<p>Rory Ref Site</p>

		<a href="https://ref.rorywolf.net/">https://ref.rorywolf.net/</a>
		<a href="https://github.com/roryxavier/roryrefsite">Github Repository</a>
	</div>

	<div>
		<img src={ImageFoxyWolf} />

		<span>Foxy Wolf Site</span>
		<p>Foxy Wolf Site</p>

		<a href="https://foxywolf.net/">https://foxywolf.net/</a>
		<a href="https://github.com/roryxavier/foxywolfsite">Github Repository</a>
	</div>

	<div>
		<img src={ImageRoryWolf} />

		<span>Rory Site</span>
		<p>Rory Site</p>

		<a href="https://rorywolf.net/">https://rorywolf.net/</a>
		<a href="https://github.com/roryxavier/rorysite">Github Repository</a>
	</div>

	<div class="pager">
		<PageButton title="About Me" href="/about" />
		<PageButton title="Art" href="/art" />
	</div>
</CardCenterLayout>

<style scoped lang="scss">
	div {
		width: 100%;
		display: flex;
		flex-direction: column;
		text-align: start;

		& > span {
			color: #1e3a8a;
			font-weight: 600;
		}
	}
	.pager {
		display: flex;
		flex-direction: row;
		align-items: stretch;
		justify-content: space-between;

		gap: 1em;
	}
</style>
