const handleMessage = (event) => {
  const { data } = event;
  console.log({ data });

  const video = document.createElement("video");
  document.body.append(video);

  const file = data.params[0];
  const url = URL.createObjectURL(file);
  video.src = url;
  video.controls = true;

  console.log({ url });

  // video.src = url;
  // video.controls = true;
};

window.addEventListener("message", handleMessage);
