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
      href: 'https://t.me/roryxavier',
      alt: 'Telegram',
      name: '@roryxavier',
      icon: new IconModel('https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg'),
    },
    {
      href: 'https://ref.rorywolf.net',
      alt: 'Reference Site',
      name: 'Reference Website',
      icon: new IconModel('https://img.icons8.com/color/48/null/paint-palette-with-brush.png'),
    },
    {
      href: 'https://bsky.app/profile/roryxavier.bsky.social',
      alt: 'Bluesky',
      name: '@roryxavier',
      icon: new IconModel('https://bsky.app/static/favicon-32x32.png'),
    },
    {
      href: 'https://twitter.com/rory_xavi',
      alt: 'Twitter',
      name: '@rory_xavi',
      icon: new IconModel(
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/150px-Logo_of_Twitter.svg.png',
      ),
    },
    {
      href: 'https://github.com/roryxavier',
      alt: 'Github',
      name: '@roryxavier',
      icon: new IconModel(
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/800px-GitHub_Invertocat_Logo.svg.png',
      ),
    },
    {
      href: 'https://discordapp.com/users/525678985049538610',
      alt: 'Discord',
      name: '@roryxavier',
      icon: new IconModel('https://www.svgrepo.com/show/353655/discord-icon.svg'),
    },
  ],
};
