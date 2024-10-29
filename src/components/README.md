# How to use components

Use the loader method within each component with the `containerId` referring to the container that will hold the component, and optionally the `formId` if you want to link the component to a `<form>`.

On the following example, we have a "Cipher Page" which contains a form and loads a button:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" type="image/png" href="/src/assets/logo.png" />
    <link rel="stylesheet" href="/globals.css">
    <link rel="stylesheet" href="./cipher-page.css" />
    <title>Cipher Page | Cryptography Ciphers</title>
  </head>
  <body>
    <main>
      <form id="cipher-form">
        <div id="cipher-form-button"></div>
      </form>
    </main>
    <script type="module">
      import { loadButton } from '../../components/button/button';
      loadButton('cipher-form-button', 'cipher-form');
    </script>
  </body>
</html>
```
