import books from "./books.js";

const container = document.querySelector("ul");

container.innerHTML = "";

books.forEach(function (book) {
    container.innerHTML += `<li><span>${book.title} ${book.isbn}</span> <i class="fa fa-trash" data-item ="${book}"></li>`;
});


  const trashCans = document.querySelectorAll("li i");

  trashCans.forEach(function (can) {
        can.addEventListener("click", removeFromList);
    });

    function removeFromList(event) {
        console.log(event);

        const deleteItem = event.target.dataset.book;

        const newList = books.filter (function (book) {
            if (deleteItem !== book) {
                return true;
            }
        });
    }


    
    
    











 