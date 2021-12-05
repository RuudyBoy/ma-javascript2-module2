import games from "./books.js";


const container = document.querySelector("ul");

games.forEach(function (game) {
    container.innerHTML += `<li> <span> ${game.title} Rating: ${game.isbn} <i class="fa fa-trash" data-item="${game}"></span></li>`;
});

const trashCans = document.querySelectorAll("li span i");

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
    











 