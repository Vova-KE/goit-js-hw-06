function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
const buttonChangeColor = document.querySelector('.change-color');
const titleCurrentColorBody = document.querySelector('.color');

const handleButtonChangeColor = () => {
  titleCurrentColorBody.innerHTML = (body.style.backgroundColor = getRandomHexColor());
};
 
buttonChangeColor.addEventListener('click', handleButtonChangeColor);
