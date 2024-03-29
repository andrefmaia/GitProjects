const lista = [1,2,3,4,5,6,7,8,9,10];


//map serve para percorrer todos os itens do vetor e retornar alguma coisa que quer fazer

/*
const novaLista = lista.map(function(item){
    return item*5;
});
------------------<<<ITEM E INDEX>>>>--------------------------
// (item, index)
const novaLista = lista.map(function(item,index){
    return item+index;
});
console.log(novaLista);
------------------<<< SInTAXE DO REDUCE 2022>>>>--------------------------


const soma = lista.reduce(function(total, proximoItem){
    return total + proximoItem;
});
console.log(soma);
//0
//1
//2
//3
//3
//6
------------------<<< SITAXE DO FIND 2022>>>>--------------------------

*/
const find = lista.find(function(item){
    return item === 6;
});
console.log (find);