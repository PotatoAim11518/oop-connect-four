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
    const boardSquares = document.getElementById("board-squares");
    


})
