import './styles.css';

const inputElement = document.getElementById('inputValue') as HTMLInputElement | null;
const displayElement = document.getElementById('displayValue') as HTMLParagraphElement | null;

if (inputElement && displayElement) {
  inputElement.addEventListener('input', () => {
    displayElement.textContent = inputElement.value;
  });
}

if (module.hot) {
  module.hot.accept();
}
