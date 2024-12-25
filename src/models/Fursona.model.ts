import type { SocialLinkModel } from './SocialLink.model';

export type FursonaModel = Readonly<{
  labels: string[];
  socialLinks: SocialLinkModel[];
}>;

export const RORY_CHRIS_FURSONA: FursonaModel = {
  labels: ['He/Him', 'Wolf', 'Gay', 'Taken - 🦊', 'Programmer', 'Happy Go Lucky'],
  socialLinks: [
    {
      name: '@roryxavier',
      alt: 'Telegram',
      img: 'telegram',
      link: 'https://t.me/roryxavier',
    },
    {
      name: 'Reference Website',
      alt: 'Reference Site',
      img: 'gallery-white',
      link: 'https://ref.rorywolf.net',
    },
    {
      name: '@roryxavier',
      alt: 'Bluesky',
      img: 'bluesky',
      link: 'https://bsky.app/profile/roryxavier.bsky.social',
    },
    {
      name: '@rory_xavi',
      alt: 'Twitter',
      img: 'twitter',
      link: 'https://twitter.com/rory_xavi',
    },
    {
      name: '@roryxavier',
      alt: 'Github',
      img: 'github',
      link: 'https://github.com/roryxavier',
    },
    {
      name: '@roryxavier',
      alt: 'Discord',
      img: 'discord',
      link: 'https://discordapp.com/users/525678985049538610',
    },
    {
      name: 'Sticker Link',
      alt: 'sticker link to telegram',
      img: 'link',
      link: 'https://t.me/addstickers/RoryChris',
    },
  ],
};
