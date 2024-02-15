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
    clearForm();
    event.preventDefault();
    const inputForm = document.getElementById('inputForm')

    //Create structure
    let inputNameDiv = document.createElement('div')
    inputForm.appendChild(inputNameDiv)
    let inputMarkerDiv = document.createElement('div')
    inputForm.appendChild(inputMarkerDiv)

    let submitDiv = document.createElement('div')
    inputForm.appendChild(submitDiv)

    // Create and append name field
    let nameLabel = document.createElement('label')
    nameLabel.setAttribute("for","name")
    nameLabel.innerHTML = 'Name:'
    inputNameDiv.appendChild(nameLabel)
    let nameField = document.createElement('input')
    nameField.name = 'name'
    inputNameDiv.appendChild(nameField)

    // Create and append marker selector
    let markerLabel = document.createElement('label')
    markerLabel.setAttribute("for","name")
    markerLabel.innerHTML = 'Marker:'
    inputMarkerDiv.appendChild(markerLabel)
    
    let markerSelector = document.createElement('select')
    markerSelector.id = 'markerSelector'
    markerSelector.name = 'marker'
    const options = ['X','O']
    options.forEach(optionText => {
        const option = document.createElement('option');
        option.textContent = optionText;
        markerSelector.appendChild(option);
    });
    inputMarkerDiv.appendChild(markerSelector)

    let submitButton = document.createElement('button')
    submitButton.innerHTML = "Submit"
    submitDiv.appendChild(submitButton)

    let cancelButton = document.createElement('button')
    cancelButton.innerHTML = "Cancel"
    submitDiv.appendChild(cancelButton)
    cancelButton.addEventListener('click', clearForm)


    // Remove form
    submitButton.addEventListener('click', clearForm)
    // submitButton.addEventListener('click', function() {
    //     return new Player(inputForm.name.value, inputForm.marker.value)
    // })
    
    // Generate and return Player object
    console.log("submit user trigger")
}

function clearForm () {
    let inputForm = document.getElementById('inputForm')
    while (inputForm.firstChild) {
        inputForm.removeChild(inputForm.firstChild)
    }
}

function cancelUser (event) {
    event.preventDefault();
    clearForm();
}

document.getElementById("start").addEventListener('click', submitUser)