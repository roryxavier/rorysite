<script lang="ts">
	export let title: string;
	export let href: string;
</script>

<a class="page-button" {href}>{title}</a>

<style scoped lang="scss">
	.page-button {
		color: #1e3a8a;
		padding: 1rem;
		border-radius: 0.7em;
		background: #dbeafe;

		width: 50%;

		&:nth-child(1) {
			text-align: start;
			margin-right: auto;
		}
		&:nth-child(2) {
			text-align: end;
			margin-left: auto;
		}
	}
</style>
