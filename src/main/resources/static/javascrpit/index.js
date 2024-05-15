document.addEventListener("DOMContentLoaded", function() {
    let moreButtons = document.querySelectorAll(".buttonMore");
    let lessButtons = document.querySelectorAll(".buttonLess");
    let qtdeElements = document.querySelectorAll(".qtde");

    moreButtons.forEach(function(button, index) {
        button.addEventListener("click", function() {
            let qtde = parseInt(qtdeElements[index].innerText);
            qtde += 1;
            qtdeElements[index].innerText = qtde;
        });
    });

    lessButtons.forEach(function(button, index) {
        button.addEventListener("click", function() {
            let qtde = parseInt(qtdeElements[index].innerText);
            if (qtde > 0) {
                qtde -= 1;
                qtdeElements[index].innerText = qtde;
            }
        });
    });
});
