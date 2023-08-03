function createfrases() {
    console.log('Desista enquanto ainda tem tempo')
    console.log('priorize sanidade mental')
    console.log('Hello word')
}

createfrases()
console.log('fim do programa')

//argumentos e parametros

const sum = function(number1, number2){
   console.log(number1+number2)
}

sum(2,3)
sum(523698, 52369874125) //ele soma os dois valores

//arrow, um jeito mais simples de escrever function

const SayMyName = (name) => {
    console.log('Henrique David')
}
SayMyName()

//função construtora

function Person() {}
const HD = new Person ()