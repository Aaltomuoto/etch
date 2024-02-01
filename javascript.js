const body = document.querySelector('body');
const button = document.querySelector('button');

button.addEventListener('click', () => drawBoard());

function drawBoard() {
    let gridSize = prompt("Set the gridsize");
    if (gridSize === null) return;
    gridSize = (!isNumber(gridSize)|| parseFloat(gridSize) < 1) ? 16 : parseFloat(gridSize);

    if (gridSize > 100) gridSize = 100;

    let container;
    if (document.querySelector('#container')) {
        container = document.querySelector('#container');
        container.remove();
    }
    container = document.createElement('div');
    container.id = 'container';
    body.appendChild(container);

    container.style.width = `${gridSize*10}px`;
    container.style.height = `${gridSize*10}px`;

    let fragment = new DocumentFragment();
    for (let i=1; i <= gridSize*gridSize; i++) {
        let div = document.createElement('div');
        div.id = `dot-${i}`;
        div.addEventListener('mouseenter', () => mouseEnter(div));

        fragment.appendChild(div);
    }
    container.appendChild(fragment);
}
function mouseEnter(div) {
    div.style.backgroundColor = `rgb(${getRandomInt()},${getRandomInt()},${getRandomInt()})`;
}

function getRandomInt(min = 1, max = 255) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

function isNumber(str) {
    if (typeof str != "string") return false;
    return !isNaN(str) && !isNaN(parseFloat(str));
}

window.addEventListener("load", (event) => drawBoard());