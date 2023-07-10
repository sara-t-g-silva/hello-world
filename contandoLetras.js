
const palavra = "bismo";
let soma =0;

let encontrado = false;

for(let letra of palavra){
    if(letra === 'a'){
        soma++;
        encontrado = true;
    }
}

if(!encontrado){
    console.log("não encontrou letra a");
}

if(encontrado){
    console.log(soma);
}
