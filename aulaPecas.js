
//1- Se a peça possuir um peso superior a 100g, permitido
//2-limite de 10 itens por caixa
//3-peça nao pode ter nome com letras inferiores a 3

console.log('------------------')
let peso = 153

if(peso>100){
    console.log('peso permitido')
}else{
    console.log('peso inferior a 100 gramas, nao pode ser cadastrado')
}

console.log('------------------')
let ListaPecas = 10

if(ListaPecas>10){
    console.log('Limite de caixa foi excedido')
}else{
    console.log('Pode cadastras, capacidade permitida')
}

console.log('------------------')
var nomePeca2 = 'Pe'

if(nomePeca2.length>3){
    console.log('Pode cadastrar')
}else{
    console.log('Nome curto, possivel erro')
}
console.log('------------------')