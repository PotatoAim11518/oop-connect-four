import Column from "./column.js";
import ColumnWinInspector from "./column-win-inspector.js";
import RowWinInspector from "./row-win-inspector.js";

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
    }

    getName() {
        if (this.winnerNumber === 3) {
            return `${this.player1} ties with ${this.player2}!`;
        } else if (this.winnerNumber === 2) {
            return `${this.player2} wins!`;
        } else if (this.winnerNumber === 1) {
            return `${this.player1} wins!`;
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

    checkForColumnWin() {
        for (let column of this.columns) {
            const columnUnderInspection = new ColumnWinInspector(column);
            if (columnUnderInspection.inspect() === 1 || columnUnderInspection.inspect() === 2){
                this.winnerNumber = columnUnderInspection.inspect();
                return
            }
        }
    }

    checkForRowWin() {
        const colGroup_0_3 = this.columns.slice(0,4); // array of 4 Column objects containing an array of 6 values
        const colGroup_1_4 = this.columns.slice(1,5);
        const colGroup_2_5 = this.columns.slice(2,6);
        const colGroup_3_6 = this.columns.slice(3);

        const colSlices = [colGroup_0_3, colGroup_1_4, colGroup_2_5, colGroup_3_6]

        for (let slice of colSlices) {
            let inspectSlice = new RowWinInspector(slice);
            console.log(inspectSlice.inspect())
            if (inspectSlice.inspect() > 0) {
                this.winnerNumber = inspectSlice.inspect();
                break;
            }
        }
    }


    playInColumn(col) {
        this.columns[col].add(this.currentPlayer);
        if (this.currentPlayer === 1) {
            this.currentPlayer = 2;
        } else {
            this.currentPlayer = 1;
        }

        this.checkForTie();

        if (this.winnerNumber !== 0) {
            return
        } else {
            this.checkForColumnWin();
        }
        this.checkForRowWin();

    }

    getTokenAt(row, col) {
        // let token = this.columns[colIndex].getTokenAt(row);
        return this.columns[col].getTokenAt(row);
    }

    isColumnFull(col) {
        if (this.winnerNumber === 1 || this.winnerNumber === 2) {
            return true;
        }
        return this.columns[col].isFull()
    }

}
