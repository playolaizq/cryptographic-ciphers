import { renderText } from '../../utils/dom.js';
import { getFormValues } from '../../utils/form.js';
import { MorseCode } from './utils/cipher.js';

const encodedSentenceContainerElement = document.getElementById('encoded-sentence-container');
const encodedSentenceElement = document.getElementById('encoded-sentence');

function handleEncryptSubmit(event) {
  event.preventDefault();

  const { sentence } = getFormValues(event);

  const encodedSentence = MorseCode().encode(sentence);

  renderText({
    textContainer: encodedSentenceContainerElement,
    textElement: encodedSentenceElement,
    textValue: encodedSentence
  });
}

document.getElementById('morse-form').addEventListener('submit', handleEncryptSubmit);
