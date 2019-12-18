const elOs = document.getElementById("os");
let zIndex = 1;

const apps = [
  {
    title: "About",
    styles: ""
  },
  {
    title: "Notepad",
    styles: ""
  },
  {
    title: "SoundCloud",
    styles: ""
  }
];

function freedomos() {
  const clock = setInterval(() => {
    updateClock();
  }, 1000);

  function updateClock() {
    const elClock = document.getElementById("clock");
    const time = new Date();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    elClock.innerHTML = `${hours}:${minutes}`;
  }
}

function darkos() {}

let activeItem = null;
let active = false;
// render item apps to dom
apps.map(({ title, styles }, index) => {
  container.insertAdjacentHTML(
    "beforeend",
    `
    <div class="window ${styles}" id="${title + (index + 1)}">
        <div class="window-header">
          ${title}
          <ul class="window-header__strip">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        </div>
      <div class="window-content"></div>
    </div>`
  );
});

container.addEventListener("touchstart", dragStart, false);
container.addEventListener("touchend", dragEnd, false);
container.addEventListener("touchmove", drag, false);

container.addEventListener("mousedown", dragStart, false);
container.addEventListener("mouseup", dragEnd, false);
container.addEventListener("mousemove", drag, false);

const strip = document.getElementsByClassName("window-header__strip");

function dragStart(e) {
  if (
    e.target.className.includes("window-header") ||
    e.target.localName.includes("li")
  ) {
    active = true;
    activeItem = e.target.offsetParent;
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
        activeItem.style.zIndex = zIndex;
        zIndex += 1;
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
