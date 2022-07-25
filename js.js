const newGameButton = document.querySelector('#newGame');
let etch = null;
newGameButton.addEventListener('click', createGame)

//create game area 16x16 grid
//this method seperates the grid in columns, can we do it in 1 box?
function createGame() {
    //newGameButton.style.display = 'none';
    const gridBox = document.querySelector('#gridBox');
    gridBox.innerHTML = '';
    for (i = 0; i < 4; i++) { //loop creates a column to put items in
        const column = document.createElement('div')
        column.setAttribute('class',`column${i}`)
        gridBox.appendChild(column)
        for (j = 0; j < 4; j++) { //loop for each item in the row
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