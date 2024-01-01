// Crear Calculadora

console.log('Calculadora')
console.log('')

function calc(num1,op,num2){
  let resultado;
  switch (op){
    case "+": resultado = num1 + num2;
      break
    case "-": resultado = num1 - num2;
      break
    case "*": resultado = num1 * num2;
      break
    case "/": resultado = num1 / num2;
      break
    default: resultado = "Operacion no valida"
    break
  }
  console.log(resultado)
}

let num1 = parseInt(prompt("Ingrese 1er número :"));
let num2 = parseInt(prompt("Ingrese 2do número :"));

op = prompt("Ingrese operacion : ");

calc(num1,op,num2);

// Este codigo funciona en la consola del navegador