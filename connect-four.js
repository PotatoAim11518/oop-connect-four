import Game from "./game.js";

let game = undefined;

let updateUI = function () {
    const topBar = document.getElementById("click-targets");
    const boardHolder = document.getElementById("board-holder");
    const gameName = document.getElementById("game-name");

    if (game === undefined) {
        boardHolder.classList.add("is-invisible");
    } else {
        boardHolder.classList.remove("is-invisible");
        gameName.innerHTML = game.getName();
    }

    if (game.currentPlayer === 1) {
        topBar.classList.add('black');
        topBar.classList.remove('red');
    }

    if (game.currentPlayer === 2) {
        topBar.classList.add('red');
        topBar.classList.remove('black');
    }

    for (let row = 0; row < 6; row++) {
        for (let column = 0; column <= 6; column++) {
            const square = document.getElementById(`square-${row}-${column}`);
            const token = game.getTokenAt(row, column);
            square.innerHTML = ''
            let gamePiece = document.createElement('div');
            if (token === 1) {
                gamePiece.classList.add('token', 'black');
                square.appendChild(gamePiece);
            }
            if (token === 2) {
                // let gamePiece = document.createElement('div');
                gamePiece.classList.add('token', 'red');
                square.appendChild(gamePiece);
            }

        }

    }

};

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

    newGameButton.addEventListener("click", (event) => {
        game = new Game(firstPlayer.value, secondPlayer.value);
        updateUI();
    });

    const topBar = document.getElementById("click-targets");
    topBar.addEventListener("click", event => {
        if (event.target.id.startsWith("column-")) {
            let number = Number.parseInt(event.target.id.split('-')[1]);
            game.playInColumn(number);
        }
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
