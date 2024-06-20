<script lang="ts">
	import Logo from '@/assets/avatar.webp';

	export let toggleExpand: () => void;
</script>

<button class="actionbar-logo" on:click={toggleExpand}>
	<img src={Logo} alt="Logo" />
</button>

<style scoped lang="scss">
	.actionbar-logo {
		border-radius: 50%;
		overflow: hidden;
		z-index: 2;

		display: flex;
		align-items: center;
		justify-content: center;

		--size: 2.5rem;
		width: var(--size);
		height: var(--size);
		min-width: var(--size);
		min-height: var(--size);
		max-width: var(--size);
		max-height: var(--size);

		& > img {
			width: var(--size);
			height: var(--size);
			min-width: var(--size);
			min-height: var(--size);
			max-width: var(--size);
			max-height: var(--size);
			object-fit: contain;
			display: flex;
		}
	}
</style>
