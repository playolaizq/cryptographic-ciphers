/**
 * Given an alphabet it returns the encoded alphabet based on the Polybius Square.
 *
 * @param {string} alphabet
 */
function encodeAlphabet(alphabet) {
  const matrixLength = Math.sqrt(alphabet.length);
  const encodedAlphabet = [];
  let index = 0;

  for (let i = 1; i < matrixLength + 1; i++) {
    for (let j = 1; j < matrixLength + 1; j++) {
      encodedAlphabet.push({
        char: alphabet[index],
        code: String(i) + j
      });
      index++;
    }
  }

  return encodedAlphabet;
}

/**
 * It encodes a sentence using Polybius Square alphabet.
 *
 * @param {string} sentence 
 * @param {string} encodedAlphabet 
 */
function encode(sentence, encodedAlphabet) {
  return sentence
    .toLowerCase()
    .split('')
    .map((char) => {
      const encoded = encodedAlphabet.find((encoded) => encoded.char == char);
      return encoded?.code;
    })
    .filter(Boolean)
    .join('');
}

/**
 * It decodes an encoded sentence using Polybius Square alphabet.
 *
 * @param {string} encodedSentence
 * @param {string} encodedAlphabet
 */
function decode(encodedSentence, encodedAlphabet) {
  return encodedSentence
    .match(/.{1,2}/g)
    .map((code) => {
      const encoded = encodedAlphabet.find((encoded) => encoded.code == code);
      return encoded?.char;
    })
    .filter(Boolean)
    .join('');
}

const DEFAULT_ALPHABET = 'abcdefghijklmnopqrstuvwxyz0123456789';

export function PolybiusSquare(alphabet) {
  const encodedAlphabet = encodeAlphabet(alphabet || DEFAULT_ALPHABET);
  
  return {
    encode: (sentence) => encode(sentence, encodedAlphabet),
    decode: (encodedSentence) => decode(encodedSentence, encodedAlphabet)
  }
}
