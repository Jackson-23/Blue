let numeros = [], impares = [], pares = [];

for(i=0;i<20;i++){
    numeros[i] = i+1;
}
for(i=0;i<20;i++){
    if((numeros[i]%2) != 0)
    impares.push(numeros[i]);
    if((numeros[i]%2) == 0)
    pares.push(numeros[i]);
}
console.log("numeros: " + numeros);
console.log("impares: " + impares);
console.log("pares: " + pares);