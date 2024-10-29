import { renderText } from '../../utils/dom.js';
import { getFormValues } from '../../utils/form.js';
import { PolybiusSquare } from './utils/cipher.js';

const encodedSentenceContainerElement = document.getElementById('encoded-sentence-container');
const encodedSentenceElement = document.getElementById('encoded-sentence');

function handleEncryptSubmit(event) {
  event.preventDefault();

  const { alphabet, sentence } = getFormValues(event);

  const encodedSentence = PolybiusSquare(alphabet).encode(sentence);

  renderText({
    textContainer: encodedSentenceContainerElement,
    textElement: encodedSentenceElement,
    textValue: encodedSentence
  });
}

document.getElementById('polybius-form').addEventListener('submit', handleEncryptSubmit);
