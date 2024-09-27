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

  const iframeResponse = await fetch("./iframe.html");
  const iframeBlob = await iframeResponse.blob();
  const iframeSrc = URL.createObjectURL(iframeBlob);

  const iframe = document.createElement("iframe");
  iframe.src = iframeSrc;
  iframe.sandbox.add("allow-scripts");
  document.body.append(iframe);

  const url2 = URL.createObjectURL(file);

  const fileCopy = new File([file], file.name, { type: file.type });

  console.log({ fileCopy });

  // globalThis.f = file;
  await new Promise((r) => {
    iframe.addEventListener("load", r);
  });
  iframe.contentWindow?.postMessage(
    {
      jsonrpc: "2.0",
      method: "setUrl",
      params: [fileCopy, url2],
    },
    "*"
  );
};

window.addEventListener("click", start, { once: true });
