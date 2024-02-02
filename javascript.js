const body = document.querySelector('body');
const button = document.querySelector('button');
let pixelArray = [];
let boardSize = 500;

button.addEventListener('click', () => drawBoard());


function drawBoard() {
    let gridSize = prompt("Set the gridsize");
    if (gridSize === null) return;
    gridSize = (!isNumber(gridSize)|| parseFloat(gridSize) < 1) ? 16 : parseFloat(gridSize);
    gridSize = (gridSize > 100) ? 100 : gridSize;
    let pixelSize = 100/gridSize;

    let container;
    if (document.querySelector('#container')) {
        container = document.querySelector('#container');
        container.remove();
    }
    container = document.createElement('div');
    container.style.width = `${boardSize}px`;
    container.style.height = `${boardSize}px`;
    container.id = 'container';
    body.appendChild(container);

    pixelArray = [];
    let fragment = new DocumentFragment();
    for (let i=0; i < gridSize*gridSize; i++) {
        let div = document.createElement('div');
        div.style.width = `${pixelSize}%`;
        div.style.height = `${pixelSize}%`;
        pixelArray.push(0);
        div.dataset.number = i;
        div.addEventListener('mouseenter', () => mouseEnter(div));
        fragment.appendChild(div);
    }
    container.appendChild(fragment);
}
function mouseEnter(div) {
    let num = div.dataset.number;
    if (pixelArray[num] < 10) pixelArray[num]++;
    let value = (pixelArray[num] < 10) ? 255 - pixelArray[num] * Math.floor(255/10) : 0;
    div.style.backgroundColor = `rgb(${value},${value},${value})`;
}

function getRandomInt(min = 0, max = 1) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

function isNumber(str) {
    if (typeof str != "string") return false;
    return !isNaN(str) && !isNaN(parseFloat(str));
}

window.addEventListener("load", (event) => drawBoard());