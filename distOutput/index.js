"use strict";
class Players {
    constructor(data) {
        this.data = data;
    }
    logTheData() {
        return this.data;
    }
    filterOne(id) {
        return this.data.filter((item) => item.id !== id);
    }
}
const forwards = new Players([
    { name: "chid", position: "forward", id: 23 },
    { name: "nwaneri", position: "midfield", id: 33 },
]);
console.log(forwards.logTheData());
