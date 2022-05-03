const inputFontSizeControl = document.querySelector('#font-size-control');
const changeFontSizeText = document.querySelector('#text');

const handleChangeFontSize = (event) => {
    changeFontSizeText.style.fontSize = `${event.target.value}px`
};

inputFontSizeControl.addEventListener('input', handleChangeFontSize);