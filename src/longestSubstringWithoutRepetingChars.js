let str = "abcabcbb";

const getLongestSubstring = (str) => {
    const strArray = str.split('');

    let currentSubstring = [];
    let longestSubstring = [];

    for(let char of strArray) {
        if(!currentSubstring.includes(char)) {
            currentSubstring.push(char);
        } else {
            if (longestSubstring.length < currentSubstring.length) {
                longestSubstring = currentSubstring;
            }

            currentSubstring = [char];
        }
    }

    return longestSubstring.join('');
};

console.log(getLongestSubstring(str));