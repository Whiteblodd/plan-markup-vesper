// Mounts the VESPER plan-markup form into the page as an iframe.
// Put <div id="vesper-markup-form"></div> where the form should appear; without it the form is appended to <body>.
(function () {
  var SRC = "https://whiteblodd.github.io/plan-markup-vesper/";
  var mount = document.getElementById("vesper-markup-form");
  if (!mount) {
    mount = document.createElement("div");
    mount.id = "vesper-markup-form";
    document.body.appendChild(mount);
  }
  if (mount.querySelector("iframe")) return;
  var frame = document.createElement("iframe");
  frame.src = SRC;
  frame.title = "Разметка планировок VESPER";
  frame.loading = "lazy";
  mount.appendChild(frame);
})();
