const wordArray = ['One', 'Three', "Four", 'Thirteen'];

const getLongestWord = (wordArray) => {
    let longestWord = '';

    for(let word of wordArray) {
        if(word.length > longestWord.length) {
            longestWord = word;
        }
    }

    return longestWord;
};

console.log(getLongestWord(wordArray));