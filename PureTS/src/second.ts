interface PlaySong {
  volume: number;
  song: string;
  time: number;
}

interface Story {
  createStory(): void;
}

class MusicApp implements PlaySong {
  constructor(
    public volume: number,
    public song: string,
    public time: number
  ) {}
}

class YouTube implements PlaySong, Story {
  constructor(
    public volume: number,
    public song: string,
    public time: number,
    public vidType: string,
    public shorts: string
  ) {}

  createStory(): void {
    console.log("Story created");
  }
}
