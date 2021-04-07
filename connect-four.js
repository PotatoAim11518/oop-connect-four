// import { Game } from "./game.js";

import Game from "./game";

let game = undefined;
let updateUI = function () {
    const boardHolder = window.getElementById("board-holder");
    const gameName = window.getElementById("game-name");

    if (game === undefined) {
        boardHolder.classList.add("is-invisible");
    } else {
        boardHolder.classList.remove("is-invisible");
        gameName.innerHTML = getName();
    }
}

window.addEventListener("DOMContentLoaded", (event) => {
    const form = document.getElementById("form-holder");
    const firstPlayer = document.getElementById("player-1-name");
    const secondPlayer = document.getElementById("player-2-name");
    const newGameButton = document.getElementById("new-game");

    form.addEventListener("keyup", (event) => {

        if (firstPlayer.value && secondPlayer.value) {
            newGameButton.removeAttribute("disabled");
        }
        if (!firstPlayer.value || !secondPlayer.value) {
            newGameButton.setAttribute("disabled", null);
        }
    });

    newGameButton.addEventListener("click", event => {
        game = new Game(firstPlayer.value, secondPlayer.value);
        updateUI();
    })



    //const
    //
    //let playerTurn = "black";
    //
    //// create a game class
    //// and a column class
    //
    //// Logic planning
    //
    //const clickTargets = document.querySelectorAll('.click-target');
    //console.log(clickTargets);
    ////clickTargets.forEach(target => {
    ////    target.addEventListener('mouseenter', event => {
    ////        // Put column full logic here
    ////        event.target.classList.add('full');
    ////    })
    ////    target.addEventListener('mouseleave', event => {
    ////        // Put column full logic here
    ////        event.target.classList.remove('full');
    ////    })
    ////})
    //
    //const clickTargetTurn = document.getElementById("click-targets");
    //clickTargetTurn.addEventListener("mouseenter", event => {
    //    event.target.classList.add('black');
    //})
    //
    //clickTargets.forEach(target => {
    //    target.addEventListener('click', event => {
    //        // match the click target's column number with the board square's column
    //        let targetColumn = event.target.id[event.target.id.length - 1];
    //        let targetSquare = document.getElementById(`square-5-${targetColumn}`);
    //        let newDiv = document.createElement('div');
    //        newDiv.classList.add('token', 'black');
    //        // newDiv.setAttribute('class', 'black');
    //        targetSquare.appendChild(newDiv);
    //        // console.log()
    //    })
    //})
    //
    //const boardSquares = document.getElementById("board-squares");
    //
    //
    //
    //
});
