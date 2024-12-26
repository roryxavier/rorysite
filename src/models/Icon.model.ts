export class IconModel {
  constructor(
    readonly src: string | (() => Promise<typeof import('*.svg') | typeof import('*.png')>),
    readonly option?: { invertColorOnTheme?: 'light' | 'dark' },
  ) {}

  async getIcon(): Promise<string> {
    if (typeof this.src === 'string') {
      return this.src;
    }

    const srcModule = await this.src();
    return srcModule.default;
  }
}
