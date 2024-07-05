function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randColor() {
  return `rgb(${randInt(0, 255)}, ${randInt(0, 255)}, ${randInt(0, 255)})`;
}

const container = document.querySelector(".container");

const createSketch = (numRows, numCols) => {
  for (let rowCount = 0; rowCount < numRows; ++rowCount) {
    let row = document.createElement("div");
    row.classList.add("grid-row");

    for (let elementCount = 0; elementCount < numCols; ++elementCount) {
      let element = document.createElement("div");
      element.classList.add("grid-element");

      row.appendChild(element);
    }

    container.appendChild(row);
  }
}

const deleteSketch = () => {
  container.innerHTML = "";
}

const INTIAL_COLOR_OPACITY = 0.1;
const COLOR_OPACITY_INCREMENT = 0.1;

let previousPixel = null;

const addGridColor = (event) => {
  let pixel = event.target;
  if (!pixel.classList.contains("grid-element")) return;
  if (pixel.style.backgroundColor && pixel.style.opacity >= 1) return;

  if (pixel === previousPixel) return;

  if (!pixel.style.backgroundColor) {
    pixel.style.backgroundColor = randColor();
    pixel.style.opacity = INTIAL_COLOR_OPACITY;
  } else {
    let oldOpacity = Number(pixel.style.opacity);
    pixel.style.opacity = oldOpacity + COLOR_OPACITY_INCREMENT;
  }

  previousPixel = pixel;
}

const createCustomizedSketch = (event) => {
  if (event.target.tagName !== "BUTTON") return;
  if (!event.target.parentNode.classList.contains("header")) return;

  let newSketchSize = prompt("Please enter the number of elements per side:");

  if (!newSketchSize) return;
  if (!Number(newSketchSize)) {
    alert("Error: can only accept numbers!");
    return;
  }
  if (newSketchSize <= 0) alert("Error: can only accept positive number!");
  if (newSketchSize > 100) alert("Error: can't create sketch with size exceeding 100!");
  if (newSketchSize <= 0 || newSketchSize > 100) return;

  deleteSketch();
  createSketch(newSketchSize, newSketchSize);
}

const DEFAULT_NUMBER_OF_ELEMENTS_PER_SIDE = 16;
const DEFAULT_NUM_ROWS = DEFAULT_NUMBER_OF_ELEMENTS_PER_SIDE;
const DEFAULT_NUM_COLS = DEFAULT_NUMBER_OF_ELEMENTS_PER_SIDE;
createSketch(DEFAULT_NUM_ROWS, DEFAULT_NUM_COLS);

document.addEventListener("mousemove", addGridColor);
document.addEventListener("click", createCustomizedSketch);