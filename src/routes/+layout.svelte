<script>
	import '../app.css';
	import RootLayout from '@/component/RootLayout.svelte';
	import OgImage from '@/resource/og-image.png';
</script>

<svelte:head>
	<meta name="twitter:title" content="Rory Xavier" />
	<meta name="twitter:image" content={OgImage} />
	<meta
		name="twitter:description"
		content="Hey there! My name's Rory and I'm a Blue Wolf currently hanging out in Singapore."
	/>

	<meta name="title" property="og:title" content="Rory Xavier" />
	<meta name="type" property="og:type" content="website" />
	<meta name="image" property="og:image" content={OgImage} />
	<meta name="url" property="og:url" content="https://rorywolf.net" />
	<meta
		name="description"
		property="og:description"
		content="Hey there! My name's Rory and I'm a Blue Wolf currently hanging out in Singapore."
	/>
</svelte:head>

<body>
	<RootLayout>
		<slot />
	</RootLayout>
</body>
