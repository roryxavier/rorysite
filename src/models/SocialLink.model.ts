import type { IconModel } from './Icon.model';

export type SocialLinkModel = Readonly<{
  name: string;
  alt: string;
  img: IconModel;
  link: string;
}>;
