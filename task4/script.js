const button = document.querySelector('a');

button.addEventListener('click', (event) => {
const userText = prompt('Введите текст');
button.textContent = userText;
event.preventDefault();
})