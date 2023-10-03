const gameContainer = document.getElementById('game-container');
const moveUpButton = document.getElementById('move-up');
const moveDownButton = document.getElementById('move-down');
const moveLeftButton = document.getElementById('move-left');
const moveRightButton = document.getElementById('move-right');

let x = 0;
let y = 0;
let z = 0;
let path = [];
path.push({ x, y, z }); updatePath;

// Розмір сітки
const gridSize = 7;

moveUpButton.addEventListener('click', () => {
  if (y > 0) {
    y--;
    z = 4;
    path.push({ x, y, z });
    updatePath();
  }
  else {
    clearPath();
  }
});

moveDownButton.addEventListener('click', () => {
  if (y < gridSize - 1) {
    y++;
    z = 3;
    path.push({ x, y, z });
    updatePath();
  }
  else {
    clearPath();
  }
});

moveLeftButton.addEventListener('click', () => {
  if (x > 0) {
    x--;
    z = 1;
    path.push({ x, y, z});
    updatePath();
  }
  else {
    clearPath();
  }
});

moveRightButton.addEventListener('click', () => {
  if (x < gridSize - 1) {
    x++;
    z = 2;
    path.push({ x, y, z });
    updatePath();
  }
  else {
    clearPath();
  }
});

function clearPath(){
  gameContainer.innerHTML = '';
  x = 0;
  y = 0;
  z = 0;
  path = [];
  const cell = document.createElement('div');
  cell.classList.add('cell');
  gameContainer.appendChild(cell);
  const pathElement = document.createElement('div');
  pathElement.classList.add('path');
  cell.appendChild(pathElement);
  path.push({ x, y, z }); updatePath;

}

function updatePath() {
  gameContainer.innerHTML = '';
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      gameContainer.appendChild(cell);

      if (path.some(point => point.x === j && point.y === i)) {
        const matchingPoint = path.find(point => point.x === j && point.y === i);
        if (matchingPoint) {
            const direction = matchingPoint.z;
            if (direction == 1) {
                const firstline = document.createElement('div');
                cell.appendChild(firstline);
                firstline.classList.add('all_lines','line1');
            } 
            else if (direction == 2) {            
                const secondline = document.createElement('div');
                cell.appendChild(secondline);
                secondline.classList.add('all_lines','line2');
            } 
            else if (direction == 3) { 
                const thirdline = document.createElement('div');
                cell.appendChild(thirdline);
                thirdline.classList.add('all_lines','line3');
            } 
            else if (direction == 4) { 
                const fourthline = document.createElement('div');
                cell.appendChild(fourthline);
                fourthline.classList.add('all_lines','line4');
        }
    }
        const pathElement = document.createElement('div');
        pathElement.classList.add('path');
        cell.appendChild(pathElement);
    }
   }  
}
}