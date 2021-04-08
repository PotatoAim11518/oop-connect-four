import Column from "./column.js";

export default class Game {

    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
        this.currentPlayer = 1;
        this.columns = [];
        this.winnerNumber = 0;

        for (let i = 0; i < 7; i++) {
            this.columns.push(new Column());
        }

        const topBar = document.getElementById("click-targets");
        topBar.addEventListener("click", event => {
            let colIndex = event.target.id.slice("-")[1];
        })
    }

    getName() {
        if (this.winnerNumber === 3) {
            return `${this.player1} ties with ${this.player2}!`;
        } else {
            return `${this.player1} vs. ${this.player2}`;
        }
    }

    checkForTie() {
        for (let column of this.columns) {
            if (!column.isFull()) {
                return false;
            }
        }
        this.winnerNumber = 3;
        return true;
    }

    playInColumn(col) {
        this.columns[col].add(this.currentPlayer);
        if (this.currentPlayer === 1) {
            this.currentPlayer = 2;
        } else {
            this.currentPlayer = 1;
        }
        this.checkForTie();
    }

    getTokenAt(row, col) {
        // let token = this.columns[colIndex].getTokenAt(row);
        return this.columns[col].getTokenAt(row);
    }

    isColumnFull(col) {
        return this.columns[col].isFull()
    }
}
