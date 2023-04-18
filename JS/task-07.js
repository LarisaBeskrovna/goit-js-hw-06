const rangeInput = document.getElementById('font-size-control');
const textToChange = document.getElementById('text');



const updateFontSize = () => {
        const fontSize = rangeInput.value;
        textToChange.style.fontSize = `${fontSize}px`;
};

rangeInput.addEventListener('input', updateFontSize);
updateFontSize();

