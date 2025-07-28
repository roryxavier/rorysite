import type { BackgroundModel } from './Background.model';
import type { IconModel } from './Icon.model';

export type SocialLinkModel = Readonly<{
  href: string;
  alt: string;

  name: string;
  icon: IconModel;
  background?: BackgroundModel;
}>;
