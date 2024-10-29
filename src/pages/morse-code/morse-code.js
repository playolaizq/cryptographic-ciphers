import { getFormValues } from '../../utils/form.js';
import { MorseCode } from './utils/cipher.js';

const encodedSentenceContainerElement = document.getElementById('encoded-sentence-container');
const encodedSentenceElement = document.getElementById('encoded-sentence');

function handleEncryptSubmit(event) {
  event.preventDefault();

  const { sentence } = getFormValues(event);

  const encodedSentence = MorseCode().encode(sentence);

  if (encodedSentence) {
    encodedSentenceElement.textContent = encodedSentence;
    encodedSentenceContainerElement.style.display = 'flex';
    encodedSentenceContainerElement.style.color = '#000000';
    encodedSentenceElement.style.fontStyle = 'none';
  }
}

document.getElementById('morse-form').addEventListener('submit', handleEncryptSubmit);
