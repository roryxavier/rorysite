<script>
	import Avatar from '../resource/avatar.webp';
	import CardCenterLayout from '../component/CardCenterLayout.svelte';
	import GlobalVars from '../vars/GlobalVars';
	import Favicon from '../resource/favicon.ico';
</script>

<svelte:head>
	<link rel="icon" href={Favicon} />
	<title>Rory!</title>
</svelte:head>

<div class="text-center flex flex-col items-center">
	<CardCenterLayout>
		<div class="flex flex-col space-y-6 place-items-stretch p-5">
			<div class="flex flex-col items-center">
				<img src={Avatar} alt="Avatar" class="w-40 rounded-full" />
				<h1 class="mb-4 text-5xl font-bold text-blue-900">Rory!</h1>

				<div
					class="w-full grid gap-1.5"
					style="grid-template-columns: repeat(auto-fill, minmax(8rem, 1fr));"
				>
					{#each GlobalVars.LABELS as label}
						<div
							class="flex items-center justify-center bg-gradient-to-br text-blue-900 from-blue-100 to-blue-300 text-sm px-2 py-0.5 leading-1 rounded-full"
						>
							{label}
						</div>
					{/each}
				</div>
			</div>

			<div class="flex flex-col m-auto text-justify text-base space-y-4">
				<p>
					Hey there! Thanks for dropping by my site. My name's <span class="text-blue-900 font-bold"
						>Rory</span
					> and I'm a Blue Wolf currently hanging out in Singapore.
				</p>
				<p>
					If you're interested in keeping up with my shenanigans, you can catch me on Following
					Social Sites. Cheers!!
				</p>
			</div>

			<div class="flex flex-col text-base">
				<div class="grid grid-cols-1 md:grid-cols-2 gap-2">
					{#each GlobalVars.SOCIAL_LINKS as link}
						<a
							href={link.link}
							target="_blank"
							class="p-4 gap-3 flex flex-row items-center justify-start bg-blue-100 focus:bg-blue-200 hover:bg-blue-200 text-blue-900 rounded-xl overflow-hidden transition"
						>
							<img alt={link.name} src={link.img} class="w-6 h-6" height="100" />
							<span class="font-semibold">{link.name}</span></a
						>
					{/each}
				</div>
			</div>
		</div>
	</CardCenterLayout>
</div>
