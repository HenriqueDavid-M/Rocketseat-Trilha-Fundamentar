let family = {
    receitas: [3000, 3200, 120],
    despesas: [2300, 3600, 240] 
}

function sum (array) {
    let total= 0;
    for(let value of array){
        total += value
    }
    return total
}

function calcularcaixa () {
    const calcularreceitas = sum(family.receitas)
    const calculardespesas = sum(family.despesas)

    const total = calcularreceitas - calculardespesas

    const ItsOk = total >= 0

    let caixatexto = "Negativo"

    if (ItsOk) {
        caixatexto = "Positivo"
    }
console.log(`Seu saldo é ${caixatexto}: ${total}`)
}
calcularcaixa()