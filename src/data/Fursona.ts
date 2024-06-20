export interface SocialLink {
	name: string;
	alt: string;
	img: string;
	link: string;
}

export interface Fursona {
	labels: string[];
	socialLinks: SocialLink[];
}

export const RORY_CHRIS: Fursona = {
	labels: ['He/Him', 'Wolf', 'Gay', 'Taken - 🦊', 'Programmer', 'Happy Go Lucky'],
	socialLinks: [
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
		},
		{
			name: '@roryxavier',
			alt: 'Bluesky',
			img: 'https://bsky.app/static/favicon-32x32.png',
			link: 'https://bsky.app/profile/roryxavier.bsky.social'
		},
		{
			name: '@rory_xavi',
			alt: 'Twitter',
			img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/150px-Logo_of_Twitter.svg.png',
			link: 'https://twitter.com/rory_xavi'
		},
		{
			name: '@roryxavier',
			alt: 'Github',
			img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/800px-GitHub_Invertocat_Logo.svg.png',
			link: 'https://github.com/roryxavier'
		},
		{
			name: '@roryxavier',
			alt: 'Discord',
			img: 'https://www.svgrepo.com/show/353655/discord-icon.svg',
			link: 'https://discordapp.com/users/525678985049538610'
		}
	]
};
