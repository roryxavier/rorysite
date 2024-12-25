import type { SocialLinkModel } from './SocialLink.model';

import TELEGRAM_ICON from '@/assets/icon/telegram-color.svg';
import PAINT_ICON from '@/assets/icon/paint-palette-with-brush.png';
import BLUEKSY_ICON from '@/assets/icon/bluesky-color-gradient.svg';
import TWITTER_ICON from '@/assets/icon/twitter-color.svg';
import GITHUB_ICON from '@/assets/icon/github.svg';
import DISCORD_ICON from '@/assets/icon/discord-color.svg';
import LINK_ICON from '@/assets/icon/link.svg';

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
      img: TELEGRAM_ICON,
      link: 'https://t.me/roryxavier',
    },
    {
      name: 'Reference Website',
      alt: 'Reference Site',
      img: PAINT_ICON,
      link: 'https://ref.rorywolf.net',
    },
    {
      name: '@roryxavier',
      alt: 'Bluesky',
      img: BLUEKSY_ICON,
      link: 'https://bsky.app/profile/roryxavier.bsky.social',
    },
    {
      name: '@rory_xavi',
      alt: 'Twitter',
      img: TWITTER_ICON,
      link: 'https://twitter.com/rory_xavi',
    },
    {
      name: '@roryxavier',
      alt: 'Github',
      img: GITHUB_ICON,
      link: 'https://github.com/roryxavier',
    },
    {
      name: '@roryxavier',
      alt: 'Discord',
      img: DISCORD_ICON,
      link: 'https://discordapp.com/users/525678985049538610',
    },
    {
      name: 'Telegram Sticker',
      alt: 'telegram sticker link',
      img: LINK_ICON,
      link: 'https://t.me/addstickers/RoryChris',
    },
  ],
};
