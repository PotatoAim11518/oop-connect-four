import { Game } from './game.js';

let game = undefined;

window.addEventListener('DOMContentLoaded', event => {

    const firstPlayer = document.getElementById("player-1-name");
    const secondPlayer = doucment.getElementById("player-2-name");
    const newGameButton = document.getElementById("new-game");

    firstPlayer.addEventListener("keyup", event => {
        if (firstPlayer.value && secondPlayer.value) {
            newGameButton.setAttribute("disabled", "false");
        } else {
            newGameButton.setAttribute("disabled", "true");
        }
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

})
