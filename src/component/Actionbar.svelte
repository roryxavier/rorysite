<nav class="actionbar">
	<a href="/">Home</a>
	<a href="/about">About Me</a>
	<a href="/project">Project Created</a>
	<a href="/art">Art</a>
</nav>

<style scoped lang="scss">
	.actionbar {
		width: 100vw;
		max-width: 100%;

		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 1rem;

		& > * {
			padding: 1rem;
		}

		width: 100%;
		height: 3.5rem;
		background: black;
		color: white;

		position: sticky;
		top: 0;
		z-index: 2;

		box-shadow: 0 0 2rem rgba(0, 0, 0, 0.2);
	}
</style>
