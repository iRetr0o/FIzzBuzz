const fs = require("fs");

class Reader {
    static readJsonFile(filePath) {
        const readData = fs.readFileSync(filePath);
        const newList = JSON.parse(readData);
        return newList;
    }
}

module.exports = Reader;
