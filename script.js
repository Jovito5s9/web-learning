let nome = "Jovito"
let idade = 19
let alto = true
let lista = ["the", "famous", "caramel", "dog"]

const multiplicar = (a,b) => a * b

const obj = {
    nome: "",
    idade: 0,
    alto: false,
    lista: []
}

obj.nome = nome
obj.idade = idade
obj.alto = alto
obj.lista = lista

console.log(obj.nome)
console.log(obj.idade)
console.log(obj.alto)
console.log(obj.lista)

lista.forEach(palavra => console.log(palavra))

function soma(a,b){
    return a + b
}
console.log(soma(0,1))
console.log(multiplicar(12,89.9))