import Column from "./column";

export default class Game {

    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
        this.currentPlayer = 1;
        this.columns = [];
        (function () {
            for (let i = 0; i < 7; i++) {
                this.columns.push(new Column());
            }
        })();
        const topBar = document.getElementById("click-targets");
        topBar.addEventListener("click", event => {
            let colIndex = event.target.id.slice("-")[1];
        })
    }

    getName() {
        return `${this.player1} vs. ${this.player2}`;
    }

    playInColumn() {
        this.columns[colIndex].add();

        if (this.currentPlayer === 1) {
            this.currentPlayer = 2;
        } else {
            this.currentPlayer = 1;
        }
    }
    getTokenAt(row, col) {
        // let token = this.columns[colIndex].getTokenAt(row);
        return this.columns[col].getTokenAt(row);
    }

}
