let counterValue = 0;
const counter = document.querySelector('#value');
const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action="increment"]');

const handleDecrementButtonClick = () => {
    counter.textContent = counterValue -= 1;
};

const handleIncrementButtonClick = () => {
    counter.textContent = counterValue += 1;
};

decrementButton.addEventListener('click', handleDecrementButtonClick);
incrementButton.addEventListener('click', handleIncrementButtonClick);
