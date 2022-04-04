console.log();
const prompt = require('prompt-sync')();

let n1=0, n2=0;

n1 = prompt("Digite o primeiro número");
n2 = prompt("Digite o segundo número");

if(n1 > n2){
    console.log(n1 , "é maior do que" , n2);
}else if(n1 < n2){
    console.log(n2 , "é maior do que" , n1);
}else if(n1 == n2){
    console.log(n1 , "é igual ao" , n2);
}