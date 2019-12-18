const elLoader = document.getElementById("loader");
const elFreedom = document.getElementById("freedom_os");

const textLog = text => `<p>${text}</p>`;
const renderNode = x => elLoader.insertAdjacentHTML("beforeend", x);

function computer() {
  renderNode(`<pre>
,--------------------------===---.
| Freedom X                       |
| ,----------------------------.  |
| |                             | |
| |                             | |
| |                             | |
| |                             | |
| |                             | |
| |                             | |
| |          TRUST US           | |
| |            WITH             | |
| |         YOUR LIFE.          | |
| |                             | |
| |                             | |
| |                             | |
| |                             | |
| |                             | |
| |                             | |
| |.............................| |
| |  _  :          '      :  _  | |
| | |_| :                 : |_| | |
| |  _  :_               _:  _  | |
| | |_| :.)        .    (.: |_| | |
| '-----....._________.....-----' |
|     _    _     O     _    _     |
|    |_|  |_|    |    |_|  |_|    |
"------......____O____......------"
             powered by freedom os
</pre>`);
}

function boot() {
  setTimeout(() => {
    renderNode(textLog("Booting from NAND"));
    setTimeout(() => {
      renderNode(textLog("Starting kernel..."));
      setTimeout(() => {
        renderNode(textLog("Booting Freedom OS from physical CPU 0x0"));
        setTimeout(() => {
          while (elLoader.firstChild) {
            elLoader.removeChild(elLoader.firstChild);
          }
          computer();
          setTimeout(() => {
            elLoader.style.display = "none";
            elFreedom.style.display = "block";
          }, 4000);
        }, 2000);
      }, 700);
    }, 1000);
  }, 500);
}
