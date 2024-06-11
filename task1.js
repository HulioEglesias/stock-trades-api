const inputs = ['ababaa'];
const input = inputs[0];

const prefixes = input.split('').reduce( (arr, ch) => {
  const result = !arr.length ? ch : arr[arr.length - 1] + ch;
  arr.push(result);
  return arr;
}, [''])


const getMatchedSuffixes = () => {
  const result = [];
  for(const prefix of prefixes) {
    const suffix = input.substring(prefix.length, input.length)
    
    let lastStr = '';
    for(let i = 0; i < suffix.length; i++) {
      // push char when not match
      if(suffix[i] !== input[i]) {
        result.push(lastStr);
        lastStr = '';
        break;
      } else { // append char when match
        lastStr += suffix[i];
      }

      // append char and push when it's the last char
      if(i === suffix.length - 1) {
        if(!lastStr) lastStr += suffix[i];
        result.push(lastStr);
      }
    }
  }
  return result;
} 


const matchedSuffixes = getMatchedSuffixes()

const getSumOfSuffixChars = matchedSuffixes.reduce( (sum, str) => sum + str.length, 0)


console.log(getSumOfSuffixChars)