// -- MODALS RULES --

// Get the button that opens the modal
let modalOpen = document.querySelectorAll(".modal-open");

// When the user clicks the button, open the modal 
modalOpen.forEach(function(btn){
    btn.onclick = function() {
        let modal = btn.getAttribute("data-modals");

        document.getElementById(modal).style.display = "block";
    };
});

// Get the button  that closes the modal
let modalClose = document.querySelectorAll(".modal-close");

// When the user clicks on Button (x), close the modal
modalClose.forEach(function(btn){
    btn.onclick = function() {
        (btn.closest(".modals").style.display="none");
        
    };
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
   if (event.target.className === "modals" ) {
    event.target.style.display = "none";
   }
  };


// -- GAME AREA OPEN/QUIT RULES --

// Get the button that opens the game area and close the initial Menu and Modal
let playGame = document.querySelectorAll(".game-open");


// When the user clicks the Beginner, Intermediate or Advanced buttons, open the game area and close the initial Menu and Modal
function choiceGame () {

let openGame = document.getElementById("game-area");
openGame.classList.remove("hidden");

let closeMenu = document.getElementById("start-menu");
closeMenu.classList.add("hidden");

let closeModal = document.getElementById("modal1");
closeModal.style.display="none";

}

// Get the button that close the game area and open the initial Menu
let quitGame = document.querySelectorAll(".game-close");


// When the user clicks the quit button, close the game area and open the initial Menu
quitGame.forEach(function(btn){
    btn.onclick = function() {
 
        let closeGame = document.getElementById("game-area");
        closeGame.classList.add("hidden");

        let openMenu = document.getElementById("start-menu");
        openMenu.classList.remove("hidden");
    };
});



// -- GAME LEVEL CHOICE RULES --

// variables
let gameLevel = "";
let time = 0;

// When the user click in the chosen game level button will return the game level
function choiceDifficulty(difficulty) {
    if(difficulty === "beginner"){
        gameLevel = 'beginner';
    } else if(difficulty === 'intermediate') {
        gameLevel = "intermediate";
    } else if(difficulty === "advanced") {
        gameLevel = 'advanced';
    } 
    timeLevel(gameLevel);
    choiceGame ()
}

// -- GAME AREA TIMER RULES --
function timeLevel(gameLevel) {
    if(gameLevel === "beginner"){
        time = 20 * 60;
    } else if(gameLevel === 'intermediate') {
        time = 15 * 60;
    } else if(gameLevel === "advanced") {
        time = 10 * 60;
    } 

    let timeDisplay = document.getElementById("timer");

    setInterval(timeCount, 1000);
    
    function timeCount() {
        let minutes = Math.floor(time/60);
        let secounds = time % 60;
    
        secounds = secounds < 10 ? "0" + secounds : secounds;
    
        timeDisplay.innerHTML = `Time:${minutes}:${secounds}`;
        time--;
    }
}


// -- START GAME RULES --

document.getElementById("btn-start").addEventListener("click", startGame);
document.getElementById("btn-reset").addEventListener("click", resetGame);

// Funtion that will start or re-resart the game when click in start button
function startGame() {
    loadGame();
    resetGame();
}

function resetGame() {
    gameGrid.innerHTML = "";
    loadGame();
}




// -- MATCHING GAME RULES --

let gameGrid =document.querySelector(".game-grid");

let cardElements = [ "card1", "card2", "card3", "card4", "card5", "card6", "card7", "card8" ];


/**
 * Function that creates each face of the card
 * returns tag and className for each card face.
 */
function createElement(tag, className) {
    let element = document.createElement(tag);
    element.className = className;
    return element;

}

let firstCard = "";
let secondCard = "";


/**
 * Function that will check both revealed cards
 * Will keep revealed if cards macthing on click event
 * Will hide if cards don't macthing on click event
 */
function checkCards(){
    let firstCardElement = firstCard.getAttribute("data-element");
    let secondCardElement = secondCard.getAttribute("data-element");

    if ( firstCardElement === secondCardElement){

        firstCard = "";
        secondCard = "";

    } else {
        
        setTimeout(function(){
            firstCard.classList.remove("card-reveal");
            secondCard.classList.remove("card-reveal");

            firstCard = "";
            secondCard = "";
        },500);
    }

};

/**
 * Function that creates flip condition for each card,
 * Allows only to flip 2 cards at a time
 */
function cardReveal({target}){
    if (target.parentNode.className.includes("card-reveal")){
        return;
    }

    if (firstCard === ""){

        target.parentNode.classList.add("card-reveal");
        firstCard = target.parentNode;

    } else if (secondCard === "") {
        target.parentNode.classList.add("card-reveal");
        secondCard = target.parentNode;
    }

    checkCards();

}

/**
 * Function that creates each card
 * add click event to flip each card
 * set attribute data-element
 */
function createCard(cardElement) {
    let card = createElement("div", "card");
    let front = createElement("div", "face front");
    let back = createElement("div", "face back");

    front.style.backgroundImage = `url(' ../assets/images/${cardElement}.jpg')`;

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener("click", cardReveal);
    card.setAttribute("data-element", cardElement)

    return card;
}

/**
 * Function that duplicate each card, shuffle entire cards array and load the final 
 * array to the display game area
 */
function loadGame() {
    let duplicatecardElements =[ ...cardElements, ...cardElements];

    let shuffledArray = duplicatecardElements.sort(function() {return Math.random()-0.5});

    shuffledArray.forEach(function(cardElement) {
        let card = createCard(cardElement);
        gameGrid.appendChild(card);
    });
}





