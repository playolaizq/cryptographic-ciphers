export function loadCSS(href) {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = href;
  document.head.appendChild(link);
}

export async function loadHTML(href, callback) {
  fetch(href)
    .then(response => response.text())
    .then(html => {
      callback(html);
    })
    .catch(error => {
      console.error('Error loading HTML:', error);
    });
}

export function renderText({ textContainer, textElement, textValue }) {
  if (textValue) {
    textElement.textContent = textValue;
    textContainer.style.display = 'flex';
    textContainer.style.color = '#000000';
    textElement.style.fontStyle = 'none';
  }
}