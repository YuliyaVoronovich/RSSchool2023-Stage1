class Audio {

  constructor() {
    this.audio = null;
    this.src = null;
    this.isMute = true;
  }

  play() {
    this.audio.play();
  }
}

export default Audio;