export default class Column {
    constructor(array = [null, null, null, null, null, null]) {
        this.array = array

    }

    add() { // stores the player in the bottom-most slot in the column
        
        for (let i = this.array.length - 1; i >= 0; i--) {
            if (this.array[i] === null) {
                this.array[i] = game.currentPlayer;
            }

        }
    }

    getTokenAt(row) {

    }
}


// column1 = {key: []} // as we add tokens, unshift new things in

// column2 = { 0: null,  1: null, 2: 2, } // <=

// new Column([])

// const column0 = new Column()
// column1.array[0] = '1'
// const column1 = new Column()
// const column2 = new Column()
// const column3 = new Column()
// const column4 = new Column()
// const column5 = new Column()
// const column6 = new Column()
