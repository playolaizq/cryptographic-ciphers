import { getFormValues } from '../../utils/form.js';
import { PolybiusSquare } from './utils/cipher.js';

const encodedSentenceContainerElement = document.getElementById('encoded-sentence-container');
const encodedSentenceElement = document.getElementById('encoded-sentence');

function handleEncryptSubmit(event) {
  event.preventDefault();

  const { alphabet, sentence } = getFormValues(event);

  const encodedSentence = PolybiusSquare(alphabet).encode(sentence);

  if (encodedSentence) {
    encodedSentenceElement.textContent = encodedSentence;
    encodedSentenceContainerElement.style.display = 'flex';
    encodedSentenceContainerElement.style.color = '#000000';
    encodedSentenceElement.style.fontStyle = 'none';
  }
}

document.getElementById('polybius-form').addEventListener('submit', handleEncryptSubmit);
