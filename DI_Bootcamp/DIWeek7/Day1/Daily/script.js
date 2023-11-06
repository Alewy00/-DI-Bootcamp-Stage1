class Video {
  constructor(title, uploader, time) {
    this.title = title;
    this.uploader = uploader;
    this.time = time;
  }

  watch() {
    console.log(
      `${this.uploader} watched ${this.time} seconds of ${this.title}`
    );
  }
}

const video = new Video("Harry Potter", "Aaron", 10);
// video.watch()

const infoArr = [
  { title: "Harry Potter", uploader: "Aaron", time: 10 },
  { title: "Prestige", uploader: "Aaron2", time: 20 },
  { title: "Batman", uploader: "Aaron3", time: 30 },
];

// infoArr.forEach(item)

const objVideoInst = infoArr.map((dict) => {
  return new Video(dict.title, dict.uploader, dict.time);
});

objVideoInst.forEach((obj) => {
  obj.watch();
});
