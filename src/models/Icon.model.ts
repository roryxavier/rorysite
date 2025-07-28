export class IconModel {
  constructor(
    readonly src: string | (() => Promise<{ default: string }>),
    readonly option?: { invertColorOnTheme?: 'light' | 'dark' },
  ) {}

  async getSrc(): Promise<string> {
    if (typeof this.src === 'string') {
      return this.src;
    }

    const srcModule = await this.src();
    return srcModule.default;
  }
}
