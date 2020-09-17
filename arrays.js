 const produtos =[
    {nome: "Note 8pro", preco: 1469},
    {nome:" Galaxy s8 Plus", preco: 2099},
    {nome:"LG G7 thinQ", preco: 2379},
    {nome:" Motorola One Zoom", preco: 1784},
    {nome:"IPhone 7 Plus", preco: 2079},
    {nome:"Huawai P20 Lite", preco: 1499},
    {nome:"Galaxy M30", preco: 1400},
    {nome:" Asus ZenFone s2", preco: 1369},
    {nome:" Xiami Mi A2", preco: 1050},
    {nome:" Multilaser H", preco: 1349}
]

const produtosCaros = produtos.filter((produto)=> {
    return produto.preco > 1500
})

console.log(produtos);
console.log(produtosCaros);


//LISTA APENAS UMA PARTE DA LISTA (ARRAY) . COMO NO EXEMPLO QUE FILTRA PELO NOME 
const ApenasNomes = produtos.map((produtos) => {
    return produtos.nome
})

console.log(produtos);
console.log(ApenasNomes);

// PEGA O PRIMEIRO ITEM QUE CORRESPONDE COM A CONDIÇÃO 

const ApenasPecos = produtos.find((produto)=>{
    return produto.preco === 2099
})

console.log(produtos);
console.log(ApenasPecos);

//foreche. faz alguma coisa para cada item no array

const ApenasForEach = produtos.forEach((produto)=>{
    console.log(produto.preco);
})

// some retorna vardadeiro ou falso para cada item que corresponde com a condição 

const ApenasSome = produtos.some((produto) => {
    return produto.preco > 1500
})
console.log(produtos);
console.log(ApenasSome);

// avery retorna verdadeiro ou falso se TODOS os itens atenderem a determinada condição

const every = produtos.every((produto) => {
    return produto.preco < 1000
})

console.log(produtos);
console.log(every);

// reduce executa uma ação para cada item do array como por exemplo somar o valor total dos produtos juntos

const reduce = produtos.reduce((precototal, produto) =>{
    return produto.preco + precototal
}, 0)

console.log(produtos);
console.log(reduce);

// include retorna se o array contem determinado elemento como true e false

const numeros = [5,12,9,160,55]
console .log(numeros.includes(55));

//concat vai concatenar dois arrays 

const array1 = ['a', 'b','c'];
const array2 = ['d','e','f'];

const abc = array1.concat(array2)

console.log(abc)

//form pode fazer um array apartir de uma stryng

const asd = 'abcdefghijklmopqrstuvxyz'
const numbers = [1,2,3,4,5,6,7,8,9]

const arrayAsd = Array.from(asd)

console.log(arrayAsd)

//criando um array e editando ao mesmo tempo

const vezesDois =Array.from(numbers, x => x+x)

console.log(vezesDois)


