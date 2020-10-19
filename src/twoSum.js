const twoSum = (values, target) => {
    for(let i = 0; i < values.length; i++) {
        for(let j = i + 1; j < values.length; j++) {
            if(values[i] + values[j] === target) {
                return [i,j]
            }
        }
    }
}

const values = [2,7,11,15];
const target = 9;

console.log(twoSum(values, target));
