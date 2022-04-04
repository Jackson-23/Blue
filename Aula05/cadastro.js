console.clear();
const prompt = require('prompt-sync')();

let nome = "";
let idade = 0;
let salario = 0;
let estado_civil = "";

while(false){
    nome = prompt("digite seu nome:");
}
while(nome == "a"){
    idade = prompt("digite seu idade:");
}
while(nome == "a"){
    salario = prompt("digite seu salario:");
}
while(estado_civil == 's' || estado_civil == 'c' || estado_civil == 'v' || estado_civil == 'd'){
    estado_civil = prompt("digite seu Estado Civil:");
}


//Faça um programa que leia e valide as seguintes informações:
//Nome: maior que 3 caracteres;
//Idade: entre 0 e 150;
//Salário: maior que zero;
//Estado Civil: 's', 'c', 'v', 'd';