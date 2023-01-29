"use strict";
class MusicApp {
    constructor(volume, song, time) {
        this.volume = volume;
        this.song = song;
        this.time = time;
    }
}
class YouTube {
    constructor(volume, song, time, vidType, shorts) {
        this.volume = volume;
        this.song = song;
        this.time = time;
        this.vidType = vidType;
        this.shorts = shorts;
    }
    createStory() {
        console.log("Story created");
    }
}
