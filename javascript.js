const body = document.querySelector('body');
const button = document.querySelector('button');

button.addEventListener('click', () => drawBoard());

function drawBoard() {
    let gridSize = prompt("Set the gridsize");
    if (isNaN(gridSize)) gridSize = 16;
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
    for (let i=0; i < gridSize*gridSize; i++) {
        let div = document.createElement('div');
        div.id = `dot${i+1}`;
        div.addEventListener('mouseenter', () => mouseEnter(div));
        div.addEventListener('mouseleave', () => mouseLeave(div));

        fragment.appendChild(div);
    }
    container.appendChild(fragment);
}
function mouseEnter(div) {
    div.classList.add('highlight');
}
function mouseLeave(div) {
    //div.classList.remove('highlight');
}

window.addEventListener("load", (event) => drawBoard());