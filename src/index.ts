import './styles.css';

const incrementButton = document.getElementById('incrementButton') as HTMLButtonElement | null;
const decrementButton = document.getElementById('decrementButton') as HTMLButtonElement | null;
const displayElement = document.getElementById('displayValue') as HTMLParagraphElement | null;

let count = 0;

const updateDisplay = () => {
  if (displayElement) {
    displayElement.textContent = count.toString();
  }
};

if (incrementButton && decrementButton) {
  incrementButton.addEventListener('click', () => {
    count++;
    updateDisplay();
  });

  decrementButton.addEventListener('click', () => {
    count--;
    updateDisplay();
  });
}

if (module.hot) {
  module.hot.accept();
}