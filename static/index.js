const start = async () => {
  const [fileHandle] = await window.showOpenFilePicker();
  console.log({ fileHandle });

  const file = await fileHandle.getFile();

  // console.log({ file });
  // const url = URL.createObjectURL(file);

  // console.log({ url });

  // const video = document.createElement("video");
  // document.body.append(video);

  // video.src = url;
  // video.controls = true;

  const iframe = document.createElement("iframe");
  iframe.src = "./iframe.html";
  iframe.sandbox.add("allow-scripts");
  document.body.append(iframe);

  globalThis.f = file;
  await new Promise((r) => {
    iframe.addEventListener("load", r);
  });
  iframe.contentWindow?.postMessage(
    {
      jsonrpc: "2.0",
      method: "setUrl",
      params: [file],
    },
    "*"
  );
};

window.addEventListener("click", start, { once: true });
