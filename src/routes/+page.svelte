<script>
	import Avatar from '../resource/avatar.webp';
	import CardCenterLayout from '../component/CardCenterLayout.svelte';

	let arr = ['He/Him', 'Wolf', 'Gay', 'Taken - 🦊', 'Programmer', 'Happy Go Lucky'];
	let links = [
		{
			name: '@rory_xavi',
			alt: 'Twitter',
			img: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Twitter-logo.svg',
			link: 'https://twitter.com/rory_xavi'
		},
		{
			name: '@roryxavier',
			alt: 'Telegram',
			img: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg',
			link: 'https://t.me/roryxavier'
		},
		{
			name: 'Reference Website',
			alt: 'Reference Site',
			img: 'https://img.icons8.com/color/48/null/paint-palette-with-brush.png',
			link: 'https://ref.rorywolf.net'
		}
	];
</script>

<div class="text-center flex flex-col items-center pl-10 pr-10">
	<CardCenterLayout>
		<div class="flex flex-col space-y-1.5 place-items-stretch">
			<div class="pt-1.5" />
			<img src={Avatar} alt="Avatar" class="w-40 rounded-full items-end m-auto" />
			<p class="text-5xl font-bold text-blue-900">Rory!</p>
			<div class="pt-1.5" />
			<div class="grid gap-4 lg:grid-cols-3 grid-cols-2 grid-rows-3 gap-1.5">
				{#each arr as c}
					<div
						class="bg-gradient-to-br text-blue-900 from-blue-100 to-blue-300 text-sm px-3 py-0.5 rounded-full"
					>
						{c}
					</div>
				{/each}
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
			<div class="pb-2" />
			<div class="flex flex-col text-base">
				<div class="grid grid-cols-1 md:grid-cols-2 gap-4 ">
					{#each links as link}
						<a
							href={link.link}
							class="flex relative bg-blue-100 text-blue-900 items-center p-2 rounded-lg overflow-hidden"
						>
							<div class="absolute inset-y-0 left-0">
								<img alt={link.name} src={link.img} class="w-6 h-6 m-2" height="100" />
							</div>
							<span class="font-semibold pl-10">{link.name}</span></a
						>
					{/each}
				</div>
			</div>
			<div class="pb-2" />
		</div>
	</CardCenterLayout>
</div>
