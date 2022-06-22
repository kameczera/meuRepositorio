function returnEvenValues(array){
    let evenNums = [];
    let oddNums = [];
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 === 0 ){
            evenNums.push(array[i]);
        }else{
            oddNums.push(array[i]);
        }
    }
    console.log('os números pares são ' + evenNums);
    console.log('os números impares são ' + oddNums);
}
let array = [1, 2 ,3, 4 , 5 ,6, 7 ,8,9 ];
returnEvenValues(array);

function sum(x,y,z){
    return x + y + z;
}

const numbers = [1,2,3];

console.log(sum(...numbers)); 

/* spread: uma forma de lidar separadamente com elementos
o que era parte de uma array se torna um elemento independente 
Nesse caso, os elementos do arrays se juntaram para efetuar a soma*/

confereTamanho = (...args) => {
    console.log(args.length)
}

confereTamanho(2,3,4)

/* o que era um elemento independente se torna um array*/