"use strict";

const elOs = document.getElementById("os");
const elClock = document.getElementById("clock");
let zIndex = 1;

const aboutContent = `<div class="about-header">
  <div>
    <h1>Freedom OS</h1>
    <p>Version 1.0 - Carbon Dioxida</p>
  </div>
</div>`;

const apps = [
  {
    title: "About",
    styles: "",
    content: aboutContent
  },
  {
    title: "Notepad",
    styles: "",
    content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40px" height="40px"><path fill="#4788c7" d="M11.6,38l-6.356-6.356C5.087,31.486,5,31.276,5,31.054c0-0.222,0.087-0.432,0.244-0.589l7.148-7.148	l-2.121-2.121l-7.148,7.148c-1.495,1.494-1.495,3.927,0,5.421L7.358,38H11.6z"/><path fill="#dff0fe" d="M10.186,38l-5.649-5.649C4.191,32.004,4,31.544,4,31.054c0-0.489,0.191-0.949,0.537-1.296	l7.148-7.148l-0.707-0.707L3.83,29.051C3.295,29.586,3,30.297,3,31.054c0,0.758,0.295,1.469,0.83,2.004L8.772,38H10.186z"/><path fill="#4788c7" d="M36.877,28.344l-7.148-7.148l-2.121,2.121l7.148,7.148C34.913,30.622,35,30.832,35,31.054	c0,0.223-0.087,0.433-0.244,0.59L28.4,38h4.242l4.235-4.235C38.372,32.271,38.372,29.838,36.877,28.344z"/><path fill="#dff0fe" d="M36.17,29.051l-7.148-7.148l-0.707,0.707l7.148,7.148C35.809,30.104,36,30.564,36,31.054	c0,0.49-0.191,0.95-0.537,1.297L29.814,38h1.414l4.942-4.942c0.535-0.535,0.83-1.246,0.83-2.004	C37,30.297,36.705,29.586,36.17,29.051z"/><polyline fill="#dff0fe" points="32.5,38 32.5,12.381 7.5,12.381 7.5,38"/><polyline fill="none" stroke="#4788c7" stroke-linecap="round" stroke-miterlimit="10" points="32.5,37.5 32.5,11.881 7.5,11.881 7.5,37.5"/><rect width="24" height="7.622" x="8.004" y="30.378" fill="#dff0fe"/><path fill="#dff0fe" d="M35.493,17C35.415,10.516,30.002,2.5,20,2.5S4.585,10.516,4.507,17H4.5v2c0,1.381,1.119,2.5,2.5,2.5	c1.381,0,2.5-1.119,2.5-2.5v-1.857h21V19c0,1.381,1.119,2.5,2.5,2.5c1.381,0,2.5-1.119,2.5-2.5v-2H35.493z"/><path fill="#4788c7" d="M36,17.143h-1C35,11.439,30.232,3,20,3S5,11.439,5,17.143H4C4,9.86,10.117,2,20,2S36,9.86,36,17.143z"/><path fill="#4788c7" d="M20.06,22c-2.951,0-5.31-1.729-5.408-1.802l0.596-0.803C15.269,19.411,17.447,21,20.06,21 c2.611,0,4.79-1.589,4.812-1.604l0.596,0.803C25.368,20.271,23.01,22,20.06,22z"/><circle cx="13.5" cy="12.503" r="4" fill="#4788c7"/><path fill="#4788c7" d="M13.5,17.003c-2.481,0-4.5-2.019-4.5-4.5s2.019-4.5,4.5-4.5s4.5,2.019,4.5,4.5 S15.981,17.003,13.5,17.003z M13.5,9.003c-1.93,0-3.5,1.57-3.5,3.5s1.57,3.5,3.5,3.5s3.5-1.57,3.5-3.5S15.43,9.003,13.5,9.003z"/><circle cx="13.5" cy="11.786" r="2.786" fill="#fff"/><circle cx="26.5" cy="12.503" r="4" fill="#4788c7"/><path fill="#4788c7" d="M26.5,17.003c-2.481,0-4.5-2.019-4.5-4.5s2.019-4.5,4.5-4.5s4.5,2.019,4.5,4.5 S28.981,17.003,26.5,17.003z M26.5,9.003c-1.93,0-3.5,1.57-3.5,3.5s1.57,3.5,3.5,3.5s3.5-1.57,3.5-3.5S28.43,9.003,26.5,9.003z"/><circle cx="26.5" cy="11.786" r="2.786" fill="#fff"/><path fill="#98ccfd" d="M20,13.5c-8.595,0.192-7.835,6.927-7.052,8.936c0.478,1.218,1.473,2.064,2.351,2.064 c2.351,0,2.758-3.495,3.134-5.503c0.149-0.846,0.87-1.183,1.567-1.266c0.698,0.082,1.418,0.419,1.567,1.266 c0.376,2.009,0.784,5.503,3.134,5.503c0.877,0,1.873-0.846,2.351-2.064C27.835,20.427,28.595,13.692,20,13.5z"/><path fill="#98ccfd" d="M24.701,25c-2.575,0-3.15-3.243-3.532-5.389l-0.094-0.523c-0.084-0.479-0.445-0.765-1.075-0.854 c-0.63,0.09-0.991,0.374-1.074,0.849l-0.097,0.533C18.448,21.76,17.872,25,15.299,25c-1.107,0-2.266-0.979-2.816-2.381 c-0.488-1.252-0.995-4.241,0.577-6.598c1.288-1.931,3.62-2.947,6.93-3.021c3.331,0.074,5.663,1.091,6.951,3.021 c1.572,2.356,1.065,5.346,0.577,6.597C26.967,24.021,25.809,25,24.701,25z M20,17.227l0.06,0.008 c1.106,0.132,1.836,0.742,1.999,1.675l0.096,0.527C22.581,21.841,23.098,24,24.701,24c0.582,0,1.44-0.612,1.885-1.746 c0.34-0.87,0.916-3.589-0.478-5.678c-1.097-1.643-3.155-2.51-6.119-2.576c-2.942,0.066-5.001,0.934-6.098,2.576 c-1.394,2.089-0.817,4.808-0.478,5.679C13.858,23.388,14.717,24,15.299,24c1.603,0,2.119-2.156,2.546-4.56l0.098-0.536 c0.162-0.928,0.892-1.538,1.998-1.67L20,17.227z"/><path fill="#4788c7" d="M23.559,17.003c0-0.829-1.567-1.5-3.5-1.5s-3.5,0.671-3.5,1.5c0,0.829,1.567,1.5,3.5,1.5 S23.559,17.832,23.559,17.003z"/><path fill="#4788c7" d="M20.06,19.004c-1.988,0-4.001-0.687-4.001-2c-0.001-2.627,8-2.628,8.001,0 C24.06,18.317,22.047,19.004,20.06,19.004z M20.06,16.004c-1.861,0-3.001,0.647-3.001,1s1.14,1,3.001,1s3-0.647,3-1 S21.921,16.004,20.06,16.004z"/><path fill="#4788c7" d="M7,22c-1.654,0-3-1.346-3-3v-2c0-0.276,0.224-0.5,0.5-0.5S5,16.724,5,17v2c0,1.103,0.897,2,2,2	s2-0.897,2-2v-1c0-0.276,0.224-0.5,0.5-0.5S10,17.724,10,18v1C10,20.654,8.654,22,7,22z"/><path fill="#4788c7" d="M33,22c-1.654,0-3-1.346-3-3v-1c0-0.276,0.224-0.5,0.5-0.5S31,17.724,31,18v1c0,1.103,0.897,2,2,2	s2-0.897,2-2v-2c0-0.276,0.224-0.5,0.5-0.5S36,16.724,36,17v2C36,20.654,34.654,22,33,22z"/><g><path fill="#fff" d="M17.625,17.597c-0.148,0-0.295-0.065-0.394-0.191c-0.17-0.218-0.132-0.532,0.085-0.702 c0.662-0.519,1.854-0.792,3.187-0.746c0.275,0.011,0.491,0.243,0.48,0.52s-0.199,0.482-0.52,0.48 c-1.063-0.045-2.063,0.167-2.53,0.533C17.842,17.562,17.733,17.597,17.625,17.597z"/></g></svg>`
  },
  {
    title: "Youtube",
    styles: "width: 560px; height: 342.5px;",
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
apps.map(({ title, styles, content }, index) => {
  container.insertAdjacentHTML(
    "beforeend",
    `
    <div class="window" style="${styles}" id="${title + (index + 1)}">
        <div class="window-header">
          <button onclick="closeWindow(event)">close</button>
          <button onclick="minimizeWindow(event)">minimize</button>
          <ul class="window-header__strip">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          ${title}
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

  if (
    e.target.className.includes("window-header") ||
    e.target.localName.includes("li")
  ) {
    active = true;
    activeItem.style.zIndex = zIndex;
    zIndex += 1;
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
  } else if (e.target.localName !== "button") {
    activeItem.style.zIndex = zIndex;
    zIndex += 1;
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
