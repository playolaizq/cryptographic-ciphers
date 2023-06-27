const PolybiusSquare = require('./polybius-square/polybius-square');

const sentence = 'Hello World';
const encodedSentence = PolybiusSquare().encode(sentence);
console.log('encodedSentence', encodedSentence);

const decodedSentence = PolybiusSquare().decode(encodedSentence);
console.log('decodedSentence', decodedSentence);
