import Column from "./column.js";

export default class ColumnWinInspector {
    constructor(column) {
        this.column = column;
    }

    inspect() {
        const columnEntries = this.column.array.join("");
        if (columnEntries.includes("1111")) {
            return 1;
        }
        if (columnEntries.includes("2222")) {
            return 2;
        }
        return 0;
    }
}
