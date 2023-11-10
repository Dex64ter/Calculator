let calculo = document.getElementById('calculo');
const elementoPai = document.querySelector('.rows');
const operator = document.getElementsByClassName('operators');
const limpar = document.getElementById('clear');

let last_operation;
let last_value;
let last_press_button;

limpar.addEventListener('click', () => {
  calculo.textContent = '';
  last_operation = '';
  last_value = '';
})

if (elementoPai) {
  elementoPai.addEventListener('click', (e) => {
    if (last_press_button !== '=') {
      if (e.target && e.target.matches('button')) {
        last_press_button = e.target.id;
        if (e.target.id === '=') {
          Operator(last_operation);
          calculo.textContent = last_value;
        } else{
          calculo.textContent += e.target.id;
        }
      }
    } else {
      if (e.target && e.target.matches('button')) {
        last_press_button = e.target.id;
        calculo.textContent = '';
        calculo.textContent += e.target.id;
      }
    }
  })
  
}

function Operator(op) {
  switch(op) {
    case "+":
      if (last_operation === '+') {
        calculo.textContent = (Number(last_value) + Number(calculo.textContent));
        last_value = calculo.textContent;
        calculo.textContent = '';
        
      } else {
        last_operation = '+';
        last_value = calculo.textContent;
        calculo.textContent = '';
      }
      break;

    case "-":
      if (last_operation === '-') {
        calculo.textContent = (Number(last_value) - Number(calculo.textContent));
        last_value = calculo.textContent;
        calculo.textContent = '';
      } else {
        last_operation = '-';
        last_value = calculo.textContent;
        calculo.textContent = '';
      }
      break;

    case "*":
      if (last_operation === '*') {
        calculo.textContent = (Number(last_value) * Number(calculo.textContent));
        last_value = calculo.textContent;
        calculo.textContent = '';
      } else {
        last_operation = '*';
        last_value = calculo.textContent;
        calculo.textContent = '';
      }
      break;

    case "/":
      if (last_operation === '/') {
        calculo.textContent = (Number(last_value) / Number(calculo.textContent));
        last_value = calculo.textContent;
        calculo.textContent = '';
      } else {
        last_operation = '/';
        last_value = calculo.textContent;
        calculo.textContent = '';
      }
      break;
  }
}

