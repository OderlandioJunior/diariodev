/* Parâmetros, argumentos e retorno de função */

// Um parâmetro em uma função é definido dentro dos parênteses para que a função seja executada de forma certa, dessa forma, a função assimila o valor inserido e faz o bloco de comando
function parImpar(n) {
    if (n%2 == 0) {
        return "Par!"
    } else {
        return "Impar!"
    }
}
// O retorno encerra a execução da função e envia um resultado de volta para o ponto do código onde ela foi chamada
// 223 é um numero ímpar

console.log(parImpar(223))
// O argumento por sua vez é o valor real que você passa para a função quando você a chama

