import { getFormValues } from '../../lib/form';
import { PolybiusSquare } from './lib/cipher';

const encodedSentenceContainerElement = document.getElementById('encoded-sentence-container');
const encodedSentenceElement = document.getElementById('encoded-sentence');

window.handleEncryptSubmit = function handleEncryptSubmit(event) {
  event.preventDefault();

  const formValues = getFormValues(event);

  const encodedSentence = PolybiusSquare(formValues.alphabet).encode(formValues.sentence);
  encodedSentenceElement.textContent = encodedSentence;

  encodedSentenceContainerElement.style.color = 'black';
  encodedSentenceElement.style.fontStyle = 'none';
}
