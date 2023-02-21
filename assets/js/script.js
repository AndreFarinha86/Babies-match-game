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
