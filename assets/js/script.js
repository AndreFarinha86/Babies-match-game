// -- MODALS RULES --

// MODALS -- VARIABLES --
let modalOpen = document.querySelectorAll(".modal-open"); // Get the button that opens the modal
let modalClose = document.querySelectorAll(".modal-close"); // Get the button that closes the modal


// When the user clicks the button, open the modal 
modalOpen.forEach(function(btn){
    btn.onclick = function() {
        let modal = btn.getAttribute("data-modals");

        document.getElementById(modal).style.display = "block";
    };
});


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

// OPEN/QUIT -- VARIABLES --
let playGame = document.querySelectorAll(".game-open"); // Get the button that opens the game area and close the initial Menu and Modal
let quitGame = document.querySelectorAll(".game-close"); // Get the button that close the game area and open the initial Menu

// When the user clicks the Beginner, Intermediate or Advanced buttons, open the game area and close the initial Menu and Modal
function choiceGame () {

    let openGame = document.getElementById("game-area");
    openGame.classList.remove("hidden");

    let closeMenu = document.getElementById("start-menu");
    closeMenu.classList.add("hidden");

    let closeModal = document.getElementById("modal1");
    closeModal.style.display="none";
}


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

// Game parameters for each level
const gameLevelParameters = [
    {gameLevel:1, cardsNumber: 10, timeLimit: 20},
    {gameLevel:2, cardsNumber: 12, timeLimit: 15},
    {gameLevel:2, cardsNumber: 14, timeLimit: 10},
]

// Function that will allocate the game level parameters to time and cards Number functions
function choiceDifficulty(difficulty) {
    let gameLevel;
        if(difficulty === "beginner"){
            gameLevel = 1;
        } else if(difficulty === 'intermediate') {
            gameLevel = 2;
        } else if(difficulty === "advanced") {
            gameLevel = 3;
        } 
        
       let gameTime = gameLevelParameters[gameLevel - 1].timeLimit;
       choiceGame ();
       timeLevel(gameTime);

       console.log(gameLevel);
    console.log(gameTime);
    }
    

// Function that will run and dispaly the Game time
function timeLevel(gameTime) {
    let time = gameTime * 60; 
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



// -- REST GAME RULES --
document.getElementById("btn-reset").addEventListener("click", resetGame);

// Funtion that will reset the game when click in reset button
function resetGame() {
    gameGrid.innerHTML = "";
    loadGame();
}




// -- MATCHING GAME RULES --

//MATCHING GAME -- VARIABLES --
let gameGrid =document.querySelector(".game-grid");
let cardElements = [ "card1", "card2", "card3", "card4", "card5", "card6", "card7", "card8" ];
let firstCard = "";
let secondCard = "";


//Function that creates each face of the card and returns tag and className for each card face.
function createElement(tag, className) {
    let element = document.createElement(tag);
    element.className = className;
    return element;

}


//Function that will check both revealed cards, Will keep revealed if cards macthing on click event, Will hide if cards don't macthing on click event
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


//Function that creates flip condition for each card, Allows only to flip 2 cards at a time
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


//Function that creates each card, add click event to flip each card and set attribute data-element
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


//Function that duplicate each card, shuffle entire cards array and load the final array to the display game area
function loadGame() {
    let duplicatecardElements =[ ...cardElements, ...cardElements];

    let shuffledArray = duplicatecardElements.sort(function() {return Math.random()-0.5});

    shuffledArray.forEach(function(cardElement) {
        let card = createCard(cardElement);
        gameGrid.appendChild(card);
    });
}





