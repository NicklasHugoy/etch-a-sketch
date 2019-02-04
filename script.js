const container = document.querySelector(".container");

let counter = 1;

for(i = 0; i<16; i++){
    for(j = 0; j<16; j++){
        let grid_element = document.createElement('div');
        grid_element.classList.add('grid_element');
        
        grid_element.textContent = counter;
        counter += 1;
        
        container.appendChild(grid_element);
    }
}