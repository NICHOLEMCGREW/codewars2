const vowels = ["a", "e", "i", "o", "u"]

function vowelsCounter(text) {
  let counter = 0;
  for (let letter of text.toLowerCase()) {
    if (vowels.includes(letter)) {
        return count ++
    }
  }
}

console.log(vowelsCounter("abracadabra"));