window.addEventListener('DOMContentLoaded', event => {

    let playerTurn = "black";

    const clickTargets = document.querySelectorAll('.click-target');
    console.log(clickTargets);
    //clickTargets.forEach(target => {
    //    target.addEventListener('mouseenter', event => {
    //        // Put column full logic here
    //        event.target.classList.add('full');
    //    })
    //    target.addEventListener('mouseleave', event => {
    //        // Put column full logic here
    //        event.target.classList.remove('full');
    //    })
    //})

    const clickTargetTurn = document.getElementById("click-targets");
    clickTargetTurn.addEventListener("mouseenter", event => {
        event.target.classList.add('black');
    })

    clickTargets.forEach( target => {
      target.addEventListener('click', event => {
        // match the click target's column number with the board square's column
        let targetColumn = event.target.id[event.target.id.length - 1];
        let targetSquare = document.getElementById(`square-5-${targetColumn}`);
        let newDiv = document.createElement('div');
        newDiv.setAttribute('class', 'token');
        newDiv.setAttribute('class', 'black');
        targetSquare.appendChild(newDiv);
        // console.log()
    })
    })

    const boardSquares = document.getElementById("board-squares");





})
