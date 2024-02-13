const GameBoard = (function() {
    let board = [ [], [], [] ]
    const winChecker = () => {};

    const writeToBoard = (marker, cell) => {
        board[cell[0]][cell[1]] = marker
        writeToDOM(selector, board)
    };

    const writeToDOM = (selector, board) => {};

    return {
        winChecker,
        writeToBoard,
        writeToDOM

    }
})(document);

class Player {
    constructor(name, marker) {
        this.name = name;
        this.marker = marker;
    }
}

function submitUser (event) {
    event.preventDefault();
    const inputForm = document.getElementById('inputForm')

    // Create and append name field
    let nameField = document.createElement('input')
    nameField.name = 'name'
    inputForm.appendChild(nameField)

    // Create and append marker selector
    let markerSelector = document.createElement('select')
    markerSelector.id = 'markerSelector'
    const options = ['X','O']
    options.forEach(optionText => {
        const option = document.createElement('option');
        option.textContent = optionText;
        markerSelector.appendChild(option);
    });
    inputForm.appendChild(markerSelector)

    // Remove form
    while (inputForm.firstChild) {
        inputForm.removeChild(inputForm.firstChild)
    }
    
    // Generate and return Player object
    return new Player(inputForm.name.value, inputForm.marker.value)
}

function cancelUser (event) {
    event.preventDefault();
    let inputForm = document.getElementById('inputForm')
    
    // Remove form
    while (inputForm.firstChild) {
        inputForm.removeChild(inputForm.firstChild)
    }
}