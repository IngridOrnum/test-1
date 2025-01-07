//takes in a word and returns true if the word is a palindrome, false if it is not
export function isWordPalindrome(str) {
    const formattedStr = str.toLowerCase();
    return formattedStr === formattedStr.split('').reverse().join('');
}

//takes in a sentence and returns true if the sentence is a palindrome, false if it is not
export function isSentencePalindrome(str) {
    const formattedStr = str.toLowerCase().replace(/[^a-z]/g, '');
    return formattedStr === formattedStr.split('').reverse().join('');
}
