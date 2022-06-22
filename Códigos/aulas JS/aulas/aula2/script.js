let array = ['string', 1, true];
console.log(array);

array.forEach(n = (item, index) => console.log(item,index))

array.push('novo item');
console.log(array);

array.pop();
console.log(array);
