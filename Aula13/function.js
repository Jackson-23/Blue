const personagem = {
    nome: "João",
    classe: "sem",
    pv: 10,
    ataque: 0,
    defesa: 0,
    taxadeacerto: 0,
    taxadeesquiva: 0,
    taxadecritico: 0
};

const inimigo = {
      nome: "--",
      pv: 10,
      ataque: 0,
      taxadecritico: 1,

      definir (nome,pv,ataque){
        this.nome = nome;
        this.pv = pv;
        this.ataque = ataque;
}
      
};


personagem.nome = "Markus"
//exibindo nomes
console.log(personagem.nome);
console.log(inimigo.tatu.nome);