import { loadCSS, loadHTML } from '../../utils/dom';

export function loadButton(containerId, formId) {
  loadCSS('/src/components/button/button.css');

  loadHTML('/src/components/button/button.html', (html) => {
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
