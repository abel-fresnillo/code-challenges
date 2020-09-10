// Complete the sockMerchant function in the editor below.
//
// It must return an integer representing the number of matching pairs of socks that are available.
//
// Parameter(s):
//
// n: the number of socks in the pile
// ar: the colors of each sock

const stockMerchant = (num, socks) => {
    let matches = [];
    let counter = 0;

    for(let i = 0; i <= num; i++) {
        if(!matches.includes(socks[i])) {
            matches.push(socks[i]);
        } else {
            counter++;
            const index = matches.indexOf(socks[i])
            matches.splice(index, 1)
        }
    }

    console.log(counter);
}

const numberOfSocks = 10;
const socks = [1, 1, 3, 1, 2, 1, 3, 3, 3, 3];

stockMerchant(numberOfSocks, socks);