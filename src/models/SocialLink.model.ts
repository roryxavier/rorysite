export type SocialLinkModel = Readonly<{
  name: string;
  alt: string;
  img: string | (() => Promise<typeof import('*.svg') | typeof import('*.png')>);
  link: string;
}>;
