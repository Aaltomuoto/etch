const container = document.querySelector('#container');
const gridSize = 16;

let fragment = new DocumentFragment();
for (let i=0; i < gridSize; i++) {
    let div = document.createElement('div');
    div.innerHTML = i+1;
    fragment.appendChild(div);
}
container.appendChild(fragment);

const divs = document.querySelectorAll('#container div');

divs.forEach(function(div) {
   div.addEventListener('mouseenter', () => {
    div.classList.toggle('highlight');
   });
   div.addEventListener('mouseleave', () => {
    div.classList.toggle('highlight');
   })
});