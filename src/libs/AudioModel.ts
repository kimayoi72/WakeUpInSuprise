import { hashId } from "./Hash";

class AudioFile {
  public constructor(public name: string, public url: string) {
  }

  public get id() {
    return hashId(this.url);
  }
}

export default AudioFile;
