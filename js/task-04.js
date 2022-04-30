let counterValue = 0;

const counter = document.querySelector('#value');

const decrementButton = document.querySelector('button[data-action="decrement"]')
const handleDecrementButtonClick = () => {
    counter.textContent = counterValue -= 1;
};
decrementButton.addEventListener('click', handleDecrementButtonClick);


const incrementButton = document.querySelector('button[data-action="increment"]');
const handleIncrementButtonClick = () => {
    counter.textContent = counterValue += 1;
};
incrementButton.addEventListener('click', handleIncrementButtonClick);
