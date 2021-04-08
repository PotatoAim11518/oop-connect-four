export default class DiagonalWinInspector {
  constructor(columns) {
    this.columns = columns;
  }

  inspect() {
    // diagonal-left
    for (let row = 0; row < 4; row++) {
      let col0 = this.columns[0].getTokenAt(row);
      let col1 = this.columns[1].getTokenAt(row + 1);
      let col2 = this.columns[2].getTokenAt(row + 2);
      let col3 = this.columns[3].getTokenAt(row + 3);
      if (col0 === col1 && col1 === col2 && col2 === col3 && col0 !== null) {
        return col0;
      }
    }

    // diagonal-right
    for (let row = 0; row < 4; row++) {
      let col0 = this.columns[0].getTokenAt(row + 3);
      let col1 = this.columns[1].getTokenAt(row + 2);
      let col2 = this.columns[2].getTokenAt(row + 1);
      let col3 = this.columns[3].getTokenAt(row);
      if (col0 === col1 && col1 === col2 && col2 === col3 && col0 !== null) {
        return col0;
      }
    }

    return 0;
  }
}
