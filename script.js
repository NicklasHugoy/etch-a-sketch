createGrid(16);

function createGrid(grid_size){
    const container = document.querySelector(".container");
    clearGrid(container);
    
    for(i = 0; i<grid_size; i++){
        for(j = 0; j<grid_size; j++){
            let grid_element = document.createElement('div');
            grid_element.classList.add('grid_element');

            let block_size = 960/grid_size;
            grid_element.style.height = block_size + 'px';
            grid_element.style.width = block_size + 'px';

            if(j == 0){
                grid_element.style.clear = "left";
            }

            grid_element.addEventListener('mouseover', function(e){
                draw(e.target);
            });
            container.appendChild(grid_element);
        }
    }
}

function clearGrid(container){
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function newGrid(){
    let grid_size = prompt("Plese enter size for new grid");
    createGrid(grid_size);
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

function draw(element){
    element.style.backgroundColor = getRandomColor();
    fadeGrid();
}

const new_grid_button = document.querySelector('#new_grid_button');
new_grid_button.addEventListener('click', newGrid);