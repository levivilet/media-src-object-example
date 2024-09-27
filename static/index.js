const response = await fetch("./big_buck_bunny.mp4");
const blob = await response.blob();

const video = document.createElement("video");

video.srcObject = blob;

document.body.append(video);
