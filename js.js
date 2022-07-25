const newGameButton = document.querySelector('#newGame');
newGameButton.addEventListener('click', createGame)

//create game area 16x16 grid
//this method seperates the grid in columns, can we do it in 1 box?
function createGame() {
    const gridBox = document.querySelector('#gridBox');
    let gridX = document.getElementById('gridX').value,
    gridY = document.getElementById('gridY').value;
    if (gridX > 100) gridX = 100
    if (gridY > 100) gridY = 100
    gridBox.innerHTML = '';
    for (i = 0; i < gridX; i++) { //loop creates a column to put items in
        const column = document.createElement('div')
        column.setAttribute('class',`column${i}`)
        gridBox.appendChild(column)
        for (j = 0; j < gridY; j++) { //loop for each item in the row
            const divBox = document.createElement('div')
            divBox.setAttribute("id", `${i},${j}`)
            divBox.setAttribute('class','divGridBox')
            divBox.addEventListener('mouseover',etchsketch)
            column.appendChild(divBox)
        }
    }
}

function etchsketch(target) {
    target.currentTarget.setAttribute('style', `background-color: yellow;`)
}