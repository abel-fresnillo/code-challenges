const reverseInt = (num) => {
    return parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num);
}

console.log(reverseInt(-123));