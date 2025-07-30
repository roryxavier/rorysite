import { IconModel } from './Icon.model';
import type { SocialLinkModel } from './SocialLink.model';
import { BackgroundModel } from './Background.model';

export const USE_BACKGROUND = true;
export const USE_NEXT_FURCON = true;

export type FursonaModel = Readonly<{
  labels: string[];
  socialLinks: SocialLinkModel[];
}>;

export const RORY_CHRIS_FURSONA: FursonaModel = {
  labels: ['He/Him', 'Wolf', 'Gay', 'Taken - 🦊', 'Programmer', 'Happy Go Lucky'],
  socialLinks: [
    {
      href: 'https://t.me/roryxavier',
      alt: 'Telegram',
      name: '@roryxavier',
      icon: new IconModel(() => import('~icon/telegram-color.svg')),
      background: USE_BACKGROUND
        ? new BackgroundModel(() => import('@/assets/page/home/telegram-social-background.jpg'))
        : undefined,
    },
    {
      href: 'https://ref.rorywolf.net',
      alt: 'Reference Site',
      name: 'Reference Website',
      icon: new IconModel(() => import('~icon/paint-palette-with-brush.png')),
      background: USE_BACKGROUND
        ? new BackgroundModel(() => import('@/assets/page/home/ref-social-background.png'))
        : undefined,
    },
    {
      href: 'https://bsky.app/profile/roryxavier.bsky.social',
      alt: 'Bluesky',
      name: '@roryxavier',
      icon: new IconModel(() => import('~icon/bluesky-color-gradient.svg')),
    },
    {
      href: 'https://twitter.com/rory_xavi',
      alt: 'Twitter',
      name: '@rory_xavi',
      icon: new IconModel(() => import('~icon/twitter-color.svg')),
      background: USE_BACKGROUND
        ? new BackgroundModel(() => import('@/assets/page/home/twitter-social-background.jpg'))
        : undefined,
    },
    {
      href: 'https://github.com/roryxavier',
      alt: 'Github',
      name: '@roryxavier',
      icon: new IconModel(() => import('~icon/github.svg'), {
        invertColorOnTheme: 'dark',
      }),
      background: USE_BACKGROUND
        ? new BackgroundModel(() => import('@/assets/page/home/github-social-background.png'))
        : undefined,
    },
    {
      href: 'https://discordapp.com/users/525678985049538610',
      alt: 'Discord',
      name: '@roryxavier',
      icon: new IconModel(() => import('~icon/discord-color.svg')),
    },
    {
      href: 'https://t.me/addstickers/RoryChris',
      alt: 'Telegram Sticker Link',
      name: 'Telegram Sticker',
      icon: new IconModel(() => import('~icon/link-white.svg'), {
        invertColorOnTheme: 'light',
      }),
    },
  ],
};
