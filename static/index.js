const response = await fetch("./big_buck_bunny.mp4");
const blob = await response.blob();

const video = document.createElement("video");

const mimeCodec = 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"';

video.src = blob;

const m = new MediaSource();

// const sourceBuffer = m.addSourceBuffer(mimeCodec);
// sourceBuffer.appendBuffer(data);

document.body.append(video);
