const firstValue = prompt ("What is the first value?");
const operator = prompt ("what is  the operator?");
const secondValue = prompt ("what is the second value?");


if(operator === "+"){
console.log(parseInt(firstValue) + parseInt(secondValue));
}
else {
    console.log(parseInt(firstValue) - parseInt(secondValue));
}