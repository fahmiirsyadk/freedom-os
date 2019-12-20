"use strict";

const elOs = document.getElementById("os");
const elClock = document.getElementById("clock");
const headerTitle = document.getElementById("header-title");

let zIndex = 1;

const aboutContent = `
<div class="about-header">
  <div>
    <h1>Freedom OS</h1>
    <p>Version 1.0 - Carbon Dioxida</p>
    <span>Photo by Birmingham Museums Trust on Unsplash</p>
  </div>
</div>
<div class="about-content">
  <p><b>Freedom OS</b> is a super secure operating system, we ensure all of the user is safe and secure. Proudly presented by 3vil Company.</p>
  <br />
  <p>If you really interested about the source: 
    <a href="#">Github</a>.
  </p>

</div>
`;

const apps = [
  {
    title: "About",
    styles: "",
    opened: true,
    content: aboutContent
  },
  {
    title: "Notepad",
    styles: "",
    opened: false,
    content: ""
  },
  {
    title: "Youtube",
    styles: "width: 560px; height: 342.5px;",
    opened: false,
    content: `<iframe width="560" height="315" src="https://www.youtube.com/embed/Z6kNQEzQJpA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
  }
];

function freedomos() {
  const clock = setInterval(() => {
    updateClock();
  }, 1000);

  function updateClock() {
    const time = new Date();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    elClock.textContent = `${hours}:${minutes}`;
  }
}

let activeItem = null;
let active = false;

// render item apps to dom
apps
  .filter(({ opened }) => opened === true)
  .map(({ title, styles, content }) => {
    container.insertAdjacentHTML(
      "beforeend",
      `
      <div class="window" style="${styles}" id="${title}">
          <div class="window-header">
            <button onclick="closeWindow(event)">X</button>
            <button onclick="minimizeWindow(event)">_</button>
            <ul class="window-header__strip">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <h4>${title}</h4>
          </div>
        <div class="window-content">
          ${content}
        </div>
      </div>`
    );
  });

container.addEventListener("touchstart", dragStart, false);
container.addEventListener("touchend", dragEnd, false);
container.addEventListener("touchmove", drag, false);

container.addEventListener("mousedown", dragStart, false);
container.addEventListener("mouseup", dragEnd, false);
container.addEventListener("mousemove", drag, false);

function closeWindow(e) {
  let node = e.target.offsetParent;
  node.parentNode.removeChild(node);
}

function minimizeWindow(e) {
  e.target.offsetParent.style.display = "none";
}

function dragStart(e) {
  activeItem = e.target.offsetParent;

  // layer overlay
  activeItem.style.zIndex = zIndex;
  zIndex += 1;

  // change text title on navbar to name of app
  headerTitle.textContent =
    activeItem.id === "freedom_os" ? "Freedom OS" : activeItem.id;

  if (
    e.target.className.includes("window-header") ||
    e.target.localName.includes("li")
  ) {
    active = true;
    if (activeItem !== null) {
      if (!activeItem.xOffset) {
        activeItem.xOffset = 0;
      }

      if (!activeItem.yOffset) {
        activeItem.yOffset = 0;
      }

      if (e.type === "touchstart") {
        activeItem.initialX = e.touches[0].clientX - activeItem.xOffset;
        activeItem.initialY = e.touches[0].clientY - activeItem.yOffset;
      } else {
        activeItem.initialX = e.clientX - activeItem.xOffset;
        activeItem.initialY = e.clientY - activeItem.yOffset;
      }
    }
  }
}

function dragEnd(e) {
  if (activeItem !== null) {
    activeItem.initialX = activeItem.currentX;
    activeItem.initialY = activeItem.currentY;
  }

  active = false;
  activeItem = null;
}

function drag(e) {
  if (active) {
    if (e.type === "touchmove") {
      e.preventDefault();

      activeItem.currentX = e.touches[0].clientX - activeItem.initialX;
      activeItem.currentY = e.touches[0].clientY - activeItem.initialY;
    } else {
      activeItem.currentX = e.clientX - activeItem.initialX;
      activeItem.currentY = e.clientY - activeItem.initialY;
    }

    activeItem.xOffset = activeItem.currentX;
    activeItem.yOffset = activeItem.currentY;

    setTranslate(activeItem.currentX, activeItem.currentY, activeItem);
  }
}

function setTranslate(xPos, yPos, el) {
  el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
}

function darkos() {}
