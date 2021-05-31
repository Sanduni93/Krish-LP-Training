   
let thirdLargest = (ArrayString) => {
    let len = ArrayString.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (ArrayString[j] > ArrayString[j + 1]) {
                let tmp = ArrayString[j];
                ArrayString[j] = ArrayString[j + 1];
                ArrayString[j + 1] = tmp;
            }
        }
    }
    return ArrayString[len-3];
};

console.log(thirdLargest([12, 34, 435,1,331, 12, 3400, 2313, 433, 945,823]));


