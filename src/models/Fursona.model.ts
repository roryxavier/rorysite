import { IconModel } from './Icon.model';
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
      img: new IconModel(() => import('~icon/telegram-color.svg')),
      link: 'https://t.me/roryxavier',
    },
    {
      name: 'Reference Website',
      alt: 'Reference Site',
      img: new IconModel(() => import('~icon/paint-palette-with-brush.png')),
      link: 'https://ref.rorywolf.net',
    },
    {
      name: '@roryxavier',
      alt: 'Bluesky',
      img: new IconModel(() => import('~icon/bluesky-color-gradient.svg')),
      link: 'https://bsky.app/profile/roryxavier.bsky.social',
    },
    {
      name: '@rory_xavi',
      alt: 'Twitter',
      img: new IconModel(() => import('~icon/twitter-color.svg')),
      link: 'https://twitter.com/rory_xavi',
    },
    {
      name: '@roryxavier',
      alt: 'Github',
      img: new IconModel(() => import('~icon/github.svg'), {
        invertColorOnTheme: 'dark',
      }),
      link: 'https://github.com/roryxavier',
    },
    {
      name: '@roryxavier',
      alt: 'Discord',
      img: new IconModel(() => import('~icon/discord-color.svg')),
      link: 'https://discordapp.com/users/525678985049538610',
    },
    {
      name: 'Telegram Sticker',
      alt: 'telegram sticker link',
      img: new IconModel(() => import('~icon/link-white.svg'), {
        invertColorOnTheme: 'light',
      }),
      link: 'https://t.me/addstickers/RoryChris',
    },
  ],
};
