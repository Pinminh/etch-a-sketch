const container = document.querySelector(".container");

const NUMBER_OF_ROWS = 16;
const NUMBER_OF_ELEMENTS_IN_ROW = 16;

for (let rowCount = 0; rowCount < NUMBER_OF_ROWS; ++rowCount) {
  let row = document.createElement("div");
  row.classList.add("grid-row");

  for (let elementCount = 0; elementCount < NUMBER_OF_ELEMENTS_IN_ROW; ++elementCount) {
    let element = document.createElement("div");
    element.classList.add("grid-element");

    row.appendChild(element);
  }

  container.appendChild(row);
}