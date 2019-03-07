//sorts a string by the character frequency and returns the characters in frequency order
// example input = 'pool'
// example output = 'oopl'

function sortString(s){
  // if an empty string is passed in, return 'null'
  if (!s.length > 0) {
    return null;
  }
  // initializes with the first letter of string, with a frequency of 1
  // freq is a multidimensional array whose children are a 2d array containing [unique character, frequency]
  let freq = [[s[0], 1]];
  let maxFreq = 1;
  let sortedString = '';

  let j;

  //iterates over input string
  for (let i = 1; i < s.length; i++) {
    //iterates backwards over freq multidimensional array
    for (j = freq.length - 1; j >= 0; j--) {
      // if current string character is in the array, increment the frequency
      if (freq[j][0] === s[i]) {
        freq[j][1]++;
        // keeps track of the maximum frequency so far
        if (freq[j][1] > maxFreq) maxFreq = freq[j][1];
        break;
      }
    }
    // if we iterate through the entire loop, j will become -1.  This tells us to
    // append the new unique character to freq. Also, ignores spaces.
    if (j === -1 && s[i] !== ' ') freq = [...freq, [s[i], 1]];
  }

  //at this point, we have a multidimensional array that contains the an array
  //filled with unique letters at index 0, and the frequency of those letters
  //at index 1. We also have a variable storing the maximum frequency encountered.

  while (maxFreq > 0) {
    // iterates over freq to find the unique character(s) with with the maxFreq
    for (let l = 0; l < freq.length; l++){
      let tempMax = maxFreq;
      if (freq[l][1] === tempMax) {
        //appends the character to the final sorted character string
        while (tempMax > 0) {
          sortedString += freq[l][0];
          tempMax--;
        }
      }
    }
    maxFreq--;
  }
  return sortedString;
}

console.log(sortString('p o ooll'));
