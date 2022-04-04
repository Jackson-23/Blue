function print(palavra){
    console.log(palavra);
}
let saudacao = 'oi';
print(saudacao);

function calculadora (num1, num2){
console.log("Soma:",num1,"+",num2,"=",(num1+num2));
console.log("Subtração:",num1,"-",num2,"=",num1-num2);
console.log("Multiplicação:",num1,"*",num2,"=",num1*num2);
console.log("Divisão:",num1,"/",num2,"=",num1/num2);
}


// Definindo o Prompt
const prompt = require('prompt-sync')();

//******************************************************************************************************** */

print("Digite 2 números para serem calculados")
let n1 = prompt("num1: ");
let n2 = prompt("num2: ");

calculadora(n1, n2);
