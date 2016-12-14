const remote = require('electron').remote;
let me = remote.getCurrentWindow();

window.addEventListener("load", () => {
  let view = document.getElementById("view");
  view.addEventListener("page-title-updated", e => {
    setCaption(e.title);
  });

  let minimizeButton = document.getElementById("minimize-button");
  minimizeButton.addEventListener("click", () => {
    me.minimize();
  });

  let maximizeButton = document.getElementById("maximize-button");
  maximizeButton.addEventListener("click", () => {
    me.isMaximized() ? me.unmaximize() : me.maximize();
  });

  let closeButton = document.getElementById("close-button");
  closeButton.addEventListener("click", () => {
    me.close();
  });
});

function setCaption(captionText) {
  let caption = document.getElementById("caption");
  caption.innerText = captionText;
  me.setTitle(caption);
}