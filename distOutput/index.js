"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
CSV file be like this
1: 1st row will be columns with headings
eg: From, TO, Amount, Company
2 : From now onwards it will be rows
each row will be a record
eg: Akshay, Smaay, 3000, Lioks

*/
const fs_1 = require("fs");
class CSVWriter {
    constructor(columns) {
        this.columns = columns;
        this.csv = this.columns.join(",") + "\n";
    }
    addRows(values) {
        let rows = values.map((value) => this.formatRow(value));
        this.csv += rows.join("\n");
        console.log(this.csv);
    }
    saveToTheFile(filename) {
        (0, fs_1.appendFileSync)(filename, this.csv);
        this.csv = "\n";
        console.log(`file has been saved`);
    }
    formatRow(p) {
        return this.columns.map((col) => p[col]).join(",");
    }
    getCSVValue() {
        console.log(this.csv);
    }
}
const newCSV = new CSVWriter(["id", "amount", "to", "notes"]);
newCSV.addRows([
    {
        id: 121,
        amount: 31313,
        to: "madhes",
        notes: "500Rs",
    },
    {
        id: 2323,
        amount: 5555,
        to: "radhes",
        notes: "1500Rs",
    },
]);
newCSV.saveToTheFile("../data/payments.csv");
