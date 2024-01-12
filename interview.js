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

// cap 
function capSentence(text) {
    return text.toLowerCase().split(' ').map(x => x[0].toUpperCase() + x.slice(1)).join(' ')
  }
  
  console.log(capSentence('i must confess, this is so much fun.'))

  