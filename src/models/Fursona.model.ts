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
      img: () => import('~icon/telegram-color.svg'),
      link: 'https://t.me/roryxavier',
    },
    {
      name: 'Reference Website',
      alt: 'Reference Site',
      img: () => import('~icon/paint-palette-with-brush.png'),
      link: 'https://ref.rorywolf.net',
    },
    {
      name: '@roryxavier',
      alt: 'Bluesky',
      img: () => import('~icon/bluesky-color-gradient.svg'),
      link: 'https://bsky.app/profile/roryxavier.bsky.social',
    },
    {
      name: '@rory_xavi',
      alt: 'Twitter',
      img: () => import('~icon/twitter-color.svg'),
      link: 'https://twitter.com/rory_xavi',
    },
    {
      name: '@roryxavier',
      alt: 'Github',
      img: () => import('~icon/github.svg'),
      link: 'https://github.com/roryxavier',
    },
    {
      name: '@roryxavier',
      alt: 'Discord',
      img: () => import('~icon/discord-color.svg'),
      link: 'https://discordapp.com/users/525678985049538610',
    },
    {
      name: 'Telegram Sticker',
      alt: 'telegram sticker link',
      img: () => import('~icon/link-white.svg'),
      link: 'https://t.me/addstickers/RoryChris',
    },
  ],
};
