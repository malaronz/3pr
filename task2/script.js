const consoleLog = document.querySelector('#consoleLog')

consoleLog.addEventListener('click', () =>{
    alert('Служит для вывода информации в консоль');
})


const alerto = document.querySelector('#alert')

alerto.addEventListener('click', () =>{
    alert('Служит для вывода преждупреждающего окна на странице');
})

const prompto = document.querySelector('#prompt')

prompto.addEventListener('click', () =>{
    alert('Служит для вывода диалогового окна с сообщением, текстовым полем для ввода данных и кнопками');
})
