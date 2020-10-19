const isPalindrome = (num) => {
    const valueArray = num.toString().split('');

    if(num < 0) {
        return false;
    }

    if(valueArray.length === 0 || valueArray.length === 1) {
        return true;
    }

    for(let i = 0; i < valueArray.length / 2; i++) {
        let reverseIndex = valueArray.length - i -1;
        if(valueArray[i] !== valueArray[reverseIndex]) {
            return false;
        }

        return true;
    }
}

console.log(isPalindrome(123));