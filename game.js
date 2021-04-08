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
    }

    getName() {
        return `${this.player1} vs. ${this.player2}`;
    }

    playInColumn() {
        const topBar = document.getElementById("click-targets");
        topBar.addEventListener("click", event => {
            let colIndex = event.target.id.slice("-")[1];
            this.columns[colIndex].add();

            getTokenAt(row, col) {
                let token = this.columns[colIndex]

            }
        })

        if (this.currentPlayer === 1) {
            this.currentPlayer = 2;
        } else {
            this.currentPlayer = 1;
        }
    }

}
