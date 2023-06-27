function encodeAlphabet(alphabet) {
  const matrixLength = Math.sqrt(alphabet.length);
  const codedAlphabet = [];
  let index = 0;

  for (let i = 1; i < matrixLength + 1; i++) {
    for (let j = 1; j < matrixLength + 1; j++) {
      const char = alphabet[index];
      codedAlphabet.push({ char, code: String(i) + j });
      index++;
    }
  }

  return codedAlphabet;
}

const DEFAULT_ALPHABET = 'abcdefghijklmnopqrstuvwxyz0123456789';

function PolybiusSquare(alphabet = DEFAULT_ALPHABET) {
  const encodedAlphabet = encodeAlphabet(alphabet);
  
  return {
    encode: (sentence) => {
      return sentence
        .toLowerCase()
        .split('')
        .map((char) => {
          const encoded = encodedAlphabet.find((encoded) => encoded.char == char);
          return encoded?.code;
        })
        .filter(Boolean)
        .join('');
    },
    decode: (encodedSentence) => {
      return encodedSentence
        .match(/.{1,2}/g)
        .map((code) => {
          const encoded = encodedAlphabet.find((encoded) => encoded.code == code);
          return encoded?.char;
        })
        .filter(Boolean)
        .join('');
    }
  }
}

function handleEncryptSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const formValues = Object.fromEntries(formData.entries());

  const encodedSentence = PolybiusSquare().encode(formValues.sentence);

  const originalSentenceElement = document.getElementById('original-sentence');
  const encodedSentenceElement = document.getElementById('encoded-sentence');
  originalSentenceElement.textContent = `Original Sentence: ${formValues.sentence}`;
  encodedSentenceElement.textContent = `Encoded Sentence: ${encodedSentence}`;

  event.target.reset();
}
