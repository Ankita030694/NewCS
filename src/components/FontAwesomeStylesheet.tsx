/**
 * Font Awesome CSS, loaded only by the few templates that still use `fa-*` icon classes
 * (resources articles, author page, privacy, terms, delete-account, app-loan hub).
 * It used to sit in the root layout as a render-blocking stylesheet on every page.
 * React 19 hoists this <link> into <head> and de-duplicates it via `precedence`.
 */
export default function FontAwesomeStylesheet() {
  return (
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
      integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
      crossOrigin="anonymous"
      referrerPolicy="no-referrer"
      precedence="default"
    />
  );
}
