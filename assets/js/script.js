// -- MODALS RULES --

// MODALS -- VARIABLES --
let modalOpen = document.querySelectorAll(".modal-open"); // Get the button that opens the modal
let modalClose = document.querySelectorAll(".modal-close"); // Get the button that closes the modal

// When the user clicks the button, open the modal 
modalOpen.forEach(function (btn) {
    btn.onclick = function () {
        let modal = btn.getAttribute("data-modals");

        document.getElementById(modal).style.display = "block";
    };
});

// When the user clicks on Button (x), close the modal
modalClose.forEach(function (btn) {
    btn.onclick = function () {
        (btn.closest(".modals").style.display = "none");
    };
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target.className === "modals") {
        event.target.style.display = "none";
    }

};


// -- GAME AREA OPEN/QUIT RULES --

// OPEN/QUIT -- VARIABLES --
let quitGame = document.querySelectorAll(".game-close"); // Get the button that close the game area and open the initial Menu

/**
 * When the user clicks the Beginner, Intermediate or Advanced buttons, open the game area and close the initial Menu and Modal
 */
function choiceGame() {

    let openGame = document.getElementById("game-area");
    openGame.classList.remove("hidden");

    let closeMenu = document.getElementById("start-menu");
    closeMenu.classList.add("hidden");

    let closeModal = document.getElementById("modal1");
    closeModal.style.display = "none";
}

// When the user clicks the quit button, close the game area and open the initial Menu
quitGame.forEach(function (btn) {
    btn.onclick = function () {

        let closeGame = document.getElementById("game-area");
        closeGame.classList.add("hidden");

        let openMenu = document.getElementById("start-menu");
        openMenu.classList.remove("hidden");

        let gameOver = document.getElementById("modal3");
        gameOver.style.display = "none";

        let winGame = document.getElementById("modal4");
        winGame.style.display = "none";

        resetGame();

        gameGrid.innerHTML = "";

    };
});


// -- GAME LEVEL CHOICE RULES --

// GAME VARIABLES
let gameGrid = document.querySelector(".game-grid"); // Variable that assigns it the value of the DOM element
let gameLevel; // Variable that holds the selected game level
let gameTime; // Variable that holds the allowable game time for the selected game level
let gameCards; // Variable that holds the cards number for the selected game level
let cardElements = []; // Variable that holds the cards front face array with correct length for the chosen game level
let firstCard = ""; // Variable that holds the frist revealed card of the pair
let secondCard = ""; // Variable that holds the second revealed card of the pair
let intervalId; // Variable that holds the game time for the chosen game level
let moves = 0; // Variable that holds each move on each flipped card
let moveDisplay = document.getElementById("moves"); // Variable that assigns moves value to DOM element
let revealedCards; // Variable that holds the number of cards that have been revealed

const cardsFrontFaceArray = [
    "card1",
    "card2",
    "card3",
    "card4",
    "card5",
    "card6",
    "card7",
    "card8",
    "card9",
    "card10",
    "card11",
    "card12",
    "card13",
    "card14",
    "card15",
    "card16",
]; // Assigns all available cards front faces.

// Game parameters for each level
const gameLevelParameters = [{
        gameLevel: 1,
        cardsNumber: 8,
        timeLimit: 3
    },
    {
        gameLevel: 2,
        cardsNumber: 10,
        timeLimit: 2
    },
    {
        gameLevel: 2,
        cardsNumber: 12,
        timeLimit: 1
    },
];

/**
 * Allocate the game level parameters to time and cards Number functions
 */
function choiceDifficulty(difficulty) {
    if (difficulty === "beginner") {
        gameLevel = 1;
    } else if (difficulty === 'intermediate') {
        gameLevel = 2;
    } else if (difficulty === "advanced") {
        gameLevel = 3;
    }

    gameTime = gameLevelParameters[gameLevel - 1].timeLimit;
    gameCards = gameLevelParameters[gameLevel - 1].cardsNumber;

    choiceGame();
    timeLevel();
    cardElements = gameLevelCardsArray();
    loadGame();
}

/**
 * Run and dispaly the Game time
 */
function timeLevel() {
    let time = gameTime * 60;
    let timeDisplay = document.getElementById("timer");

    clearInterval(intervalId);
    intervalId = setInterval(timeCount, 1000);

    function timeCount() {
        let minutes = Math.floor(time / 60);
        let secounds = time % 60;

        secounds = secounds < 10 ? "0" + secounds : secounds;

        timeDisplay.innerHTML = `Time: ${minutes}:${secounds}`;
        time--;
        if (time < 0) {
            clearInterval(intervalId);
            document.getElementById("modal3").style.display = "block";
        }
    }
}

/**
 * Provide the correct array length for each game level
 */
function gameLevelCardsArray() {
    const copyArray = [...cardsFrontFaceArray];
    const newArray = [];
    while (newArray.length < gameCards && copyArray.length) {
        const randomIndex = Math.floor(Math.random() * copyArray.length);
        const randomObj = copyArray[randomIndex];
        if (!newArray.includes(randomObj)) {
            newArray.push(randomObj);
        }
        copyArray.splice(randomIndex, 1);
    }
    return newArray;
}


// -- RESET GAME RULES --
document.getElementById("btn-reset").addEventListener("click", resetGame);

/**
 * Reset the game when click in reset button
 */
function resetGame() {
    gameGrid.innerHTML = "";
    moves = 0;
    moveDisplay.innerText = `Moves: ${moves}`;
    timeLevel();
    loadGame();
}


// -- MATCHING GAME RULES --

/**
 * Creates each face of the card and returns tag and className for each card face.
 */
function createElement(tag, className) {
    let element = document.createElement(tag);
    element.className = className;
    return element;
}

/**
 * Check both revealed cards, Will keep revealed if cards macthing on click event, Will hide if cards don't macthing on click event
 */
function checkCards() {
    if (firstCard != "" && secondCard != "") {
        let firstCardElement = firstCard.getAttribute("data-element");
        let secondCardElement = secondCard.getAttribute("data-element");
        console.log(firstCard);
        console.log(secondCard);
        if (firstCardElement === secondCardElement) {

            firstCard = "";
            secondCard = "";

        } else {

            setTimeout(function () {
                firstCard.classList.remove("card-reveal");
                secondCard.classList.remove("card-reveal");

                firstCard = "";
                secondCard = "";
            }, 500);
        }

        revealedCards = document.querySelectorAll(".card-reveal").length;

        if (revealedCards === cardElements.length * 2) {

            clearInterval(intervalId);
            document.getElementById("modal4").style.display = "block";
        }
    }
}

/**
 * Creates flip condition for each card, Allows only to flip 2 cards at a time
 */
function cardReveal({
    target
}) {
    if (target.parentNode.className.includes("card-reveal")) {
        return;
    }

    if (firstCard === "") {

        target.parentNode.classList.add("card-reveal");
        firstCard = target.parentNode;

    } else if (secondCard === "") {
        target.parentNode.classList.add("card-reveal");
        secondCard = target.parentNode;

    }

    moves++; // Increment moves
    moveDisplay.innerText = `Moves: ${moves}`; // Update display with moves increments

    checkCards();
}

/**
 * Creates each card, add click event to flip each card and set attribute data-element
 */
function createCard(cardElement) {
    let card = createElement("div", "card");
    let front = createElement("div", "face front");
    let back = createElement("div", "face back");

    front.style.backgroundImage = `url('./assets/images/${cardElement}.jpg')`;

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener("click", cardReveal);
    card.setAttribute("data-element", cardElement);

    return card;
}

/**
 * Duplicate each card, shuffle entire cards array and load the final array to the display game area
 */
function loadGame() {
    let duplicatecardElements = [...cardElements, ...cardElements];

    let shuffledArray = duplicatecardElements.sort(function () {
        return Math.random() - 0.5;
    });

    shuffledArray.forEach(function (cardElement) {
        let card = createCard(cardElement);
        gameGrid.appendChild(card);
    });
}