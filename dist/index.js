"use strict";
console.log("Running...");
// Callback function
const emojis = ["😁", "😊", "😍", "😒", "🤣"];
// const emojis: string[] = [];
function initialFunction(values, cb) {
    const valueArray = [];
    if (values.length > 0) {
        values.map((items, index) => {
            valueArray.push(index + 1);
        });
        cb(valueArray);
    }
    else {
        console.warn("Empty Array...");
    }
}
initialFunction(emojis, (printValues) => {
    console.info(`Call back processing`);
    for (let count = 0; count < printValues.length; count++) {
        setTimeout(() => {
            console.log(`\n${emojis[count].repeat(printValues[count])}`);
        }, 1500);
    }
});
