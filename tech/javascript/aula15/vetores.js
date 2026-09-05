let frutas = ['maçã', 'banana', 'manga', 'melão', 'melância']
console.log(frutas)
// Diz como é exibida o array
frutas[3] = 'morango'
console.log(frutas)
// Troca a fruta de posição 3 dentro do array que seria o 'melão' po 'morango'
frutas.push('laranja')
console.log(frutas)
// Adiciona a 'laranja' como ultimo elemento dentro do array
for (let pos = 0; pos < frutas.length; pos++){
    console.log(`A posição ${pos} tem o valor ${frutas[pos]}`)
}
// Let pos serve como apontar o dedo pra uma posição numa prateleira e perguntar "o que tem aqui?" — o dedo não vira um item da prateleira (um item de um vetor), ele só indica onde olhar.


let numeros = [5, 8, 4, 6, 7]
console.log(numeros)
// Diz como é exibida o array
numeros.sort()
console.log(numeros)
// Faz com que os números sejam reorganizados de forma crescente
numeros.push(1)
console.log(numeros)
// Adiciona o número 1 como ultimo elemento dentro do array
for (pos in numeros) {
    console.log(`A posição ${pos} tem o valor ${numeros[pos]}`)
}
let procurar = numeros.indexOf(0)
    console.log(`O valor 0 está na posicação ${procurar}`)
