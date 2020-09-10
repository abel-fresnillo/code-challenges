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

    for(i = 0; i <= num; i++) {
        if(!matches.includes(socks[i])) {
            matches.push(socks[i]);
        } else {
            counter++;
            matches.pop(socks[i]);
        }
    }

    console.log(counter);
}

const numberOfSocks = 9;
const socks = [10, 20, 20, 10, 10, 30, 50, 10, 30];

stockMerchant(numberOfSocks, socks);