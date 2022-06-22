function findMax() {
    let max = -Infinity;

    for(let i = 0; i < arguments.length; i++){
        if(arguments[i] > max){
            max = arguments[i];
        }
    }
    return max;
}

console.log(findMax(1,2,3,4,5,6,7,8,9,10))