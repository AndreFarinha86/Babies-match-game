let playBtn = document.getElementsByClassName("btn-play");
let modalPlay = document.getElementsByClassName("modal-play");

playBtn.addEventListener("click", function(){
    modalPlay.classList.add("active");
});