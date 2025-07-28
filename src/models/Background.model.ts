export class BackgroundModel {
  constructor(readonly src: string | (() => Promise<{ default: string }>)) {}

  async getSrc(): Promise<string> {
    if (typeof this.src === 'string') {
      return this.src;
    }

    const srcModule = await this.src();
    return srcModule.default;
  }
}
