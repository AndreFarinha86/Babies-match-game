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
        let modal = (btn.closest(".modals").style.display="none");
    };
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
   if (event.target.className === "modals" ) {
    event.target.style.display = "none";
   }
  };


// -- CREATE CARD --

let gameGrid =document.querySelector(".game-grid");

let cardElements = [
    "card1",
    "card2",
    "card3",
    "card4",
    "card5",
    "card6",
    "card7",
    "card8",
];

/**
 * Function that creates each face of the card
 * returns tag and className for each card face.
 */
function createElement(tag, className) {
    let element = document.createElement(tag);
    element.className = className;
    return element;

}

/**
 * Function that creates each card
 * 
 */
function createCard(cardElement) {
    let card = createElement("div", "card");
    let front = createElement("div", "face front");
    let back = createElement("div", "face back");

    front.style.backgroundImage = `url(' ../assets/images/${cardElement}.jpg')`;

    card.appendChild(front);
    card.appendChild(back);

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

loadGame();