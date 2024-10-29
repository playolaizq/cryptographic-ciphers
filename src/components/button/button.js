import { loadCSS, loadHTML } from '../../utils/dom.js';
import { env } from '../../utils/env.js';

const { BASE_URL } = env();

export function loadButton(containerId, formId) {
  loadCSS(`${BASE_URL}/src/components/button/button.css`);

  loadHTML(`${BASE_URL}/src/components/button/button.html`, (html) => {
    const container = document.getElementById(containerId);
    container.innerHTML = html;
    container.style.width = '100%';

    if (formId) {
      const button = container.querySelector('button');
      if (button) {
        button.setAttribute("form", formId);
      }
    }
  });
}
