//1. Let's Form a Sentence
let word1 = 'JavaScript';
let second = 'is';
let third = 'awesome';
let fourth = 'and';
let fifth = 'I';
let sixth = 'love';
let seventh = 'it!';

console.log(word1 + " " + second + " " + third + " " + fourth + " " + fifth + " " + sixth + " " + seventh)


// 2. Index Accessing - 1 by 1
let word2 = 'wow JavaScript is so cool';
let firstWord = word2[0] + word2[1] + word2[2];
let secondWord = word2[4] + word2[5] + word2[6] + word2[7] + word2[8] + word2[9] + word2[10] + word2[11] + word2[12] + word2[13];
let thirdWord = word2[15] + word2[16];
let fourthWord = word2[18] + word2[19];
let fifthWord = word2[21] + word2[22] + word2[23] + word2[24];

console.log('First Word: ' + firstWord);
console.log('Second Word: ' + secondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);


// 3. Breaking Sentence (Again) using Substring
let word3 = 'wow JavaScript is so cool';
let firstWord3 = word3.substring(0, 3);
let secondWord3 = word3.substring(4, 14);
let thirdWord3 = word3.substring(15, 17);
let fourthWord3 = word3.substring(18, 20);
let fifthWord3 = word3.substring(21, 25);

console.log('First Word: ' + firstWord3);
console.log('Second Word: ' + secondWord3);
console.log('Third Word: ' + thirdWord3);
console.log('Fourth Word: ' + fourthWord3);
console.log('Fifth Word: ' + fifthWord3);


// 4. Breaking Sentence (yet Again) and Count Each Length
let word4 = 'wow JavaScript is so cool';
let firstWord4 = word4.substring(0, 3);
let secondWord4 = word4.substring(4, 14);
let thirdWord4 = word4.substring(15, 17);
let fourthWord4 = word4.substring(18, 20);
let fifthWord4 = word4.substring(21, 25);

let firstWordLength = firstWord4.length;
let secondWordLength = secondWord4.length;
let thirdWordLength = thirdWord4.length;
let fourthWordLength = fourthWord4.length;
let fifthWordLength = fifthWord4.length;

console.log('First Word: ' + firstWord4 + ', with length: ' + firstWordLength); 
console.log('Second Word: ' + secondWord4 + ', with length: ' + secondWordLength); 
console.log('Third Word: ' + thirdWord4 + ', with length: ' + thirdWordLength); 
console.log('Fourth Word: ' + fourthWord4 + ', with length: ' + fourthWordLength); 
console.log('Fifth Word: ' + fifthWord4 + ', with length: ' + fifthWordLength); 
