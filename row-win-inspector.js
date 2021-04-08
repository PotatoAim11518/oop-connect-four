export default class RowWinInspector {
  constructor(columns) {
    this.columns = columns;
  }

  inspect() {
    for (let row = 0; row < 6; row++) {
      let col0 = this.columns[0].getTokenAt(row);
      let col1 = this.columns[1].getTokenAt(row);
      let col2 = this.columns[2].getTokenAt(row);
      let col3 = this.columns[3].getTokenAt(row);
      if (col0 === col1 && col1 === col2 && col2 === col3 && col0 !== null) {
        return col0;
      }
    }
    return 0;
  }
}
