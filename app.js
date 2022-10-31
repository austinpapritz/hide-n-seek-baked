// import functions and grab DOM elements
const shedButton = document.getElementById('shed-button');
const treeButton = document.getElementById('tree-button');
const boulderButton = document.getElementById('boulder-button');

const shedContainer = document.getElementById('shed-container');
const treeContainer = document.getElementById('tree-container');
const boulderContainer = document.getElementById('boulder-container');

const totalEl = document.getElementById('total');
const lossesEl = document.getElementById('losses');
const winsEl = document.getElementById('wins');

// initialize state
const hidingPlaces = ['tree', 'shed', 'boulder'];

let correctGuesses = 0;
let totalGuesses = 0;
let totalLosses = 0;

treeButton.addEventListener('click', () => {
    totalGuesses++;
    resetFace();
    const hidingSpot = Math.floor(Math.random() * 3);
    const answer = hidingPlaces[hidingSpot];
    handleGuess(answer, 'tree');

    if (answer === 'tree') {
        correctGuesses++;
        treeContainer.classList.add('face');
    } else {
        totalLosses++;
    }
});

boulderButton.addEventListener('click', () => {
    totalGuesses++;
    resetFace();
    const hidingSpot = Math.floor(Math.random() * 3);
    const answer = hidingPlaces[hidingSpot];
    handleGuess(answer, 'boulder');

    if (answer === 'boulder') {
        correctGuesses++;
        boulderContainer.classList.add('face');
    } else {
        totalLosses++;
    }
});

shedButton.addEventListener('click', () => {
    totalGuesses++;
    resetFace();
    const hidingSpot = Math.floor(Math.random() * 3);
    const answer = hidingPlaces[hidingSpot];
    handleGuess(answer, 'shed');

    if (answer === 'shed') {
        correctGuesses++;
        shedContainer.classList.add('face');
    } else {
        totalLosses++;
    }
});

function resetFace() {
    treeContainer.classList.remove('face');
    boulderContainer.classList.remove('face');
    shedContainer.classList.remove('face');
}

function handleGuess(correctSpot, userGuess) {
    // reset the styles
    // then increment the guesses
    // then grab the appropriate container element for the correct guess from the DOM
    // then add the face class to that element so that the face shows up
    // then if the user guess is correct, increment the correct guesses
    // update the DOM to show this change to the user (including the losses, not tracked directly in state)
}
