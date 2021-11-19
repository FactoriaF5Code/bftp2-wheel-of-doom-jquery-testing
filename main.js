


$(document).ready(function () {

    let coderArray = ["Alexia", "Alisa", "Ana C.", "Anna G.", "Candy", "Carmen", "Desirée", "Faby", "Gabrielle", "Gràcia", "Helen", "Joana", "Judith", "Kristina", "Laura C.", "Laura M.", "Marisa", "Rosa", "Sandra", "Sara", "Sonia", "Tamara", "Valentina", "Yuliya"];

    let wheelOfDoom = new WheelOfDoom(coderArray);

    let buttonToChooseCoders = $('.buttonToChooseCoders');
    let restartButton = $('.restartButton');
    let winnerSection = $('.winnerSection');
    let availableCoders = $('.availableCoders');

    function showCoders(coders) {
        availableCoders.html(coders.map(coder => `<div>${coder}</div>`));
        restartButton.hide();
    }

    showCoders(wheelOfDoom.remainingCoders());

    buttonToChooseCoders.on("click", () => {
        winnerSection.html(wheelOfDoom.chooseCoder());
        showCoders(wheelOfDoom.remainingCoders());
        if (wheelOfDoom.remainingCoders().length === 0) {
            showRestartButton()
        }
    });

    restartButton.on("click", () => {
        wheelOfDoom.restart()
        winnerSection.empty()
        showCoders(wheelOfDoom.remainingCoders());
        showChooseButton()
    });

    function showRestartButton() {
        buttonToChooseCoders.hide()
        restartButton.show()
    }

    function showChooseButton() {
        buttonToChooseCoders.show()
        restartButton.hide()
    }

});