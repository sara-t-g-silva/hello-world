const  produtos = [
    {
        nomeProduto: "leite",
        preco: 3.50,
        qtdComprado: 1
    },
    {
        nomeProduto: "açucar",
        preco: 3.50,
        qtdComprado: 1
    }
]


const cartao = {
    nomeCliente: "Sara",
    idade: 27,
    produtos: produtos
}
let valorAPagar = 0;

for( let produto of produtos){
    valorAPagar += produto.preco * produto.qtdComprado;
}



console.log("-------------------------------------------------------");

console.log(`Olá ${cartao.nomeCliente} o valor total da sua compra é R$ ${valorAPagar.toFixed(2)}`);

//console.log(cartao.idade);
//cartao.idade = 29;
//console.log(cartao.idade);
//console.log(cartao.produtos[0].nomeProduto);
//console.log(cartao.produtos[cartao.produtos.length-1].preco);

//console.log(cartao.produtos[0].preco);
