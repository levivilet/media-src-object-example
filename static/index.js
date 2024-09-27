const start = async () => {
  const [fileHandle] = await window.showOpenFilePicker();
  console.log({ fileHandle });

  const file = await fileHandle.getFile();

  console.log({ file });
  const url = URL.createObjectURL(file);

  console.log({ url });

  const video = document.createElement("video");
  document.body.append(video);

  video.src = url;
  video.controls = true;

  globalThis.f = file;
};

window.addEventListener("click", start, { once: true });
