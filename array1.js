const pessoa = {
    nome: "Sara",
    idade: 27,
    altura: 1.65,
    temCnh: false,
    apelidos: ["sara","sarinha"]
    
};

let textoCnh = "";

if(pessoa.temCnh ===  true){
    textoCnh = "possui cnh";
}else {
    textoCnh = "não possui cnh";
}



console.log(`${pessoa.nome} tem ${pessoa.idade} anos, ${pessoa.altura}m de altura, ${textoCnh} e tem os seguintes apelidos: `);
for( let apelido of pessoa.apelidos){
    console.log(`- ${apelido}`);
}

