const wordArray = ['One', 'Three', "Four", 'Thirteen'];

const getLongestWord = (wordArray) => {
    // wordArray.sort((a, b) => {
    //     return b.length - a.length;
    // });

    // return wordArray[0];

    ////////////////////////////////////////////

    let longestWord = '';

    for(let word of wordArray) {
        if(word.length > longestWord.length) {
            longestWord = word;
        }
    }

    return longestWord;
};

console.log(getLongestWord(wordArray));