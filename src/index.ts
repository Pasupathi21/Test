console.log("Running...");

// Callback function
const emojis: string[] = ["😁", "😊", "😍", "😒", "🤣"];
// const emojis: string[] = [];

function initialFunction(values:string[], cb: Function){
    const valueArray: number[] = [];
    if(values.length > 0){
        values.map((items, index) => {
            valueArray.push(index + 1);
        })
        cb(valueArray)
    }else{
        console.warn("Empty Array...")
    }
   
}

initialFunction(emojis, (printValues: number[]) => {
    console.info(`Call back processing`);
    for(let count = 0; count < printValues.length; count++){
        setTimeout(() => {
            console.log(`\n${emojis[count].repeat(printValues[count])}`);
        }, 1500);
    }
})
