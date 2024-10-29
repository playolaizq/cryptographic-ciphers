const alphabet = {
  'A': '.-',
  'B': '-...',
  'C': '-.-.',
  'D': '-..',
  'E': '.',
  'F': '..-.',
  'G': '--.',
  'H': '....',
  'I': '..',
  'J': '.---',
  'K': '-.-',
  'L': '.-..',
  'M': '--',
  'N': '-.',
  'O': '---',
  'P': '.--.',
  'Q': '--.-',
  'R': '.-.',
  'S': '...',
  'T': '-',
  'U': '..-',
  'V': '...-',
  'W': '.--',
  'X': '-..-',
  'Y': '-.--',
  'Z': '--..',
  ' ': '/',
  '0': '-----',
  '1': '.----',
  '2': '..---',
  '3': '...--',
  '4': '....-',
  '5': '.....',
  '6': '-....',
  '7': '--...',
  '8': '---..',
  '9': '----.',
}

const encodedAlphabet = Object
  .entries(alphabet)
  .reduce((acc, [key, value]) => ({ ...acc, [value]: key }), {});

function encode(sentence) {
  return sentence
    .toUpperCase()
    .split('')
    .map((char) => alphabet[char] || '')
    .join(' ');
}

function decode(encodedSentence) {
  return encodedSentence
    .split(' ')
    .map((encodedChar) => encodedAlphabet[encodedChar] || '')
    .join(' ');
}

export function MorseCode() {  
  return {
    encode: (sentence) => encode(sentence),
    decode: (encodedSentence) => decode(encodedSentence)
  }
}
