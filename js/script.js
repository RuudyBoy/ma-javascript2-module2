import games from "./books.js";


const container = document.querySelector(".container");

games.forEach(function (game) {
    container.innerHTML += `<li>${game} Rating: ${game} <i class="fa fa-trash" data-item="${game}"></li>`;
});

const trashCans = document.querySelectorAll("li i");

    trashCans.forEach(function (can) {
        can.addEventListener("click", removeFromList);
    });

    function removeFromList() {
    
        const deleteThisItem = event.target.dataset.game;
    
        const newList = games.filter(function (game) {
            if (deleteThisItem !== game) {
                return true;
            }
        });
    }
    











 